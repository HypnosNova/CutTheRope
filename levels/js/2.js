function makeGameScene() {
	gameResult=1;
	inLevel=true;
	var bg = new PIXI.Sprite(PIXI.Texture.fromFrame("../assets/bg.jpg"));
	world.vWorld.addChild(bg);
	bg.anchor.x = bg.anchor.y = 0;
	bg.scale.x = bg.scale.y = engine_static.worldHeight / 1024;
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

	var dz1 = createDZ({
			x: engine_static.worldWidth * 0.50,
			y: engine_static.worldHeight * 0.15
		});

	var dz2 = createBallObject({
		position: {
			x: engine_static.worldWidth * 0.1,
			y: engine_static.worldHeight * 0.4
		},
		texture: "../assets/fix.png",
		radius: 1,
		height: 1,
		isStatic: true,
		touchFilter: {
			self: 0,
			other: 0
		}
	});
	
	var dz3 = createBallObject({
		position: {
			x: engine_static.worldWidth * 0.5,
			y: engine_static.worldHeight * 0.65
		},
		texture: "../assets/fix.png",
		radius: 1,
		height: 1,
		isStatic: true,
		touchFilter: {
			self: 0,
			other: 0
		}
	});
	
	var dz4 = createBallObject({
		position: {
			x: engine_static.worldWidth * 0.9,
			y: engine_static.worldHeight * 0.4
		},
		texture: "../assets/fix.png",
		radius: 1,
		height: 1,
		isStatic: true,
		touchFilter: {
			self: 0,
			other: 0
		}
	});

	stars = createStars([{
		x: engine_static.worldWidth *0.5,
		y: engine_static.worldHeight *0.55
	}, {
		x: engine_static.worldWidth *0.1,
		y: engine_static.worldHeight *0.65 
	}, {
		x: engine_static.worldWidth * 0.5,
		y: engine_static.worldHeight *0.9
	}])

	sweets[0] = createBallObject({
		position: {
			x: engine_static.worldWidth *0.5,
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
	}, airBuoyan);

	ropes[0] = {
		p: setChainJoint({
			radius: 2,
			width: 2,
			height: 2,
			density: 10,
			name: "chain",
			touchFilter: {
				self: 16,
				other: 9
			},
			container: airBuoyan,
			ropeId: 0
		}, [{
			x: engine_static.worldWidth * 0.50 ,
			y: engine_static.worldHeight * 0.15 + engine_static.worldHeight * 0.025
		}, {
			x: engine_static.worldWidth * 0.50 ,
			y: engine_static.worldHeight * 0.15 + engine_static.worldHeight * 0.05
		},{
			x: engine_static.worldWidth * 0.50 ,
			y: engine_static.worldHeight * 0.15 + engine_static.worldHeight * 0.075
		}, {
			x: engine_static.worldWidth * 0.50 ,
			y: engine_static.worldHeight * 0.15 + engine_static.worldHeight * 0.1
		},{
			x: engine_static.worldWidth * 0.50 ,
			y: engine_static.worldHeight * 0.15 + engine_static.worldHeight * 0.125
		}, {
			x: engine_static.worldWidth * 0.50 ,
			y: engine_static.worldHeight * 0.15 + engine_static.worldHeight * 0.15
		},{
			x: engine_static.worldWidth * 0.50 ,
			y: engine_static.worldHeight * 0.15 + engine_static.worldHeight * 0.175
		}, {
			x: engine_static.worldWidth * 0.50 ,
			y: engine_static.worldHeight * 0.15 + engine_static.worldHeight * 0.2
		},{
			x: engine_static.worldWidth * 0.50 ,
			y: engine_static.worldHeight * 0.15 + engine_static.worldHeight * 0.225
		}], dz1, sweets[0]),
		v: new PIXI.Graphics()
	};
	world.vWorld.addChild(ropes[0].v)

	/**/
	createMagicBox({
		texture: "../assets/chair.png",
		scaleX: 1.1,
		scaleY: 1.1,
		position: {
			x: engine_static.worldWidth *0.8,
			y: engine_static.worldHeight *0.75
		},
		width:180,
		height:180
	})
	eaters = createEaters([{
		x: engine_static.worldWidth *0.8,
		y: engine_static.worldHeight *0.75-20,
		hasEaten: 1,
		container: airBuoyan
	}]);
	ropes[1] = {
		p: setChainJoint({
			radius: 2,
			width: 2,
			height: 2,
			density: 15,
			name: "chain",
			touchFilter: {
				self: 16,
				other: 9
			},
			container: airBuoyan,
			ropeId: 1
		}, [{
			x: engine_static.worldWidth * 0.10 + engine_static.worldWidth * 0.025,
			y: engine_static.worldHeight * 0.4
		},{
			x: engine_static.worldWidth * 0.10 + engine_static.worldWidth * 0.05,
			y: engine_static.worldHeight * 0.4
		},{
			x: engine_static.worldWidth * 0.10 + engine_static.worldWidth * 0.075,
			y: engine_static.worldHeight * 0.4
		},{
			x: engine_static.worldWidth * 0.10 + engine_static.worldWidth * 0.1,
			y: engine_static.worldHeight * 0.4
		},{
			x: engine_static.worldWidth * 0.10 + engine_static.worldWidth * 0.125,
			y: engine_static.worldHeight * 0.4
		},{
			x: engine_static.worldWidth * 0.10 + engine_static.worldWidth * 0.15,
			y: engine_static.worldHeight * 0.4
		},{
			x: engine_static.worldWidth * 0.10 + engine_static.worldWidth * 0.175,
			y: engine_static.worldHeight * 0.4
		},{
			x: engine_static.worldWidth * 0.10 + engine_static.worldWidth * 0.2,
			y: engine_static.worldHeight * 0.4
		},{
			x: engine_static.worldWidth * 0.10 + engine_static.worldWidth * 0.225,
			y: engine_static.worldHeight * 0.4
		},{
			x: engine_static.worldWidth * 0.10 + engine_static.worldWidth * 0.25,
			y: engine_static.worldHeight * 0.4
		},{
			x: engine_static.worldWidth * 0.10 + engine_static.worldWidth * 0.275,
			y: engine_static.worldHeight * 0.4
		},{
			x: engine_static.worldWidth * 0.10 + engine_static.worldWidth * 0.3,
			y: engine_static.worldHeight * 0.4
		},{
			x: engine_static.worldWidth * 0.10 + engine_static.worldWidth * 0.325,
			y: engine_static.worldHeight * 0.4
		},{
			x: engine_static.worldWidth * 0.10 + engine_static.worldWidth * 0.35,
			y: engine_static.worldHeight * 0.4
		},{
			x: engine_static.worldWidth * 0.10 + engine_static.worldWidth * 0.375,
			y: engine_static.worldHeight * 0.4
		}], dz2, sweets[0]),
		v: new PIXI.Graphics()
	};
	world.vWorld.addChild(ropes[1].v);
	ropes[2] = {
		p: setChainJoint({
			radius: 2,
			width: 2,
			height: 2,
			density: 20,
			name: "chain",
			touchFilter: {
				self: 16,
				other: 9
			},
			container: airBuoyan,
			ropeId: 2
		}, [{
			x: engine_static.worldWidth * 0.50 ,
			y: engine_static.worldHeight * 0.65 - engine_static.worldHeight * 0.025
		}, {
			x: engine_static.worldWidth * 0.50 ,
			y: engine_static.worldHeight * 0.65 - engine_static.worldHeight * 0.05
		},{
			x: engine_static.worldWidth * 0.50 ,
			y: engine_static.worldHeight * 0.65 - engine_static.worldHeight * 0.075
		}, {
			x: engine_static.worldWidth * 0.50 ,
			y: engine_static.worldHeight * 0.65 - engine_static.worldHeight * 0.1
		},{
			x: engine_static.worldWidth * 0.50 ,
			y: engine_static.worldHeight * 0.65 - engine_static.worldHeight * 0.125
		}, {
			x: engine_static.worldWidth * 0.50 ,
			y: engine_static.worldHeight * 0.65 - engine_static.worldHeight * 0.15
		},{
			x: engine_static.worldWidth * 0.50 ,
			y: engine_static.worldHeight * 0.65 - engine_static.worldHeight * 0.175
		}, {
			x: engine_static.worldWidth * 0.50 ,
			y: engine_static.worldHeight * 0.65 - engine_static.worldHeight * 0.2
		},{
			x: engine_static.worldWidth * 0.50 ,
			y: engine_static.worldHeight * 0.65 - engine_static.worldHeight * 0.225
		}], dz3, sweets[0]),
		v: new PIXI.Graphics()
	};
	world.vWorld.addChild(ropes[2].v);
	
	ropes[3] = {
		p: setChainJoint({
			radius: 2,
			width: 2,
			height: 2,
			density: 15,
			name: "chain",
			touchFilter: {
				self: 16,
				other: 9
			},
			container: airBuoyan,
			ropeId: 3
		}, [{
			x: engine_static.worldWidth * 0.90 - engine_static.worldWidth * 0.025,
			y: engine_static.worldHeight * 0.4
		},{
			x: engine_static.worldWidth * 0.90 - engine_static.worldWidth * 0.05,
			y: engine_static.worldHeight * 0.4
		},{
			x: engine_static.worldWidth * 0.90 - engine_static.worldWidth * 0.075,
			y: engine_static.worldHeight * 0.4
		},{
			x: engine_static.worldWidth * 0.90 - engine_static.worldWidth * 0.1,
			y: engine_static.worldHeight * 0.4
		},{
			x: engine_static.worldWidth * 0.90 - engine_static.worldWidth * 0.125,
			y: engine_static.worldHeight * 0.4
		},{
			x: engine_static.worldWidth * 0.90 - engine_static.worldWidth * 0.15,
			y: engine_static.worldHeight * 0.4
		},{
			x: engine_static.worldWidth * 0.90 - engine_static.worldWidth * 0.175,
			y: engine_static.worldHeight * 0.4
		},{
			x: engine_static.worldWidth * 0.90 - engine_static.worldWidth * 0.2,
			y: engine_static.worldHeight * 0.4
		},{
			x: engine_static.worldWidth * 0.90 - engine_static.worldWidth * 0.225,
			y: engine_static.worldHeight * 0.4
		},{
			x: engine_static.worldWidth * 0.90 - engine_static.worldWidth * 0.25,
			y: engine_static.worldHeight * 0.4
		},{
			x: engine_static.worldWidth * 0.90- engine_static.worldWidth * 0.275,
			y: engine_static.worldHeight * 0.4
		},{
			x: engine_static.worldWidth * 0.90 - engine_static.worldWidth * 0.3,
			y: engine_static.worldHeight * 0.4
		},{
			x: engine_static.worldWidth * 0.90 - engine_static.worldWidth * 0.325,
			y: engine_static.worldHeight * 0.4
		},{
			x: engine_static.worldWidth * 0.90 - engine_static.worldWidth * 0.35,
			y: engine_static.worldHeight * 0.4
		},{
			x: engine_static.worldWidth * 0.90 - engine_static.worldWidth * 0.375,
			y: engine_static.worldHeight * 0.4
		}], dz4, sweets[0]),
		v: new PIXI.Graphics()
	};
	world.vWorld.addChild(ropes[3].v);
	touchObject.createTouchListen()
	update();
}