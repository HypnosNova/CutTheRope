levelScript[7] = function() {
	var bg = new PIXI.Sprite(PIXI.Texture.fromFrame("../assets/bg.jpg"));
	world.vWorld.addChild(bg);
	bg.anchor.x = bg.anchor.y = 0;
	bg.scale.x = bg.scale.y = engine_static.worldHeight / 1024;
	gameResult = 1;
	airBuoyan = addBuoyancy({
		position: 1000,
		density: 12,
		angularDrag: 0,
		linearDrag: 0,
		velocity: {
			x: 0,
			y: 0
		}
	});
	createMagicBox({
		texture: "../assets/chair.png",
		scaleX: 1.1,
		scaleY: 1.1,
		position: {
			x: engine_static.worldWidth * 0.5,
			y: engine_static.worldHeight * 0.2
		},
		width: 180,
		height: 180
	});
	eaters = createEaters([{
		x: engine_static.worldWidth * 0.5,
		y: engine_static.worldHeight * 0.2 - 20,
		hasEaten: 1,
		container: airBuoyan
	}]);
	var dz = createDZ({
		x: engine_static.worldWidth * 0.85,
		y: engine_static.worldHeight * 0.25
	});
	var dz1 = createDZ({
		x: engine_static.worldWidth * 0.15,
		y: engine_static.worldHeight * 0.25
	});

	stars = createStars([{
		x: engine_static.worldWidth * 0.4,
		y: engine_static.worldHeight * 0.30
	}, {
		x: engine_static.worldWidth * 0.15,
		y: engine_static.worldHeight * 0.15
	}, {
		x: engine_static.worldWidth *0.15,
		y: engine_static.worldHeight * 0.55
	}])
	var boxHavy=createBoxObject({
		position:{
			x:engine_static.worldWidth*0.85,
			y:engine_static.worldHeight*0.4
		},
		color:0x00ffff,
		density:4,
		width:engine_static.worldWidth*0.08,
		height:engine_static.worldHeight*0.045,
		name:"havyBox"
	});
	sweets[0] = createBallObject({
		position: {
			x: engine_static.worldWidth * 0.15,
			y: engine_static.worldHeight * 0.4
		},
		texture: "../assets/sweet.png",
		radius: 25,
		density: 0.5,
		touchFilter: {
			self: 1,
			other: 1
		},
		restitution: 0.7,
		name: "sweet"
	});

	ropes[0] = {
		p: setChainJoint({
			radius: 2,
			width: 2,
			height: 2,
			density: 30,
			name: "chain",
			touchFilter: {
				self: 16,
				other: 9
			},
			container: airBuoyan,
			ropeId: 0
		}, [{
			x: engine_static.worldWidth * 0.15,
			y: engine_static.worldHeight * 0.28
		},{
			x: engine_static.worldWidth * 0.15,
			y: engine_static.worldHeight * 0.31
		},{
			x: engine_static.worldWidth * 0.15,
			y: engine_static.worldHeight * 0.34
		},{
			x: engine_static.worldWidth * 0.15,
			y: engine_static.worldHeight * 0.37
		}], dz1, sweets[0]),
		v: new PIXI.Graphics()
	};
	ropes[1] = {
		p: setChainJoint({
			radius: 2,
			width: 2,
			height: 2,
			density: 60,
			name: "chain",
			touchFilter: {
				self: 16,
				other: 9
			},
			container: airBuoyan,
			ropeId: 1
		}, [{
			x: engine_static.worldWidth * 0.85,
			y: engine_static.worldHeight * 0.28
		},{
			x: engine_static.worldWidth * 0.85,
			y: engine_static.worldHeight * 0.31
		},{
			x: engine_static.worldWidth * 0.85,
			y: engine_static.worldHeight * 0.34
		},{
			x: engine_static.worldWidth * 0.85,
			y: engine_static.worldHeight * 0.37
		}], dz, boxHavy),
		v: new PIXI.Graphics()
	};
//	world.vWorld.addChild(ropes[0].v)
	world.vWorld.addChild(ropes[0].v)
	world.vWorld.addChild(ropes[1].v)
	
	var qqb=createBoxObject({
		position:{
			x:engine_static.worldWidth/2,
			y:engine_static.worldHeight*0.8
		},
		color:0x0000ff,
		density:1,
		width:engine_static.worldWidth*0.45,
		height:engine_static.worldHeight*0.02
	});
	var ddz=createDZ({
		x:engine_static.worldWidth/2,
		y:engine_static.worldHeight*0.8
	})
	setRevoluteJoint(qqb,ddz);
	bubbles[0] = createMagicBall({
		position: {
			x: engine_static.worldWidth * 0.15,
			y: engine_static.worldHeight * 0.65
		},
		radius: 30,
		texture: "../assets/bubble.png",
		name: "bubble"
	});
	airBuoyan = addBuoyancy({
		position: 1000,
		density: 2.0,
		angularDrag: 0.4,
		linearDrag: 2,
		velocity: {
			x: 0,
			y: 0
		}
	});
	
}