var engine_static = {
	//场景的长度单位，任何东西的长度放到场景里就要除以这个单位
	renderPause:false,//是否需要暂停渲染
	meter: 100,
	worldWidth: window.innerHeight/16*9,
	worldHeight: window.innerHeight,
	//圆形刚体默认属性
	ballObjectProperty: {
		name:"",//名字
		radius: 25, //半径
		isStatic: false, //是否是静态刚体
		texture: null, //贴图
		color: 0xffffff, //如果没有贴图，会用纯色
		density: 1, //密度
		restitution: 0.5, //弹性
		friction: 0.5, //摩擦系数
		position: {
			x: 0,
			y: 0
		}, //初始位置
		rotation: 0, //初始旋转角度
		isDragable: false, //是否可以被鼠标拖拽
		touchFilter: {
			self: 1,
			other: 65535
		}
	},
	//方块刚体默认属性
	boxObjectProperty: {
		name:"",//名字
		width: 25, //宽度
		height: 25, //高度
		isStatic: false, //是否是静态刚体
		texture: null, //贴图
		color: 0xffffff, //如果没有贴图，会用纯色
		density: 1, //密度
		restitution: 0.5, //弹性
		friction: 0.5, //摩擦系数
		position: {
			x: 0,
			y: 0
		}, //初始位置
		rotation: 0, //初始旋转角度
		isDragable: false, //是否可以被鼠标拖拽
		touchFilter: {
			self: 1,
			other: 65535
		}
	},
	//浮力的属性
	buoyanProperty: {
		density: 1, //介质密度
		linearDrag: 1, //移动阻尼
		angularDrag: 1, //旋转阻尼
		position: 0, //位置
		buoyanAngle: { //浮力的方向
			x: 0,
			y: -1
		},
		display: false,
		color: 0xffffff,
		velocity:{//介质流动速度
			x:0,
			y:0
		}
	},
	//世界的属性
	worldProperty: {
		//重力加速度
		gravity: {
			x: 0,
			y: 10
		},
		transparentBackground:true,
		backgroundColor: 0xeeeeee,
	},
	//锁链配置
	chainProperty: {
		color: 0x010101,
		isDragable: false,
		touchFilter: {
			self: 0,
			other: 0
		},
		radius: 1, //半径
		density: 1, //密度
		restitution: 0.5, //弹性
		friction: 0.5, //摩擦系数
		container:null,//是否有受到浮力影响
		chain:""
	}
}

var world = {
		vWorld: {}, //视图世界
		pWorld: {}, //物理世界
		vArray: [], //视图元素
		pArray: [], //物理元素
		touchFilters: [], //碰撞筛选器数组
		contactListener:{}//碰撞监听器
	}
	//处理点击，拖拽等事件有关的东西
var touchObject = {
		touchX: 0,
		touchY: 0,
		isBegin: false,
		mouseJoint: null,
		onMove: function(event) {
			if(event["changedTouches"]) {
				var touche = event["changedTouches"][0];
				touchObject.touchX = touche.pageX / engine_static.meter;
				touchObject.touchY = touche.pageY / engine_static.meter;
			} else {
				touchObject.touchX = event.clientX / engine_static.meter;
				touchObject.touchY = event.clientY / engine_static.meter;
			}
		},
		createTouchListen: function() {
			document.addEventListener("mousedown", function(event) {
				touchObject.isBegin = true;
				touchObject.onMove(event);
				document.addEventListener("mousemove", touchObject.onMove, true);
			}, true);

			document.addEventListener("mouseup", function(event) {
				document.removeEventListener("mousemove", touchObject.onMove, true);
				touchObject.isBegin = false;
				touchObject.touchX = undefined;
				touchObject.touchY = undefined;
			}, true);

			renderObject.renderer.view.addEventListener("touchstart", function(event) {
				touchObject.isBegin = true;
				touchObject.onMove(event);
				renderObject.renderer.view.addEventListener("touchmove", touchObject.onMove, true);
			}, true);

			renderObject.renderer.view.addEventListener("touchend", function(event) {
				renderObject.renderer.view.removeEventListener("touchmove", touchObject.onMove, true);
				touchObject.isBegin = false;
				touchObject.touchX = undefined;
				touchObject.touchY = undefined;
			}, true);
		},
		getBodyAtMouse: function() {
			const mousePos = new Box2D.Common.Math.b2Vec2(touchObject.touchX, touchObject.touchY);
			const aabb = new Box2D.Collision.b2AABB();
			aabb.lowerBound.Set(touchObject.touchX - 0.001, touchObject.touchY - 0.001);
			aabb.upperBound.Set(touchObject.touchX + 0.001, touchObject.touchY + 0.001);

			var body;
			world.pWorld.QueryAABB(
				function(fixture) {
					if(fixture.GetBody().GetType() != Box2D.Dynamics.b2BodyDef.b2_staticBody) {
						if(fixture.GetShape().TestPoint(fixture.GetBody().GetTransform(), mousePos)) {
							body = fixture.GetBody();
							return false;
						}
					}
					return true;
				}, aabb);

			return body;
		}
	}
	//和渲染有关的东西
var renderObject = {
	renderer: PIXI.autoDetectRenderer(engine_static.worldWidth, engine_static.worldHeight, {
		backgroundColor: engine_static.worldProperty.backgroundColor,
		transparent:engine_static.worldProperty.transparentBackground,
		antialias:true
	}, false),
	stats: new Stats(),
	//将渲染后的画面放到页面里
	addRenderView: function() {
		document.body.appendChild(renderObject.renderer.view);
	},
	//将fps信息放到页面里
	addStatsView: function() {
		var container = document.createElement("div");
		document.body.appendChild(container);
		container.appendChild(renderObject.stats.domElement);
		renderObject.stats.domElement.style.position = "absolute";
	},
}

function createWorld(options) {
	//渲染循环调用函数
	if(!window.requestAnimationFrame) {
		window.requestAnimationFrame = (function() {
			return window.webkitRequestAnimationFrame ||
				window.mozRequestAnimationFrame ||
				window.oRequestAnimationFrame ||
				window.msRequestAnimationFrame ||
				function(callback) {
					window.setTimeout(callback, 1000 / 60);
				};
		})();
	}
	var theOption = $.extend({}, engine_static.worldProperty, options);
	//创建视图世界
	world.vWorld = new PIXI.Container();//(theOption.backgroundColor, true);
	//创建物理世界
	world.pWorld = new Box2D.Dynamics.b2World(new Box2D.Common.Math.b2Vec2(theOption.gravity.x, theOption.gravity.y), true);
	//创建碰撞监听
	world.contactListener=new Box2D.Dynamics.b2ContactListener();
	world.pWorld.SetContactListener(world.contactListener);
	
	world.contactListener.BeginContact=function(e){
		var bodyA=e.m_fixtureA.m_body;
		var bodyB=e.m_fixtureB.m_body;
		doContactBegin(bodyA,bodyB);//当物体碰撞，需要处理事情的话咋你这里处理
		
	}
	world.contactListener.EndContact=function(e){

	}
}

//创建碰撞筛选器
function createTouchFilter(options) {
	var defFilter = new Box2D.Dynamics.b2FilterData();
	//设置自身碰撞类别
	defFilter.categoryBits = options.self;
	//设置刚体与其他哪些类别的进行碰撞
	defFilter.maskBits = options.other;
	return defFilter;
}

//创建一个球在场景里
function createBallObject(options, container) {
	//--------------创建物理实体-------------
	//设置对象的各个属性值
	var theOption = $.extend({}, engine_static.ballObjectProperty, options);
	var circleFixture = new Box2D.Dynamics.b2FixtureDef();
	circleFixture.shape = new Box2D.Collision.Shapes.b2CircleShape();
	circleFixture.density = theOption.density;
	circleFixture.friction = theOption.friction;
	circleFixture.restitution = theOption.restitution;
	circleFixture.shape.SetRadius(theOption.radius / engine_static.meter);
	circleFixture.filter = createTouchFilter({
		self: theOption.touchFilter.self,
		other: theOption.touchFilter.other
	});
	//定义刚体
	var bodyDef = new Box2D.Dynamics.b2BodyDef();
	//是否是静态刚体
	if(theOption.isStatic) {
		bodyDef.type = Box2D.Dynamics.b2Body.b2_staticBody;
	} else {
		bodyDef.type = Box2D.Dynamics.b2Body.b2_dynamicBody
	}
	//设置刚体位置
	bodyDef.position.Set(theOption.position.x / engine_static.meter, theOption.position.y / engine_static.meter);

	var pball = world.pWorld.CreateBody(bodyDef);
	pball.CreateFixture(circleFixture);
	pball.isDragable = theOption.isDragable;
	pball.name=theOption.name;
	world.pArray.push(pball); //将物理物体加入数组和视图物体进行绑定
	if(container) {
		container.AddBody(pball);
	}
	//-----------------创建视图物体----------------
	if(theOption.texture) {
		var vball = new PIXI.Sprite(PIXI.Texture.fromFrame(theOption.texture));
		world.vWorld.addChild(vball);
		vball.i = i;
		vball.anchor.x = vball.anchor.y = 0.5;
		vball.scale.x = vball.scale.y = 0.5;
		world.vArray.push(vball); //将视图物体加入数组和物理实体进行绑定
	} else {
		var vbox = new PIXI.Sprite();
		var graphics = new PIXI.Graphics();
		graphics.lineStyle(0);
		graphics.beginFill(theOption.color, 1);
		graphics.drawCircle(0, 0, theOption.radius);
		graphics.endFill();
		vbox.addChild(graphics);
		world.vWorld.addChild(vbox);
		vbox.i = i;
		vbox.anchor.x = vbox.anchor.y = 0.5;
		world.vArray.push(vbox); //将视图物体加入数组和物理实体进行绑定
	}
	return pball;
}

//创建一个非物理性质的球
function createMagicBall(options, container) {
	//设置对象的各个属性值
	var theOption = $.extend({}, engine_static.ballObjectProperty, options);
	//-----------------创建视图物体----------------
	var vball;
	if(theOption.texture) {
		vball = new PIXI.Sprite(PIXI.Texture.fromFrame(theOption.texture));
		world.vWorld.addChild(vball);
		vball.i = i;
		vball.anchor.x = vball.anchor.y = 0.5;
		vball.scale.x = vball.scale.y = 0.5;
		vball.position.x=theOption.position.x;
		vball.position.y=theOption.position.y;
	} else {
		vball = new PIXI.Sprite();
		var graphics = new PIXI.Graphics();
		graphics.lineStyle(0);
		graphics.beginFill(theOption.color, 1);
		graphics.drawCircle(0, 0, theOption.radius);
		graphics.endFill();
		vball.addChild(graphics);
		world.vWorld.addChild(vball);
		vball.i = i;
		vball.anchor.x = vbox.anchor.y = 0.5;
		vball.position.x=theOption.position.x;
		vball.position.y=theOption.position.y;
	}
	return vball;
}

//创建一个球在场景里，但是不创建可见物
function createInvisibileBallObject(options, container) {
	//--------------创建物理实体-------------
	//设置对象的各个属性值
	var theOption = $.extend({}, engine_static.ballObjectProperty, options);
	var circleFixture = new Box2D.Dynamics.b2FixtureDef();
	circleFixture.shape = new Box2D.Collision.Shapes.b2CircleShape();
	circleFixture.density = theOption.density;
	circleFixture.friction = theOption.friction;
	circleFixture.restitution = theOption.restitution;
	circleFixture.shape.SetRadius(theOption.radius / engine_static.meter);
	circleFixture.filter = createTouchFilter({
		self: theOption.touchFilter.self,
		other: theOption.touchFilter.other
	});
	//定义刚体
	var bodyDef = new Box2D.Dynamics.b2BodyDef();
	//是否是静态刚体
	if(theOption.isStatic) {
		bodyDef.type = Box2D.Dynamics.b2Body.b2_staticBody;
	} else {
		bodyDef.type = Box2D.Dynamics.b2Body.b2_dynamicBody
	}
	//设置刚体位置
	bodyDef.position.Set(theOption.position.x / engine_static.meter, theOption.position.y / engine_static.meter);

	var pball = world.pWorld.CreateBody(bodyDef);
	pball.CreateFixture(circleFixture);
	pball.isDragable = theOption.isDragable;
	pball.name=theOption.name;
	//world.pArray.push(pball); //将物理物体加入数组和视图物体进行绑定
	if(container) {
		container.AddBody(pball);
	}
	return pball;
}

//创建方块物体
function createBoxObject(options, container) {
	//--------------创建物理实体-------------
	//设置对象的各个属性值
	var theOption = $.extend({}, engine_static.boxObjectProperty, options);
	var boxFixture = new Box2D.Dynamics.b2FixtureDef();
	boxFixture.shape = new Box2D.Collision.Shapes.b2PolygonShape();
	boxFixture.density = theOption.density;
	boxFixture.friction = theOption.friction;
	boxFixture.restitution = theOption.restitution;
	boxFixture.shape.SetAsBox(theOption.width / engine_static.meter, theOption.height / engine_static.meter);
	boxFixture.filter = createTouchFilter({
		self: theOption.touchFilter.self,
		other: theOption.touchFilter.other
	});
	boxFixture.name=theOption.name;
	//定义刚体
	var bodyDef = new Box2D.Dynamics.b2BodyDef();
	//是否是静态刚体
	if(theOption.isStatic) {
		bodyDef.type = Box2D.Dynamics.b2Body.b2_staticBody;
	} else {
		bodyDef.type = Box2D.Dynamics.b2Body.b2_dynamicBody
	}
	//设置刚体位置
	bodyDef.position.Set(theOption.position.x / engine_static.meter, theOption.position.y / engine_static.meter);
	var pbox = world.pWorld.CreateBody(bodyDef);
	pbox.CreateFixture(boxFixture);
	pbox.isDragable = theOption.isDragable;
	pbox.name=theOption.name;
	world.pArray.push(pbox); //将物理物体加入数组和视图物体进行绑定
	if(container) {
		container.AddBody(pbox);
	}
	//-----------------创建视图物体----------------
	if(theOption.texture) {
		var vbox = new PIXI.Sprite(PIXI.Texture.fromFrame(theOption.texture));
		world.vWorld.addChild(vbox);
		vbox.i = i;
		vbox.anchor.x = vbox.anchor.y = 0.5;
		vbox.scale.x = vbox.scale.y = 0.5;
		world.vArray.push(vbox); //将视图物体加入数组和物理实体进行绑定
	} else {
		var vbox = new PIXI.Sprite();
		var graphics = new PIXI.Graphics();
		graphics.lineStyle(0, theOption.color,0);
		graphics.beginFill(theOption.color, 1);
		graphics.drawRect(0, 0, theOption.width*2, theOption.height*2);
		graphics.x=-theOption.width;
		graphics.y=-theOption.height;
		vbox.addChild(graphics);
		world.vWorld.addChild(vbox);
		vbox.i = i;
		vbox.anchor.x = vbox.anchor.y = 0.5;
		world.vArray.push(vbox); //将视图物体加入数组和物理实体进行绑定
	}

	return pbox;
}

//创建方块物体
function createInvisibleBoxObject(options, container) {
	//--------------创建物理实体-------------
	//设置对象的各个属性值
	var theOption = $.extend({}, engine_static.boxObjectProperty, options);
	var boxFixture = new Box2D.Dynamics.b2FixtureDef();
	boxFixture.shape = new Box2D.Collision.Shapes.b2PolygonShape();
	boxFixture.density = theOption.density;
	boxFixture.friction = theOption.friction;
	boxFixture.restitution = theOption.restitution;
	boxFixture.shape.SetAsBox(theOption.width / engine_static.meter, theOption.height / engine_static.meter);
	boxFixture.filter = createTouchFilter({
		self: theOption.touchFilter.self,
		other: theOption.touchFilter.other
	});
	boxFixture.name=theOption.name;
	//定义刚体
	var bodyDef = new Box2D.Dynamics.b2BodyDef();
	//是否是静态刚体
	if(theOption.isStatic) {
		bodyDef.type = Box2D.Dynamics.b2Body.b2_staticBody;
	} else {
		bodyDef.type = Box2D.Dynamics.b2Body.b2_dynamicBody
	}
	//设置刚体位置
	bodyDef.position.Set(theOption.position.x / engine_static.meter, theOption.position.y / engine_static.meter);
	var pbox = world.pWorld.CreateBody(bodyDef);
	pbox.CreateFixture(boxFixture);
	pbox.isDragable = theOption.isDragable;
	pbox.name=theOption.name;
	//world.pArray.push(pbox); //将物理物体加入数组和视图物体进行绑定
	if(container) {
		container.AddBody(pbox);
	}
	return pbox;
}


//渲染循环
function update() {
	requestAnimationFrame(update);
	if(engine_static.renderPause){return;}
	//是否拖拽物体
	if(touchObject.isBegin && !touchObject.mouseJoint) {
		const dragBody = touchObject.getBodyAtMouse();
		if(dragBody && dragBody.isDragable) {
			const jointDef = new Box2D.Dynamics.Joints.b2MouseJointDef();
			jointDef.bodyA = world.pWorld.GetGroundBody();
			jointDef.bodyB = dragBody;
			jointDef.target.Set(touchObject.touchX, touchObject.touchY);
			jointDef.collideConnected = true;
			jointDef.maxForce = 10000.0 * dragBody.GetMass();
			touchObject.mouseJoint = world.pWorld.CreateJoint(jointDef);
			dragBody.SetAwake(true);
		}
	}

	if(touchObject.mouseJoint) {
		if(touchObject.isBegin)
			touchObject.mouseJoint.SetTarget(new Box2D.Common.Math.b2Vec2(touchObject.touchX, touchObject.touchY));
		else {
			world.pWorld.DestroyJoint(touchObject.mouseJoint);
			touchObject.mouseJoint = null;
		}
	}

	world.pWorld.Step(1 / 60, 3, 3);
	world.pWorld.ClearForces();

	var n = world.vArray.length;
	for(var i = 0; i < n; i++) {
		var body = world.pArray[i];
		var actor = world.vArray[i];
		var position = body.GetPosition();
		actor.position.x = position.x * 100;
		actor.position.y = position.y * 100;
		actor.rotation = body.GetAngle();
	}
	
	doSpecialAction();//抽出来一个函数，各类游戏的专有轮询处理写在这个函数里
	
	renderObject.renderer.render(world.vWorld);
	renderObject.stats.update();
}

function addBuoyancy(options) {
	//设置浮力
	var theOption = $.extend({}, engine_static.buoyanProperty, options);
	var buoyanController = new Box2D.Dynamics.Controllers.b2BuoyancyController();
	buoyanController.normal.Set(theOption.buoyanAngle.x, theOption.buoyanAngle.y);
	buoyanController.offset = theOption.position / engine_static.meter;
	buoyanController.density = theOption.density;
	buoyanController.linearDrag = theOption.linearDrag;
	buoyanController.angularDrag = theOption.angularDrag;
	buoyanController.velocity.x=theOption.velocity.x;
	buoyanController.velocity.y=theOption.velocity.y;
	world.pWorld.AddController(buoyanController);

	if(theOption.display) {
		//让浮力区域可见
		var graphics = new PIXI.Graphics();
		// set a fill and a line style again and draw a rectangle
		graphics.lineStyle(0, theOption.color, 0);
		graphics.beginFill(theOption.color, 1);
		graphics.drawRect(0, -theOption.position, engine_static.worldWidth, engine_static.worldHeight);
		world.vWorld.addChild(graphics);
	}

	return buoyanController;
}

//设置距离链接
function setDistanceJoint(obj1, obj2) {
	var distanceJointDef = new Box2D.Dynamics.Joints.b2DistanceJointDef();
	distanceJointDef.Initialize(obj1, obj2, obj1.GetWorldCenter(), obj2.GetWorldCenter());
	return world.pWorld.CreateJoint(distanceJointDef);
}

//设置焊接连接
function createWeld(obj1, obj2){ 
    var weldJointDef = new Box2D.Dynamics.Joints.b2WeldJointDef();
    weldJointDef.Initialize(obj1, obj2, obj1.GetWorldCenter());
	return world.CreateJoint(weldJointDef);
};

//设置锁链链接
function setChainJoint(options, array, obj1, obj2) {
	var chain=[];
	chain.push(obj1);
	var theOption = $.extend({}, engine_static.chainProperty, options);
	var tmp = obj1,tmp2;
	for(var i = 0; i < array.length; i++) {
		theOption.position=array[i];
		tmp2=createInvisibleBoxObject(theOption,theOption.container);
		tmp2.ropeId=theOption.ropeId;
		setDistanceJoint(tmp,tmp2);
		chain.push(tmp2)
		tmp=tmp2;
	}
	setDistanceJoint(tmp,obj2);
	chain.push(obj2);
	return chain;
}

