levelScript[8] = function() {
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
	eaters = createEaters([{
		x: engine_static.worldWidth * 0.5,
		y: engine_static.worldHeight * 0.85,
		hasEaten: 1,
		container: airBuoyan
	}]);
	
	var woodBridge2 = createBoxObject({
		position: {
			x: engine_static.worldWidth * 0.5,
			y: engine_static.worldHeight * 0.43
		},
		isStatic:true,
		texture: "../assets/wood.png",
		density: 1,
		restitution:0,
		width: engine_static.worldWidth * 0.15,
		height: engine_static.worldHeight * 0.025,
		scaleX: scaleXPic2Real("wood", engine_static.worldWidth * 0.15),
		scaleY: scaleYPic2Real("wood", engine_static.worldHeight * 0.025),
		name: "wood"
	});
	stars = createStars([{
		x: engine_static.worldWidth * 0.5,
		y: engine_static.worldHeight * 0.365
	}, {
		x: engine_static.worldWidth * 0.82,
		y: engine_static.worldHeight * 0.15
	}, {
		x: engine_static.worldWidth * 0.57,
		y: engine_static.worldHeight * 0.75
	}])
	var dz = createDZ({
		x: engine_static.worldWidth * 0.15,
		y: engine_static.worldHeight * 0.12
	});
	var dz1 = createDZ({
		x: engine_static.worldWidth * 0.40,
		y: engine_static.worldHeight * 0.12
	});
	var woodBridge = createBoxObject({
		position: {
			x: engine_static.worldWidth * 0.275,
			y: engine_static.worldHeight * 0.32
		},
		touchFilter: {
			self: 1,
			other: 1
		},
		texture: "../assets/wood.png",
		density: 1,
		restitution:0.2,
		width: engine_static.worldWidth * 0.19,
		height: engine_static.worldHeight * 0.025,
		scaleX: scaleXPic2Real("wood", engine_static.worldWidth * 0.19),
		scaleY: scaleYPic2Real("wood", engine_static.worldHeight * 0.025),
		name: "wood"
	});
	
	var jd1 = createInvisibileBallObject({
		position: {
			x: engine_static.worldWidth * 0.15,
			y: engine_static.worldHeight * 0.32
		},
		touchFilter: {
			self: 1,
			other: 1
		},
		radius: 5,
		density: 10,
		touchFilter: {
			self: 0,
			other: 0
		},
	});
	var jd2 = createInvisibileBallObject({
		position: {
			x: engine_static.worldWidth * 0.4,
			y: engine_static.worldHeight * 0.32
		},
		radius: 5,
		density: 10,
		touchFilter: {
			self: 0,
			other: 0
		},
	});
	setWeldJoint(jd1,woodBridge);
	setWeldJoint(jd2,woodBridge);
	sweets[0] = createSweet({
		x: engine_static.worldWidth * 0.274,
		y: engine_static.worldHeight * 0.27
	});

	ropes[0] = {
		p: setChainJoint({
			radius: 2,
			width: 2,
			height: 2,
			density: 300,
			name: "chain",
			touchFilter: {
				self: 16,
				other: 9
			},
			container: airBuoyan,
			ropeId: 0
		}, [{
			x: engine_static.worldWidth * 0.15,
			y: engine_static.worldHeight * 0.15
		}, {
			x: engine_static.worldWidth * 0.15,
			y: engine_static.worldHeight * 0.18
		}, {
			x: engine_static.worldWidth * 0.15,
			y: engine_static.worldHeight * 0.21
		}, {
			x: engine_static.worldWidth * 0.15,
			y: engine_static.worldHeight * 0.24
		}, {
			x: engine_static.worldWidth * 0.15,
			y: engine_static.worldHeight * 0.27
		}, {
			x: engine_static.worldWidth * 0.15,
			y: engine_static.worldHeight * 0.30
		}], dz, jd1),
		v: new PIXI.Graphics()
	};
	ropes[1] = {
		p: setChainJoint({
			radius: 2,
			width: 2,
			height: 2,
			density: 300,
			name: "chain",
			touchFilter: {
				self: 16,
				other: 9
			},
			container: airBuoyan,
			ropeId: 1
		}, [{
			x: engine_static.worldWidth * 0.4,
			y: engine_static.worldHeight * 0.15
		}, {
			x: engine_static.worldWidth * 0.4,
			y: engine_static.worldHeight * 0.18
		}, {
			x: engine_static.worldWidth * 0.4,
			y: engine_static.worldHeight * 0.21
		}, {
			x: engine_static.worldWidth * 0.4,
			y: engine_static.worldHeight * 0.24
		}, {
			x: engine_static.worldWidth * 0.4,
			y: engine_static.worldHeight * 0.27
		}, {
			x: engine_static.worldWidth * 0.4,
			y: engine_static.worldHeight * 0.30
		}], dz1, jd2),
		v: new PIXI.Graphics()
	};
	world.vWorld.addChild(ropes[0].v)
	world.vWorld.addChild(ropes[1].v)
	bubbles[0] = createBubble(engine_static.worldWidth * 0.81, engine_static.worldHeight * 0.41);
	
	
	var dz2 = createDZ({
		x: engine_static.worldWidth * 0.61,
		y: engine_static.worldHeight * 0.5
	});
	var dz3 = createDZ({
		x: engine_static.worldWidth * 0.86,
		y: engine_static.worldHeight * 0.5
	});
	var woodBridge = createBoxObject({
		position: {
			x: engine_static.worldWidth * 0.735,
			y: engine_static.worldHeight * 0.67
		},
		touchFilter: {
			self: 1,
			other: 1
		},
		texture: "../assets/wood.png",
		density: 1,
		restitution:0.2,
		width: engine_static.worldWidth * 0.18,
		height: engine_static.worldHeight * 0.025,
		scaleX: scaleXPic2Real("wood", engine_static.worldWidth * 0.19),
		scaleY: scaleYPic2Real("wood", engine_static.worldHeight * 0.025),
		name: "wood"
	});
	
	var jd1 = createInvisibileBallObject({
		position: {
			x: engine_static.worldWidth * 0.61,
			y: engine_static.worldHeight * 0.67
		},
		touchFilter: {
			self: 1,
			other: 1
		},
		radius: 5,
		density: 10,
		touchFilter: {
			self: 0,
			other: 0
		},
	});
	var jd2 = createInvisibileBallObject({
		position: {
			x: engine_static.worldWidth * 0.86,
			y: engine_static.worldHeight * 0.67
		},
		radius: 5,
		density: 10,
		touchFilter: {
			self: 0,
			other: 0
		},
	});
	setWeldJoint(jd1,woodBridge);
	setWeldJoint(jd2,woodBridge);
	ropes[2] = {
		p: setChainJoint({
			radius: 2,
			width: 2,
			height: 2,
			density: 300,
			name: "chain",
			touchFilter: {
				self: 16,
				other: 9
			},
			container: airBuoyan,
			ropeId: 2
		}, [{
			x: engine_static.worldWidth * 0.61,
			y: engine_static.worldHeight * 0.53
		},{
			x: engine_static.worldWidth * 0.58,
			y: engine_static.worldHeight * 0.54
		}, {
			x: engine_static.worldWidth * 0.61,
			y: engine_static.worldHeight * 0.56
		}, {
			x: engine_static.worldWidth * 0.61,
			y: engine_static.worldHeight * 0.59
		}, {
			x: engine_static.worldWidth * 0.61,
			y: engine_static.worldHeight * 0.62
		}, {
			x: engine_static.worldWidth * 0.61,
			y: engine_static.worldHeight * 0.65
		}], dz2, jd1),
		v: new PIXI.Graphics()
	};
	ropes[3] = {
		p: setChainJoint({
			radius: 2,
			width: 2,
			height: 2,
			density: 300,
			name: "chain",
			touchFilter: {
				self: 16,
				other: 9
			},
			container: airBuoyan,
			ropeId: 3
		}, [{
			x: engine_static.worldWidth * 0.86,
			y: engine_static.worldHeight * 0.53
		}, {
			x: engine_static.worldWidth * 0.86,
			y: engine_static.worldHeight * 0.56
		}, {
			x: engine_static.worldWidth * 0.86,
			y: engine_static.worldHeight * 0.59
		}, {
			x: engine_static.worldWidth * 0.86,
			y: engine_static.worldHeight * 0.62
		}, {
			x: engine_static.worldWidth * 0.86,
			y: engine_static.worldHeight * 0.65
		}], dz3, jd2),
		v: new PIXI.Graphics()
	};
	world.vWorld.addChild(ropes[2].v)
	world.vWorld.addChild(ropes[3].v)
	
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