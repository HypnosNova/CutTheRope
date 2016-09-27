function sweetTouchStar(){
	for(var i=0;i<stars.length;i++){
		var index=world.pArray.getIndex(sweet);
		var distance=MathUtil.getDistanceFromTwoPoint(world.vArray[index],stars[i].position);
		if(distance<45){
			world.vWorld.removeChild(stars[i]);
		}
	}
}
var sweet={},stars=[];
function gameLoad() {
	createWorld();
	renderObject.addStatsView();
	renderObject.addRenderView();

	//加载图片资源
	var loader = new PIXI.loaders.Loader();
	loader.add('sweet', "assets/sweet.png");
	loader.add('box', "assets/box.jpg");
	loader.add('ball', "assets/ball.png");
	loader.add('eater', "assets/eater.png");
	loader.add('circledef', "assets/circledef.png");
	loader.add('boxdef', "assets/boxdef.png");
	loader.add('null', "assets/null.png");
	loader.add('star', "assets/star.png");
	loader.add('bg', "assets/bg.jpg");
	loader.once('complete', makeGameScene);
	loader.load();
}

gameLoad();

function makeGameScene() {
	var airBuoyan = addBuoyancy({
		position: 0,
		density: 0.01,
		angularDrag: 0.2,
		linearDrag: 0.2,
		velocity: {
			x: 0,
			y: 0
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
		isStatic: true,
		friction: 0.8,
		restitution: 0.5,
	});

	var dz = createBallObject({
		position: {
			x: engine_static.worldWidth / 2,
			y: engine_static.worldHeight / 4
		},
		texture: "assets/circledef.png",
		radius: 1,
		height: 1,
		isStatic: true,
		touchFilter: {
			self: 0,
			other: 0
		}
	});
	
	stars[0] = createMagicBall({
		position: {
			x: engine_static.worldWidth / 2,
			y: engine_static.worldHeight / 1.7
		},
		texture: "assets/star.png",
		radius: 20,
		height: 1,
		isStatic: true,
		restitution:0,
		touchFilter: {
			self: 1,
			other: 1
		},
		name:"star",
	});
	
	stars[1] = createMagicBall({
		position: {
			x: engine_static.worldWidth / 2,
			y: engine_static.worldHeight / 1.7+70
		},
		texture: "assets/star.png",
		radius: 20,
		height: 1,
		isStatic: true,
		restitution:0,
		touchFilter: {
			self: 1,
			other: 1
		},
		name:"star",
	});
	stars[2] = createMagicBall({
		position: {
			x: engine_static.worldWidth / 2,
			y: engine_static.worldHeight / 1.7+140
		},
		texture: "assets/star.png",
		radius: 20,
		height: 1,
		isStatic: true,
		restitution:0,
		touchFilter: {
			self: 1,
			other: 1
		},
		name:"star",
	});
	
	sweet = createBallObject({
		position: {
			x: engine_static.worldWidth / 2 + engine_static.worldWidth / 80 * 15,
			y: engine_static.worldHeight / 4 + engine_static.worldHeight / 80 * 15
		},
		texture: "assets/sweet.png",
		radius: 25,
		density: 0.5,
		touchFilter: {
			self: 1,
			other: 1
		},
		restitution: 0.7,
		name: "sweet"
	}, airBuoyan);
	
	var rope = setChainJoint({
		radius: 2,
		density: 10,
		name: "chain",
		touchFilter: {
			self: 16,
			other: 9
		},
		container: airBuoyan
	}, [{
		x: engine_static.worldWidth / 2 + engine_static.worldWidth / 80,
		y: engine_static.worldHeight / 4 + engine_static.worldHeight / 80
	}, {
		x: engine_static.worldWidth / 2 + engine_static.worldWidth / 80 * 2,
		y: engine_static.worldHeight / 4 + engine_static.worldHeight / 80 * 2
	}, {
		x: engine_static.worldWidth / 2 + engine_static.worldWidth / 80 * 3,
		y: engine_static.worldHeight / 4 + engine_static.worldHeight / 80 * 3
	}, {
		x: engine_static.worldWidth / 2 + engine_static.worldWidth / 80 * 4,
		y: engine_static.worldHeight / 4 + engine_static.worldHeight / 80 * 4
	}, {
		x: engine_static.worldWidth / 2 + engine_static.worldWidth / 80 * 5,
		y: engine_static.worldHeight / 4 + engine_static.worldHeight / 80 * 5
	}, {
		x: engine_static.worldWidth / 2 + engine_static.worldWidth / 80 * 6,
		y: engine_static.worldHeight / 4 + engine_static.worldHeight / 80 * 6
	}, {
		x: engine_static.worldWidth / 2 + engine_static.worldWidth / 80 * 7,
		y: engine_static.worldHeight / 4 + engine_static.worldHeight / 80 * 7
	}, {
		x: engine_static.worldWidth / 2 + engine_static.worldWidth / 80 * 8,
		y: engine_static.worldHeight / 4 + engine_static.worldHeight / 80 * 8
	}, {
		x: engine_static.worldWidth / 2 + engine_static.worldWidth / 80 * 9,
		y: engine_static.worldHeight / 4 + engine_static.worldHeight / 80 * 9
	}, {
		x: engine_static.worldWidth / 2 + engine_static.worldWidth / 80 * 10,
		y: engine_static.worldHeight / 4 + engine_static.worldHeight / 80 * 10
	}, {
		x: engine_static.worldWidth / 2 + engine_static.worldWidth / 80 * 11,
		y: engine_static.worldHeight / 4 + engine_static.worldHeight / 80 * 11
	}, {
		x: engine_static.worldWidth / 2 + engine_static.worldWidth / 80 * 12,
		y: engine_static.worldHeight / 4 + engine_static.worldHeight / 80 * 12
	}, {
		x: engine_static.worldWidth / 2 + engine_static.worldWidth / 80 * 13,
		y: engine_static.worldHeight / 4 + engine_static.worldHeight / 80 * 13
	}, {
		x: engine_static.worldWidth / 2 + engine_static.worldWidth / 80 * 14,
		y: engine_static.worldHeight / 4 + engine_static.worldHeight / 80 * 14
	}], dz, sweet);
	/**/
	var eater = createBallObject({
		position: {
			x: engine_static.worldWidth / 2,
			y: engine_static.worldHeight - 75
		},
		texture: "assets/eater.png",
		radius: 37.5,
		density: 0.5,
		touchFilter: {
			self: 1,
			other: 1
		},
		isDragable: true,
		restitution: 0.3,
		name: "sweet"
	}, airBuoyan);

	touchObject.createTouchListen()
	update();
}
//, {
//		x: engine_static.worldWidth / 2 + engine_static.worldWidth / 80 * 10,
//		y: engine_static.worldHeight / 4 + engine_static.worldHeight / 80 * 10
//	}, {
//		x: engine_static.worldWidth / 2 + engine_static.worldWidth / 160 * 11,
//		y: engine_static.worldHeight / 4 + engine_static.worldHeight / 160 * 11
//	}, {
//		x: engine_static.worldWidth / 2 + engine_static.worldWidth / 160 * 12,
//		y: engine_static.worldHeight / 4 + engine_static.worldHeight / 160 * 12
//	}, {
//		x: engine_static.worldWidth / 2 + engine_static.worldWidth / 160 * 13,
//		y: engine_static.worldHeight / 4 + engine_static.worldHeight / 160 * 13
//	}, {
//		x: engine_static.worldWidth / 2 + engine_static.worldWidth / 160 * 14,
//		y: engine_static.worldHeight / 4 + engine_static.worldHeight / 160 * 14
//	}, {
//		x: engine_static.worldWidth / 2 + engine_static.worldWidth / 160 * 15,
//		y: engine_static.worldHeight / 4 + engine_static.worldHeight / 160 * 15
//	}, {
//		x: engine_static.worldWidth / 2 + engine_static.worldWidth / 160 * 16,
//		y: engine_static.worldHeight / 4 + engine_static.worldHeight / 160 * 16
//	}, {
//		x: engine_static.worldWidth / 2 + engine_static.worldWidth / 160 * 17,
//		y: engine_static.worldHeight / 4 + engine_static.worldHeight / 160 * 17
//	}, {
//		x: engine_static.worldWidth / 2 + engine_static.worldWidth / 160 * 18,
//		y: engine_static.worldHeight / 4 + engine_static.worldHeight / 160 * 18
//	}, {
//		x: engine_static.worldWidth / 2 + engine_static.worldWidth / 160 * 19,
//		y: engine_static.worldHeight / 4 + engine_static.worldHeight / 160 * 19
//	}
//--------------------------------------------------------------------------------
//前一个point
//var prePoint = {
//	x: 0,
//	y: 0
//};
////当前的point
//var curPoint = {
//	x: 0,
//	y: 0
//};
////1.设置线段长度segmentLength
//var segmentLength = 20;
//var segmentsList = [];
//var segmentsList2 = [];
//var isDrawing = false;
//var prevPoint = {
//		x: 0,
//		y: 0
//	},
//	nextPoint = {
//		x: 0,
//		y: 0
//	};

document.addEventListener("mouseup", function(event) {
	world.pWorld.DestroyBody(cutBody);
	world.vWorld.removeChild(world.vArray[world.vArray.length-1]);
	cutBody=null;

}, true);
document.addEventListener("touchend", function(event) {
	world.pWorld.DestroyBody(cutBody);
	world.vWorld.removeChild(world.vArray[world.vArray.length-1]);
	cutBody=null;

}, true);

var cutBody = null;
document.addEventListener("mousedown", function(event) {
	if(!cutBody) {
		cutBody = createBallObject({
			position: {
				x: event.clientX,
				y: event.clientY
			},
			//texture: "assets/eater.png",
			radius: 10,
			density: 10,
			touchFilter: {
				self: 8,
				other: 16
			},
			isDragable: true,
			restitution: 0.3,
			name: "cut"
		})
	}
}, true);

document.addEventListener("touchstart", function(event) {
	event = event.changedTouches[0];
	if(!cutBody) {
		cutBody = createBallObject({
			position: {
				x: event.clientX,
				y: event.clientY
			},
			//texture: "assets/eater.png",
			radius: 10,
			density: 10,
			touchFilter: {
				self: 8,
				other: 16
			},
			isDragable: true,
			restitution: 0.3,
			name: "cut"
		})
	}
}, true);

