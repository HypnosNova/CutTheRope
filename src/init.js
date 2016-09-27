function gameLoad() {
	createWorld();
	renderObject.addStatsView();
	renderObject.addRenderView();

	//加载图片资源
	var loader = new PIXI.loaders.Loader(); // you can also create your own if you want
	loader.add('sweet', "assets/sweet.png");
	loader.add('box', "assets/box.jpg");
	loader.add('ball', "assets/ball.png");
	loader.add('eater', "assets/eater.png");
	loader.add('circledef', "assets/circledef.png");
	loader.add('boxdef', "assets/boxdef.png");
	loader.add('null', "assets/null.png");
	loader.once('complete', makeGameScene);
	loader.load();
}

gameLoad();

function makeGameScene() {
	var airBuoyan = addBuoyancy({
		position: 0,
		density: 0.01,
		angularDrag: 0.2,
		linearDrag: 0.05,
		velocity:{
			x:0,
			y:0
		}
	});
	//down
	createBoxObject({
		position: {
			x: engine_static.worldWidth / 2,
			y: engine_static.worldHeight + 1
		},
		width: engine_static.worldWidth,
		height: 1,
		isStatic: true
	});

	setDistanceJoint(createBallObject({
			position: {
				x: 300,
				y: 0
			},
			//texture: "assets/sweet.png",
			color: 0xff0000,
			radius: 25,
			isDragable: true,
			density: 0.5,
			touchFilter: {
				self: 1,
				other: 1
			}
		}, airBuoyan),
		createBoxObject({
			position: {
				x: 300,
				y: 100
			},
			color: 0xff0000,
			texture: "assets/box.jpg",
			width: 25,
			height: 25,
			isDragable: true,
			density: 2,
			touchFilter: {
				self: 2048,
				other: 2049
			}
		}, airBuoyan));

	var dz = createBallObject({
		position: {
			x: engine_static.worldWidth / 2,
			y: engine_static.worldHeight / 4
		},
		texture: "assets/circledef.png",
		radius: 1,
		height: 1,
		isStatic: true,
		touchFilter:{
			self:0,
			other:0
		}
	});
	var sweet = createBallObject({
		position: {
			x: engine_static.worldWidth / 2,
			y: engine_static.worldHeight / 2
		},
		texture: "assets/sweet.png",
		radius: 25,
		isDragable: true,
		density: 0.5,
		touchFilter: {
			self: 1,
			other: 1
		},
		name:"sweet"
	}, airBuoyan);
	setChainJoint({radius:2,density:10,isDragable:true}, [{
		x: engine_static.worldWidth / 2,
		y: engine_static.worldHeight / 4+engine_static.worldHeight / 40
	},{
		x: engine_static.worldWidth / 2,
		y: engine_static.worldHeight / 4+engine_static.worldHeight / 40*2
	},{
		x: engine_static.worldWidth / 2,
		y: engine_static.worldHeight / 4+engine_static.worldHeight / 40*3
	},{
		x: engine_static.worldWidth / 2,
		y: engine_static.worldHeight / 4+engine_static.worldHeight / 40*4
	},{
		x: engine_static.worldWidth / 2,
		y: engine_static.worldHeight / 4+engine_static.worldHeight / 40*5
	},{
		x: engine_static.worldWidth / 2,
		y: engine_static.worldHeight / 4+engine_static.worldHeight / 40*6
	},{
		x: engine_static.worldWidth / 2,
		y: engine_static.worldHeight / 4+engine_static.worldHeight / 40*7
	},{
		x: engine_static.worldWidth / 2,
		y: engine_static.worldHeight / 4+engine_static.worldHeight / 40*8
	},{
		x: engine_static.worldWidth / 2,
		y: engine_static.worldHeight / 4+engine_static.worldHeight / 40*9
	},{
		x: engine_static.worldWidth / 2,
		y: engine_static.worldHeight / 4+engine_static.worldHeight / 40*10
	}], dz, sweet);

	touchObject.createTouchListen()
	update();
}