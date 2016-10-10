levelScript = [];
var airBuoyan;
levelScript[0] = function() {
	var bg = new PIXI.Sprite(PIXI.Texture.fromFrame("../assets/bg.jpg"));
	world.vWorld.addChild(bg);
	bg.anchor.x = bg.anchor.y = 0;
	bg.scale.x = bg.scale.y = engine_static.worldHeight / 1024;
	gameResult = 1;
	airBuoyan = addBuoyancy({
		position: 0,
		density: 12,
		angularDrag: 0.02,
		linearDrag: 0.02,
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
			x: engine_static.worldWidth / 2,
			y: engine_static.worldHeight - 105
		},
		width: 180,
		height: 180
	});
	eaters = createEaters([{
		x: engine_static.worldWidth / 2,
		y: engine_static.worldHeight - 125,
		hasEaten: 1,
		container: airBuoyan
	}]);
	var dz = createDZ({
		x: engine_static.worldWidth / 2,
		y: engine_static.worldHeight /8
	});
	
	stars = createStars([{
		x: engine_static.worldWidth / 2,
		y: engine_static.worldHeight * 0.45
	}, {
		x: engine_static.worldWidth / 2,
		y: engine_static.worldHeight * 0.55
	}, {
		x: engine_static.worldWidth / 2,
		y: engine_static.worldHeight * 0.65
	}])

	sweets[0] = createBallObject({
		position: {
			x: engine_static.worldWidth / 2 + engine_static.worldWidth / 80 * 15,
			y: engine_static.worldHeight / 8 + engine_static.worldHeight / 80 * 15
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
			x: engine_static.worldWidth / 2 + engine_static.worldWidth / 80,
			y: engine_static.worldHeight / 8 + engine_static.worldHeight / 80
		}, {
			x: engine_static.worldWidth / 2 + engine_static.worldWidth / 80 * 2,
			y: engine_static.worldHeight / 8 + engine_static.worldHeight / 80 * 2
		}, {
			x: engine_static.worldWidth / 2 + engine_static.worldWidth / 80 * 3,
			y: engine_static.worldHeight / 8 + engine_static.worldHeight / 80 * 3
		}, {
			x: engine_static.worldWidth / 2 + engine_static.worldWidth / 80 * 4,
			y: engine_static.worldHeight / 8 + engine_static.worldHeight / 80 * 4
		}, {
			x: engine_static.worldWidth / 2 + engine_static.worldWidth / 80 * 5,
			y: engine_static.worldHeight / 8 + engine_static.worldHeight / 80 * 5
		}, {
			x: engine_static.worldWidth / 2 + engine_static.worldWidth / 80 * 6,
			y: engine_static.worldHeight / 8 + engine_static.worldHeight / 80 * 6
		}, {
			x: engine_static.worldWidth / 2 + engine_static.worldWidth / 80 * 7,
			y: engine_static.worldHeight / 8 + engine_static.worldHeight / 80 * 7
		}, {
			x: engine_static.worldWidth / 2 + engine_static.worldWidth / 80 * 8,
			y: engine_static.worldHeight / 8 + engine_static.worldHeight / 80 * 8
		}, {
			x: engine_static.worldWidth / 2 + engine_static.worldWidth / 80 * 9,
			y: engine_static.worldHeight / 8 + engine_static.worldHeight / 80 * 9
		}, {
			x: engine_static.worldWidth / 2 + engine_static.worldWidth / 80 * 10,
			y: engine_static.worldHeight / 8 + engine_static.worldHeight / 80 * 10
		}, {
			x: engine_static.worldWidth / 2 + engine_static.worldWidth / 80 * 11,
			y: engine_static.worldHeight / 8 + engine_static.worldHeight / 80 * 11
		}, {
			x: engine_static.worldWidth / 2 + engine_static.worldWidth / 80 * 12,
			y: engine_static.worldHeight / 8 + engine_static.worldHeight / 80 * 12
		}, {
			x: engine_static.worldWidth / 2 + engine_static.worldWidth / 80 * 13,
			y: engine_static.worldHeight / 8 + engine_static.worldHeight / 80 * 13
		}, {
			x: engine_static.worldWidth / 2 + engine_static.worldWidth / 80 * 14,
			y: engine_static.worldHeight / 8 + engine_static.worldHeight / 80 * 14
		}], dz, sweets[0]),
		v: new PIXI.Graphics()
	};

	world.vWorld.addChild(ropes[0].v)

}

levelScript[1] = function() {
	var bg = new PIXI.Sprite(PIXI.Texture.fromFrame("../assets/bg.jpg"));
	world.vWorld.addChild(bg);
	bg.anchor.x = bg.anchor.y = 0;
	bg.scale.x = bg.scale.y = engine_static.worldHeight / 1024;
	gameResult = 1;
	airBuoyan = addBuoyancy({
		position: 0,
		density: 12,
		angularDrag: 0.02,
		linearDrag: 0.02,
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
			x: engine_static.worldWidth / 2,
			y: engine_static.worldHeight - 105
		},
		width: 180,
		height: 180
	})
	eaters = createEaters([{
		x: engine_static.worldWidth / 2,
		y: engine_static.worldHeight - 125,
		hasEaten: 1,
		container: airBuoyan
	}]);
	var dz1 = createDZ({
		x: engine_static.worldWidth * 0.2,
		y: engine_static.worldHeight * 0.15
	});

	var dz2 = createDZ({
		x: engine_static.worldWidth *0.8,
		y: engine_static.worldHeight * 0.15
	});

	stars = createStars([{
		x: engine_static.worldWidth / 2,
		y: engine_static.worldHeight / 2
	}, {
		x: engine_static.worldWidth / 2,
		y: engine_static.worldHeight / 2 + 70
	}, {
		x: engine_static.worldWidth / 2,
		y: engine_static.worldHeight / 2 + 140
	}])

	sweets[0] = createBallObject({
		position: {
			x: engine_static.worldWidth / 2,
			y: engine_static.worldHeight * 0.335
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
			x: engine_static.worldWidth * 0.20 + engine_static.worldWidth * 0.025,
			y: engine_static.worldHeight * 0.15 + engine_static.worldHeight * 0.015
		}, {
			x: engine_static.worldWidth * 0.20 + engine_static.worldWidth * 0.05,
			y: engine_static.worldHeight * 0.15 + engine_static.worldHeight * 0.03
		}, {
			x: engine_static.worldWidth * 0.20 + engine_static.worldWidth * 0.075,
			y: engine_static.worldHeight * 0.15 + engine_static.worldHeight * 0.045
		}, {
			x: engine_static.worldWidth * 0.20 + engine_static.worldWidth * 0.10,
			y: engine_static.worldHeight * 0.15 + engine_static.worldHeight * 0.06
		}, {
			x: engine_static.worldWidth * 0.20 + engine_static.worldWidth * 0.125,
			y: engine_static.worldHeight * 0.15 + engine_static.worldHeight * 0.075
		}, {
			x: engine_static.worldWidth * 0.20 + engine_static.worldWidth * 0.15,
			y: engine_static.worldHeight * 0.15 + engine_static.worldHeight * 0.09
		}, {
			x: engine_static.worldWidth * 0.20 + engine_static.worldWidth * 0.175,
			y: engine_static.worldHeight * 0.15 + engine_static.worldHeight * 0.105
		}, {
			x: engine_static.worldWidth * 0.20 + engine_static.worldWidth * 0.20,
			y: engine_static.worldHeight * 0.15 + engine_static.worldHeight * 0.12
		}, {
			x: engine_static.worldWidth * 0.20 + engine_static.worldWidth * 0.225,
			y: engine_static.worldHeight * 0.15 + engine_static.worldHeight * 0.135
		}, {
			x: engine_static.worldWidth * 0.20 + engine_static.worldWidth * 0.25,
			y: engine_static.worldHeight * 0.15 + engine_static.worldHeight * 0.15
		}, {
			x: engine_static.worldWidth * 0.20 + engine_static.worldWidth * 0.275,
			y: engine_static.worldHeight * 0.15 + engine_static.worldHeight * 0.165
		}], dz1, sweets[0]),
		v: new PIXI.Graphics()
	};
	world.vWorld.addChild(ropes[0].v)

	ropes[1] = {
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
			ropeId: 1
		}, [{
			x: engine_static.worldWidth * 0.80 - engine_static.worldWidth * 0.025,
			y: engine_static.worldHeight * 0.15 + engine_static.worldHeight * 0.015
		}, {
			x: engine_static.worldWidth * 0.80 - engine_static.worldWidth * 0.05,
			y: engine_static.worldHeight * 0.15 + engine_static.worldHeight * 0.03
		}, {
			x: engine_static.worldWidth * 0.80 - engine_static.worldWidth * 0.075,
			y: engine_static.worldHeight * 0.15 + engine_static.worldHeight * 0.045
		}, {
			x: engine_static.worldWidth * 0.80 - engine_static.worldWidth * 0.10,
			y: engine_static.worldHeight * 0.15 + engine_static.worldHeight * 0.06
		}, {
			x: engine_static.worldWidth * 0.80 - engine_static.worldWidth * 0.125,
			y: engine_static.worldHeight * 0.15 + engine_static.worldHeight * 0.075
		}, {
			x: engine_static.worldWidth * 0.80 - engine_static.worldWidth * 0.15,
			y: engine_static.worldHeight * 0.15 + engine_static.worldHeight * 0.09
		}, {
			x: engine_static.worldWidth * 0.80 - engine_static.worldWidth * 0.175,
			y: engine_static.worldHeight * 0.15 + engine_static.worldHeight * 0.105
		}, {
			x: engine_static.worldWidth * 0.80 - engine_static.worldWidth * 0.20,
			y: engine_static.worldHeight * 0.15 + engine_static.worldHeight * 0.12
		}, {
			x: engine_static.worldWidth * 0.80 - engine_static.worldWidth * 0.225,
			y: engine_static.worldHeight * 0.15 + engine_static.worldHeight * 0.135
		}, {
			x: engine_static.worldWidth * 0.80 - engine_static.worldWidth * 0.25,
			y: engine_static.worldHeight * 0.15 + engine_static.worldHeight * 0.15
		}, {
			x: engine_static.worldWidth * 0.80 - engine_static.worldWidth * 0.275,
			y: engine_static.worldHeight * 0.15 + engine_static.worldHeight * 0.165
		}], dz2, sweets[0]),
		v: new PIXI.Graphics()
	};
	world.vWorld.addChild(ropes[1].v);
}

levelScript[2] = function() {
	gameResult = 1;
	inLevel = true;
	var bg = new PIXI.Sprite(PIXI.Texture.fromFrame("../assets/bg.jpg"));
	world.vWorld.addChild(bg);
	bg.anchor.x = bg.anchor.y = 0;
	bg.scale.x = bg.scale.y = engine_static.worldHeight / 1024;
	airBuoyan = addBuoyancy({
		position: 0,
		density: 12,
		angularDrag: 0.2,
		linearDrag: 0.2,
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
			x: engine_static.worldWidth * 0.8,
			y: engine_static.worldHeight * 0.90
		},
		width: 180,
		height: 180
	});
	eaters = createEaters([{
		x: engine_static.worldWidth * 0.8,
		y: engine_static.worldHeight * 0.90 - 20,
		hasEaten: 1,
		container: airBuoyan
	}]);
	var dz1 = createDZ({
		x: engine_static.worldWidth *0.2,
		y: engine_static.worldHeight * 0.15
	});

	var dz2 = createDZ({
		x: engine_static.worldWidth / 2,
		y: engine_static.worldHeight * 0.15
	});

	var dz3 = createDZ({
		x: engine_static.worldWidth *0.8,
		y: engine_static.worldHeight * 0.15
	});

	stars = createStars([{
		x: engine_static.worldWidth * 0.2,
		y: engine_static.worldHeight * 0.48
	}, {
		x: engine_static.worldWidth * 0.8,
		y: engine_static.worldHeight * 0.48
	}, {
		x: engine_static.worldWidth * 0.5,
		y: engine_static.worldHeight * 0.61
	}])

	sweets[0] = createBallObject({
		position: {
			x: engine_static.worldWidth * 0.2,
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
			x: engine_static.worldWidth * 0.20,
			y: engine_static.worldHeight * 0.15 + engine_static.worldHeight * 0.025
		}, {
			x: engine_static.worldWidth * 0.20,
			y: engine_static.worldHeight * 0.15 + engine_static.worldHeight * 0.05
		}, {
			x: engine_static.worldWidth * 0.20,
			y: engine_static.worldHeight * 0.15 + engine_static.worldHeight * 0.075
		}, {
			x: engine_static.worldWidth * 0.20,
			y: engine_static.worldHeight * 0.15 + engine_static.worldHeight * 0.1
		}, {
			x: engine_static.worldWidth * 0.20,
			y: engine_static.worldHeight * 0.15 + engine_static.worldHeight * 0.125
		}, {
			x: engine_static.worldWidth * 0.20,
			y: engine_static.worldHeight * 0.15 + engine_static.worldHeight * 0.15
		}, {
			x: engine_static.worldWidth * 0.20,
			y: engine_static.worldHeight * 0.15 + engine_static.worldHeight * 0.175
		}, {
			x: engine_static.worldWidth * 0.20,
			y: engine_static.worldHeight * 0.15 + engine_static.worldHeight * 0.2
		}, {
			x: engine_static.worldWidth * 0.20,
			y: engine_static.worldHeight * 0.15 + engine_static.worldHeight * 0.225
		}], dz1, sweets[0]),
		v: new PIXI.Graphics()
	};
	world.vWorld.addChild(ropes[0].v)

	ropes[1] = {
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
			ropeId: 1
		}, [{
			x: engine_static.worldWidth * 0.50 - engine_static.worldWidth * 0.02,
			y: engine_static.worldHeight * 0.15 + engine_static.worldHeight * 0.015
		}, {
			x: engine_static.worldWidth * 0.50 - engine_static.worldWidth * 0.04,
			y: engine_static.worldHeight * 0.15 + engine_static.worldHeight * 0.03
		}, {
			x: engine_static.worldWidth * 0.50 - engine_static.worldWidth * 0.08,
			y: engine_static.worldHeight * 0.15 + engine_static.worldHeight * 0.045
		}, {
			x: engine_static.worldWidth * 0.50 - engine_static.worldWidth * 0.1,
			y: engine_static.worldHeight * 0.15 + engine_static.worldHeight * 0.06
		}, {
			x: engine_static.worldWidth * 0.50 - engine_static.worldWidth * 0.12,
			y: engine_static.worldHeight * 0.15 + engine_static.worldHeight * 0.075
		}, {
			x: engine_static.worldWidth * 0.50 - engine_static.worldWidth * 0.14,
			y: engine_static.worldHeight * 0.15 + engine_static.worldHeight * 0.1
		}, {
			x: engine_static.worldWidth * 0.50 - engine_static.worldWidth * 0.16,
			y: engine_static.worldHeight * 0.15 + engine_static.worldHeight * 0.115
		}, {
			x: engine_static.worldWidth * 0.50 - engine_static.worldWidth * 0.18,
			y: engine_static.worldHeight * 0.15 + engine_static.worldHeight * 0.13
		}, {
			x: engine_static.worldWidth * 0.50 - engine_static.worldWidth * 0.2,
			y: engine_static.worldHeight * 0.15 + engine_static.worldHeight * 0.145
		}, {
			x: engine_static.worldWidth * 0.50 - engine_static.worldWidth * 0.215,
			y: engine_static.worldHeight * 0.15 + engine_static.worldHeight * 0.165
		}, {
			x: engine_static.worldWidth * 0.50 - engine_static.worldWidth * 0.23,
			y: engine_static.worldHeight * 0.15 + engine_static.worldHeight * 0.185
		}, {
			x: engine_static.worldWidth * 0.50 - engine_static.worldWidth * 0.245,
			y: engine_static.worldHeight * 0.15 + engine_static.worldHeight * 0.205
		}, {
			x: engine_static.worldWidth * 0.50 - engine_static.worldWidth * 0.26,
			y: engine_static.worldHeight * 0.15 + engine_static.worldHeight * 0.225
		}, {
			x: engine_static.worldWidth * 0.50 - engine_static.worldWidth * 0.275,
			y: engine_static.worldHeight * 0.15 + engine_static.worldHeight * 0.245
		}, {
			x: engine_static.worldWidth * 0.50 - engine_static.worldWidth * 0.290,
			y: engine_static.worldHeight * 0.15 + engine_static.worldHeight * 0.265
		}], dz2, sweets[0]),
		v: new PIXI.Graphics()
	};
	world.vWorld.addChild(ropes[1].v);
	ropes[2] = {
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
			ropeId: 2
		}, [{
			x: engine_static.worldWidth * 0.80 - engine_static.worldWidth * 0.02,
			y: engine_static.worldHeight * 0.15 + engine_static.worldHeight * 0.01
		}, {
			x: engine_static.worldWidth * 0.80 - engine_static.worldWidth * 0.04,
			y: engine_static.worldHeight * 0.15 + engine_static.worldHeight * 0.02
		}, {
			x: engine_static.worldWidth * 0.80 - engine_static.worldWidth * 0.08,
			y: engine_static.worldHeight * 0.15 + engine_static.worldHeight * 0.03
		}, {
			x: engine_static.worldWidth * 0.80 - engine_static.worldWidth * 0.1,
			y: engine_static.worldHeight * 0.15 + engine_static.worldHeight * 0.04
		}, {
			x: engine_static.worldWidth * 0.80 - engine_static.worldWidth * 0.12,
			y: engine_static.worldHeight * 0.15 + engine_static.worldHeight * 0.05
		}, {
			x: engine_static.worldWidth * 0.80 - engine_static.worldWidth * 0.14,
			y: engine_static.worldHeight * 0.15 + engine_static.worldHeight * 0.06
		}, {
			x: engine_static.worldWidth * 0.80 - engine_static.worldWidth * 0.16,
			y: engine_static.worldHeight * 0.15 + engine_static.worldHeight * 0.07
		}, {
			x: engine_static.worldWidth * 0.80 - engine_static.worldWidth * 0.18,
			y: engine_static.worldHeight * 0.15 + engine_static.worldHeight * 0.08
		}, {
			x: engine_static.worldWidth * 0.80 - engine_static.worldWidth * 0.2,
			y: engine_static.worldHeight * 0.15 + engine_static.worldHeight * 0.09
		}, {
			x: engine_static.worldWidth * 0.80 - engine_static.worldWidth * 0.22,
			y: engine_static.worldHeight * 0.15 + engine_static.worldHeight * 0.1
		}, {
			x: engine_static.worldWidth * 0.80 - engine_static.worldWidth * 0.24,
			y: engine_static.worldHeight * 0.15 + engine_static.worldHeight * 0.11
		}, {
			x: engine_static.worldWidth * 0.80 - engine_static.worldWidth * 0.26,
			y: engine_static.worldHeight * 0.15 + engine_static.worldHeight * 0.12
		}, {
			x: engine_static.worldWidth * 0.80 - engine_static.worldWidth * 0.28,
			y: engine_static.worldHeight * 0.15 + engine_static.worldHeight * 0.13
		}, {
			x: engine_static.worldWidth * 0.80 - engine_static.worldWidth * 0.3,
			y: engine_static.worldHeight * 0.15 + engine_static.worldHeight * 0.14
		}, {
			x: engine_static.worldWidth * 0.80 - engine_static.worldWidth * 0.32,
			y: engine_static.worldHeight * 0.15 + engine_static.worldHeight * 0.15
		}, {
			x: engine_static.worldWidth * 0.80 - engine_static.worldWidth * 0.34,
			y: engine_static.worldHeight * 0.15 + engine_static.worldHeight * 0.16
		}, {
			x: engine_static.worldWidth * 0.80 - engine_static.worldWidth * 0.38,
			y: engine_static.worldHeight * 0.15 + engine_static.worldHeight * 0.17
		}, {
			x: engine_static.worldWidth * 0.80 - engine_static.worldWidth * 0.4,
			y: engine_static.worldHeight * 0.15 + engine_static.worldHeight * 0.18
		}, {
			x: engine_static.worldWidth * 0.80 - engine_static.worldWidth * 0.42,
			y: engine_static.worldHeight * 0.15 + engine_static.worldHeight * 0.19
		}, {
			x: engine_static.worldWidth * 0.80 - engine_static.worldWidth * 0.44,
			y: engine_static.worldHeight * 0.15 + engine_static.worldHeight * 0.20
		}, {
			x: engine_static.worldWidth * 0.80 - engine_static.worldWidth * 0.46,
			y: engine_static.worldHeight * 0.15 + engine_static.worldHeight * 0.21
		}, {
			x: engine_static.worldWidth * 0.80 - engine_static.worldWidth * 0.48,
			y: engine_static.worldHeight * 0.15 + engine_static.worldHeight * 0.22
		}, {
			x: engine_static.worldWidth * 0.80 - engine_static.worldWidth * 0.5,
			y: engine_static.worldHeight * 0.15 + engine_static.worldHeight * 0.23
		}, {
			x: engine_static.worldWidth * 0.80 - engine_static.worldWidth * 0.52,
			y: engine_static.worldHeight * 0.15 + engine_static.worldHeight * 0.24
		}, {
			x: engine_static.worldWidth * 0.80 - engine_static.worldWidth * 0.54,
			y: engine_static.worldHeight * 0.15 + engine_static.worldHeight * 0.25
		}, {
			x: engine_static.worldWidth * 0.80 - engine_static.worldWidth * 0.56,
			y: engine_static.worldHeight * 0.15 + engine_static.worldHeight * 0.25
		}, {
			x: engine_static.worldWidth * 0.80 - engine_static.worldWidth * 0.58,
			y: engine_static.worldHeight * 0.15 + engine_static.worldHeight * 0.25
		}], dz3, sweets[0]),
		v: new PIXI.Graphics()
	};
	world.vWorld.addChild(ropes[2].v);
}

levelScript[3] = function() {
	gameResult = 1;
	inLevel = true;
	var bg = new PIXI.Sprite(PIXI.Texture.fromFrame("../assets/bg.jpg"));
	world.vWorld.addChild(bg);
	bg.anchor.x = bg.anchor.y = 0;
	bg.scale.x = bg.scale.y = engine_static.worldHeight / 1024;
	airBuoyan = addBuoyancy({
		position: 0,
		density: 12,
		angularDrag: 0.2,
		linearDrag: 0.2,
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
			x: engine_static.worldWidth * 0.8,
			y: engine_static.worldHeight * 0.75
		},
		width: 180,
		height: 180
	})
	eaters = createEaters([{
		x: engine_static.worldWidth * 0.8,
		y: engine_static.worldHeight * 0.75 - 20,
		hasEaten: 1,
		container: airBuoyan
	}]);
	var dz1 = createDZ({
		x: engine_static.worldWidth * 0.50,
		y: engine_static.worldHeight * 0.15
	});

	var dz2 = createDZ({
		x: engine_static.worldWidth *0.1,
		y: engine_static.worldHeight * 0.4
	});

	var dz3 = createDZ({
		x: engine_static.worldWidth / 2,
		y: engine_static.worldHeight * 0.65
	});

	var dz4 = createDZ({
		x: engine_static.worldWidth *0.9,
		y: engine_static.worldHeight * 0.4
	});

	stars = createStars([{
		x: engine_static.worldWidth * 0.5,
		y: engine_static.worldHeight * 0.55
	}, {
		x: engine_static.worldWidth * 0.1,
		y: engine_static.worldHeight * 0.65
	}, {
		x: engine_static.worldWidth * 0.5,
		y: engine_static.worldHeight * 0.9
	}])

	sweets[0] = createBallObject({
		position: {
			x: engine_static.worldWidth * 0.5,
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
			x: engine_static.worldWidth * 0.50,
			y: engine_static.worldHeight * 0.15 + engine_static.worldHeight * 0.025
		}, {
			x: engine_static.worldWidth * 0.50,
			y: engine_static.worldHeight * 0.15 + engine_static.worldHeight * 0.05
		}, {
			x: engine_static.worldWidth * 0.50,
			y: engine_static.worldHeight * 0.15 + engine_static.worldHeight * 0.075
		}, {
			x: engine_static.worldWidth * 0.50,
			y: engine_static.worldHeight * 0.15 + engine_static.worldHeight * 0.1
		}, {
			x: engine_static.worldWidth * 0.50,
			y: engine_static.worldHeight * 0.15 + engine_static.worldHeight * 0.125
		}, {
			x: engine_static.worldWidth * 0.50,
			y: engine_static.worldHeight * 0.15 + engine_static.worldHeight * 0.15
		}, {
			x: engine_static.worldWidth * 0.50,
			y: engine_static.worldHeight * 0.15 + engine_static.worldHeight * 0.175
		}, {
			x: engine_static.worldWidth * 0.50,
			y: engine_static.worldHeight * 0.15 + engine_static.worldHeight * 0.2
		}, {
			x: engine_static.worldWidth * 0.50,
			y: engine_static.worldHeight * 0.15 + engine_static.worldHeight * 0.225
		}], dz1, sweets[0]),
		v: new PIXI.Graphics()
	};
	world.vWorld.addChild(ropes[0].v)

	ropes[1] = {
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
			ropeId: 1
		}, [{
			x: engine_static.worldWidth * 0.10 + engine_static.worldWidth * 0.025,
			y: engine_static.worldHeight * 0.4
		}, {
			x: engine_static.worldWidth * 0.10 + engine_static.worldWidth * 0.05,
			y: engine_static.worldHeight * 0.4
		}, {
			x: engine_static.worldWidth * 0.10 + engine_static.worldWidth * 0.075,
			y: engine_static.worldHeight * 0.4
		}, {
			x: engine_static.worldWidth * 0.10 + engine_static.worldWidth * 0.1,
			y: engine_static.worldHeight * 0.4
		}, {
			x: engine_static.worldWidth * 0.10 + engine_static.worldWidth * 0.125,
			y: engine_static.worldHeight * 0.4
		}, {
			x: engine_static.worldWidth * 0.10 + engine_static.worldWidth * 0.15,
			y: engine_static.worldHeight * 0.4
		}, {
			x: engine_static.worldWidth * 0.10 + engine_static.worldWidth * 0.175,
			y: engine_static.worldHeight * 0.4
		}, {
			x: engine_static.worldWidth * 0.10 + engine_static.worldWidth * 0.2,
			y: engine_static.worldHeight * 0.4
		}, {
			x: engine_static.worldWidth * 0.10 + engine_static.worldWidth * 0.225,
			y: engine_static.worldHeight * 0.4
		}, {
			x: engine_static.worldWidth * 0.10 + engine_static.worldWidth * 0.25,
			y: engine_static.worldHeight * 0.4
		}, {
			x: engine_static.worldWidth * 0.10 + engine_static.worldWidth * 0.275,
			y: engine_static.worldHeight * 0.4
		}, {
			x: engine_static.worldWidth * 0.10 + engine_static.worldWidth * 0.3,
			y: engine_static.worldHeight * 0.4
		}, {
			x: engine_static.worldWidth * 0.10 + engine_static.worldWidth * 0.325,
			y: engine_static.worldHeight * 0.4
		}, {
			x: engine_static.worldWidth * 0.10 + engine_static.worldWidth * 0.35,
			y: engine_static.worldHeight * 0.4
		}, {
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
			density: 30,
			name: "chain",
			touchFilter: {
				self: 16,
				other: 9
			},
			container: airBuoyan,
			ropeId: 2
		}, [{
			x: engine_static.worldWidth * 0.50,
			y: engine_static.worldHeight * 0.65 - engine_static.worldHeight * 0.025
		}, {
			x: engine_static.worldWidth * 0.50,
			y: engine_static.worldHeight * 0.65 - engine_static.worldHeight * 0.05
		}, {
			x: engine_static.worldWidth * 0.50,
			y: engine_static.worldHeight * 0.65 - engine_static.worldHeight * 0.075
		}, {
			x: engine_static.worldWidth * 0.50,
			y: engine_static.worldHeight * 0.65 - engine_static.worldHeight * 0.1
		}, {
			x: engine_static.worldWidth * 0.50,
			y: engine_static.worldHeight * 0.65 - engine_static.worldHeight * 0.125
		}, {
			x: engine_static.worldWidth * 0.50,
			y: engine_static.worldHeight * 0.65 - engine_static.worldHeight * 0.15
		}, {
			x: engine_static.worldWidth * 0.50,
			y: engine_static.worldHeight * 0.65 - engine_static.worldHeight * 0.175
		}, {
			x: engine_static.worldWidth * 0.50,
			y: engine_static.worldHeight * 0.65 - engine_static.worldHeight * 0.2
		}, {
			x: engine_static.worldWidth * 0.50,
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
			density: 30,
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
		}, {
			x: engine_static.worldWidth * 0.90 - engine_static.worldWidth * 0.05,
			y: engine_static.worldHeight * 0.4
		}, {
			x: engine_static.worldWidth * 0.90 - engine_static.worldWidth * 0.075,
			y: engine_static.worldHeight * 0.4
		}, {
			x: engine_static.worldWidth * 0.90 - engine_static.worldWidth * 0.1,
			y: engine_static.worldHeight * 0.4
		}, {
			x: engine_static.worldWidth * 0.90 - engine_static.worldWidth * 0.125,
			y: engine_static.worldHeight * 0.4
		}, {
			x: engine_static.worldWidth * 0.90 - engine_static.worldWidth * 0.15,
			y: engine_static.worldHeight * 0.4
		}, {
			x: engine_static.worldWidth * 0.90 - engine_static.worldWidth * 0.175,
			y: engine_static.worldHeight * 0.4
		}, {
			x: engine_static.worldWidth * 0.90 - engine_static.worldWidth * 0.2,
			y: engine_static.worldHeight * 0.4
		}, {
			x: engine_static.worldWidth * 0.90 - engine_static.worldWidth * 0.225,
			y: engine_static.worldHeight * 0.4
		}, {
			x: engine_static.worldWidth * 0.90 - engine_static.worldWidth * 0.25,
			y: engine_static.worldHeight * 0.4
		}, {
			x: engine_static.worldWidth * 0.90 - engine_static.worldWidth * 0.275,
			y: engine_static.worldHeight * 0.4
		}, {
			x: engine_static.worldWidth * 0.90 - engine_static.worldWidth * 0.3,
			y: engine_static.worldHeight * 0.4
		}, {
			x: engine_static.worldWidth * 0.90 - engine_static.worldWidth * 0.325,
			y: engine_static.worldHeight * 0.4
		}, {
			x: engine_static.worldWidth * 0.90 - engine_static.worldWidth * 0.35,
			y: engine_static.worldHeight * 0.4
		}, {
			x: engine_static.worldWidth * 0.90 - engine_static.worldWidth * 0.375,
			y: engine_static.worldHeight * 0.4
		}], dz4, sweets[0]),
		v: new PIXI.Graphics()
	};
	world.vWorld.addChild(ropes[3].v);
}

levelScript[4] = function() {
	var bg = new PIXI.Sprite(PIXI.Texture.fromFrame("../assets/bg.jpg"));
	world.vWorld.addChild(bg);
	bg.anchor.x = bg.anchor.y = 0;
	bg.scale.x = bg.scale.y = engine_static.worldHeight / 1024;
	gameResult = 1;
	airBuoyan = addBuoyancy({
		position: 1000,
		density: 12,
		angularDrag: 0.02,
		linearDrag: 0.02,
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
			x: engine_static.worldWidth *0.75,
			y: engine_static.worldHeight *0.9
		},
		width: 180,
		height: 180
	});
	eaters = createEaters([{
		x: engine_static.worldWidth *0.75,
		y: engine_static.worldHeight *0.9-20,
		hasEaten: 1,
		container: airBuoyan
	}]);
	var dz = createDZ({
		x: engine_static.worldWidth / 4,
		y: engine_static.worldHeight * 0.25
	});
	var dz2 = createDZ({
		x: engine_static.worldWidth *0.75,
		y: engine_static.worldHeight * 0.58
	});
	var dz3 = createDZ({
		x: engine_static.worldWidth *0.05,
		y: engine_static.worldHeight * 0.58
	});

	stars = createStars([{
		x: engine_static.worldWidth *0.75,
		y: engine_static.worldHeight * 0.25
	}, {
		x: engine_static.worldWidth *0.75,
		y: engine_static.worldHeight * 0.09
	}, {
		x: engine_static.worldWidth / 2,
		y: engine_static.worldHeight * 0.50
	}])

	sweets[0] = createBallObject({
		position: {
			x: engine_static.worldWidth * 0.25,
			y: engine_static.worldHeight * 0.58
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
			x: engine_static.worldWidth / 4,
			y: engine_static.worldHeight * 0.25 + engine_static.worldHeight * 0.03
		}, {
			x: engine_static.worldWidth / 4,
			y: engine_static.worldHeight * 0.25 + engine_static.worldHeight * 0.06
		}, {
			x: engine_static.worldWidth / 4,
			y: engine_static.worldHeight * 0.25 + engine_static.worldHeight * 0.09
		}, {
			x: engine_static.worldWidth / 4,
			y: engine_static.worldHeight * 0.25 + engine_static.worldHeight * 0.12
		}, {
			x: engine_static.worldWidth / 4,
			y: engine_static.worldHeight * 0.25 + engine_static.worldHeight * 0.15
		}, {
			x: engine_static.worldWidth / 4,
			y: engine_static.worldHeight * 0.25 + engine_static.worldHeight * 0.18
		}, {
			x: engine_static.worldWidth / 4,
			y: engine_static.worldHeight * 0.25 + engine_static.worldHeight * 0.21
		}, {
			x: engine_static.worldWidth / 4,
			y: engine_static.worldHeight * 0.25 + engine_static.worldHeight * 0.24
		}, {
			x: engine_static.worldWidth / 4,
			y: engine_static.worldHeight * 0.25 + engine_static.worldHeight * 0.27
		}, {
			x: engine_static.worldWidth / 4,
			y: engine_static.worldHeight * 0.25 + engine_static.worldHeight * 0.30
		}], dz, sweets[0]),
		v: new PIXI.Graphics()
	};

	ropes[1] = {
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
			ropeId: 1
		}, [{
			x: engine_static.worldWidth *0.75-engine_static.worldWidth*0.04,
			y: engine_static.worldHeight * 0.58+ engine_static.worldHeight*0.007
		},{
			x: engine_static.worldWidth *0.75-engine_static.worldWidth*0.08,
			y: engine_static.worldHeight * 0.58+ engine_static.worldHeight*0.014
		},{
			x: engine_static.worldWidth *0.75-engine_static.worldWidth*0.12,
			y: engine_static.worldHeight * 0.58+ engine_static.worldHeight*0.021
		},{
			x: engine_static.worldWidth *0.75-engine_static.worldWidth*0.16,
			y: engine_static.worldHeight * 0.58+ engine_static.worldHeight*0.028
		},{
			x: engine_static.worldWidth *0.75-engine_static.worldWidth*0.2,
			y: engine_static.worldHeight * 0.58+ engine_static.worldHeight*0.035
		},{
			x: engine_static.worldWidth *0.75-engine_static.worldWidth*0.24,
			y: engine_static.worldHeight * 0.58+ engine_static.worldHeight*0.028
		},{
			x: engine_static.worldWidth *0.75-engine_static.worldWidth*0.28,
			y: engine_static.worldHeight * 0.58+ engine_static.worldHeight*0.021
		},{
			x: engine_static.worldWidth *0.75-engine_static.worldWidth*0.32,
			y: engine_static.worldHeight * 0.58+ engine_static.worldHeight*0.014
		},{
			x: engine_static.worldWidth *0.75-engine_static.worldWidth*0.36,
			y: engine_static.worldHeight * 0.58+ engine_static.worldHeight*0.007
		}], dz2, sweets[0]),
		v: new PIXI.Graphics()
	};
	
	ropes[2] = {
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
			ropeId: 2
		}, [{
			x: engine_static.worldWidth *0.05+engine_static.worldWidth*0.05,
			y: engine_static.worldHeight * 0.58
		},{
			x: engine_static.worldWidth *0.05+engine_static.worldWidth*0.1,
			y: engine_static.worldHeight * 0.58
		},{
			x: engine_static.worldWidth *0.05+engine_static.worldWidth*0.15,
			y: engine_static.worldHeight * 0.58
		}], dz3, sweets[0]),
		v: new PIXI.Graphics()
	};
	world.vWorld.addChild(ropes[0].v)
	world.vWorld.addChild(ropes[1].v)
	world.vWorld.addChild(ropes[2].v)
	bubbles[0]=createMagicBall({
		position: {
			x: engine_static.worldWidth *0.25,
			y: engine_static.worldHeight *0.685
		},
		radius:30,
		texture:"../assets/bubble.png",
		name:"bubble"
	});
	airBuoyan = addBuoyancy({
		position: 1000,
		density: 2.2,
		angularDrag: 0.4,
		linearDrag: 2,
		velocity: {
			x: 0,
			y: 0
		}
	});
}