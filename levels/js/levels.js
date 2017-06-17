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
	
	eaters = createEaters([{
		x: engine_static.worldWidth / 2,
		y: engine_static.worldHeight*0.8,
		hasEaten: 1,
		container: airBuoyan
	}]);
	var dz = createDZ({
		x: engine_static.worldWidth / 2,
		y: engine_static.worldHeight / 8
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

	sweets[0] = createSweet({
			x: engine_static.worldWidth / 2 + engine_static.worldWidth / 80 * 15,
			y: engine_static.worldHeight / 8 + engine_static.worldHeight / 80 * 15
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

	eaters = createEaters([{
		x: engine_static.worldWidth / 2,
		y: engine_static.worldHeight *0.8,
		hasEaten: 1,
		container: airBuoyan
	}]);
	var dz1 = createDZ({
		x: engine_static.worldWidth * 0.2,
		y: engine_static.worldHeight * 0.15
	});

	var dz2 = createDZ({
		x: engine_static.worldWidth * 0.8,
		y: engine_static.worldHeight * 0.15
	});

	stars = createStars([{
		x: engine_static.worldWidth / 2,
		y: engine_static.worldHeight *0.45
	}, {
		x: engine_static.worldWidth / 2,
		y: engine_static.worldHeight *0.55
	}, {
		x: engine_static.worldWidth / 2,
		y: engine_static.worldHeight *0.65
	}])

	sweets[0] = createSweet({
			x: engine_static.worldWidth / 2,
			y: engine_static.worldHeight * 0.335
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

	eaters = createEaters([{
		x: engine_static.worldWidth * 0.8,
		y: engine_static.worldHeight * 0.85,
		hasEaten: 1,
		container: airBuoyan
	}]);
	var dz1 = createDZ({
		x: engine_static.worldWidth * 0.2,
		y: engine_static.worldHeight * 0.15
	});

	var dz2 = createDZ({
		x: engine_static.worldWidth / 2,
		y: engine_static.worldHeight * 0.15
	});

	var dz3 = createDZ({
		x: engine_static.worldWidth * 0.8,
		y: engine_static.worldHeight * 0.15
	});

	stars = createStars([{
		x: engine_static.worldWidth * 0.2,
		y: engine_static.worldHeight * 0.475
	}, {
		x: engine_static.worldWidth * 0.8,
		y: engine_static.worldHeight * 0.475
	}, {
		x: engine_static.worldWidth * 0.5,
		y: engine_static.worldHeight * 0.60
	}])

	sweets[0] = createSweet({
			x: engine_static.worldWidth * 0.2,
			y: engine_static.worldHeight * 0.4
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

	eaters = createEaters([{
		x: engine_static.worldWidth * 0.8,
		y: engine_static.worldHeight * 0.75,
		hasEaten: 1,
		container: airBuoyan
	}]);
	var dz1 = createDZ({
		x: engine_static.worldWidth * 0.50,
		y: engine_static.worldHeight * 0.15
	});

	var dz2 = createDZ({
		x: engine_static.worldWidth * 0.1,
		y: engine_static.worldHeight * 0.4
	});

	var dz3 = createDZ({
		x: engine_static.worldWidth / 2,
		y: engine_static.worldHeight * 0.65
	});

	var dz4 = createDZ({
		x: engine_static.worldWidth * 0.9,
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

	sweets[0] = createSweet({
			x: engine_static.worldWidth * 0.5,
			y: engine_static.worldHeight * 0.4
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
	eaters = createEaters([{
		x: engine_static.worldWidth * 0.75,
		y: engine_static.worldHeight * 0.85,
		hasEaten: 1,
		container: airBuoyan
	}]);
	var dz = createDZ({
		x: engine_static.worldWidth / 4,
		y: engine_static.worldHeight * 0.25
	});
	var dz2 = createDZ({
		x: engine_static.worldWidth * 0.75,
		y: engine_static.worldHeight * 0.58
	});
	var dz3 = createDZ({
		x: engine_static.worldWidth * 0.05,
		y: engine_static.worldHeight * 0.58
	});

	stars = createStars([{
		x: engine_static.worldWidth * 0.75,
		y: engine_static.worldHeight * 0.25
	}, {
		x: engine_static.worldWidth * 0.75,
		y: engine_static.worldHeight * 0.09
	}, {
		x: engine_static.worldWidth / 2,
		y: engine_static.worldHeight * 0.50
	}])

	sweets[0] = createSweet({
			x: engine_static.worldWidth * 0.25,
			y: engine_static.worldHeight * 0.58
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
			x: engine_static.worldWidth * 0.75 - engine_static.worldWidth * 0.04,
			y: engine_static.worldHeight * 0.58 + engine_static.worldHeight * 0.007
		}, {
			x: engine_static.worldWidth * 0.75 - engine_static.worldWidth * 0.08,
			y: engine_static.worldHeight * 0.58 + engine_static.worldHeight * 0.014
		}, {
			x: engine_static.worldWidth * 0.75 - engine_static.worldWidth * 0.12,
			y: engine_static.worldHeight * 0.58 + engine_static.worldHeight * 0.021
		}, {
			x: engine_static.worldWidth * 0.75 - engine_static.worldWidth * 0.16,
			y: engine_static.worldHeight * 0.58 + engine_static.worldHeight * 0.028
		}, {
			x: engine_static.worldWidth * 0.75 - engine_static.worldWidth * 0.2,
			y: engine_static.worldHeight * 0.58 + engine_static.worldHeight * 0.035
		}, {
			x: engine_static.worldWidth * 0.75 - engine_static.worldWidth * 0.24,
			y: engine_static.worldHeight * 0.58 + engine_static.worldHeight * 0.028
		}, {
			x: engine_static.worldWidth * 0.75 - engine_static.worldWidth * 0.28,
			y: engine_static.worldHeight * 0.58 + engine_static.worldHeight * 0.021
		}, {
			x: engine_static.worldWidth * 0.75 - engine_static.worldWidth * 0.32,
			y: engine_static.worldHeight * 0.58 + engine_static.worldHeight * 0.014
		}, {
			x: engine_static.worldWidth * 0.75 - engine_static.worldWidth * 0.36,
			y: engine_static.worldHeight * 0.58 + engine_static.worldHeight * 0.007
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
			x: engine_static.worldWidth * 0.05 + engine_static.worldWidth * 0.05,
			y: engine_static.worldHeight * 0.58
		}, {
			x: engine_static.worldWidth * 0.05 + engine_static.worldWidth * 0.1,
			y: engine_static.worldHeight * 0.58
		}, {
			x: engine_static.worldWidth * 0.05 + engine_static.worldWidth * 0.15,
			y: engine_static.worldHeight * 0.58
		}], dz3, sweets[0]),
		v: new PIXI.Graphics()
	};
	world.vWorld.addChild(ropes[0].v)
	world.vWorld.addChild(ropes[1].v)
	world.vWorld.addChild(ropes[2].v)
	bubbles[0] = createBubble(engine_static.worldWidth * 0.25,engine_static.worldHeight * 0.685);
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
levelScript[5] = function() {
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
		x: engine_static.worldWidth * 0.75,
		y: engine_static.worldHeight * 0.85,
		hasEaten: 1,
		container: airBuoyan
	}]);
	var dz = createDZ({
		x: engine_static.worldWidth * 0.5,
		y: engine_static.worldHeight * 0.25
	});
	var dz2 = createDZ({
		x: engine_static.worldWidth * 0.5,
		y: engine_static.worldHeight * 0.55
	});

	stars = createStars([{
		x: engine_static.worldWidth * 0.3,
		y: engine_static.worldHeight * 0.75
	}, {
		x: engine_static.worldWidth * 0.75,
		y: engine_static.worldHeight * 0.08
	}, {
		x: engine_static.worldWidth *0.75,
		y: engine_static.worldHeight * 0.60
	}])

	sweets[0] = createSweet({
			x: engine_static.worldWidth * 0.15,
			y: engine_static.worldHeight * 0.4
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
			x: engine_static.worldWidth * 0.5 - engine_static.worldWidth * 0.035,
			y: engine_static.worldHeight * 0.25 + engine_static.worldHeight * 0.015
		}, {
			x: engine_static.worldWidth * 0.5 - engine_static.worldWidth * 0.07,
			y: engine_static.worldHeight * 0.25 + engine_static.worldHeight * 0.03
		}, {
			x: engine_static.worldWidth * 0.5 - engine_static.worldWidth * 0.105,
			y: engine_static.worldHeight * 0.25 + engine_static.worldHeight * 0.045
		}, {
			x: engine_static.worldWidth * 0.5 - engine_static.worldWidth * 0.14,
			y: engine_static.worldHeight * 0.25 + engine_static.worldHeight * 0.06
		}, {
			x: engine_static.worldWidth * 0.5 - engine_static.worldWidth * 0.175,
			y: engine_static.worldHeight * 0.25 + engine_static.worldHeight * 0.075
		}, {
			x: engine_static.worldWidth * 0.5 - engine_static.worldWidth * 0.21,
			y: engine_static.worldHeight * 0.25 + engine_static.worldHeight * 0.09
		}, {
			x: engine_static.worldWidth * 0.5 - engine_static.worldWidth * 0.245,
			y: engine_static.worldHeight * 0.25 + engine_static.worldHeight * 0.105
		}, {
			x: engine_static.worldWidth * 0.5 - engine_static.worldWidth * 0.280,
			y: engine_static.worldHeight * 0.25 + engine_static.worldHeight * 0.12
		}, {
			x: engine_static.worldWidth * 0.5 - engine_static.worldWidth * 0.315,
			y: engine_static.worldHeight * 0.25 + engine_static.worldHeight * 0.135
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
			x: engine_static.worldWidth * 0.5 - engine_static.worldWidth * 0.035,
			y: engine_static.worldHeight * 0.55 - engine_static.worldHeight * 0.015
		}, {
			x: engine_static.worldWidth * 0.5 - engine_static.worldWidth * 0.07,
			y: engine_static.worldHeight * 0.55 - engine_static.worldHeight * 0.03
		}, {
			x: engine_static.worldWidth * 0.5 - engine_static.worldWidth * 0.105,
			y: engine_static.worldHeight * 0.55 - engine_static.worldHeight * 0.045
		}, {
			x: engine_static.worldWidth * 0.5 - engine_static.worldWidth * 0.14,
			y: engine_static.worldHeight * 0.55 - engine_static.worldHeight * 0.06
		}, {
			x: engine_static.worldWidth * 0.5 - engine_static.worldWidth * 0.175,
			y: engine_static.worldHeight * 0.55 - engine_static.worldHeight * 0.075
		}, {
			x: engine_static.worldWidth * 0.5 - engine_static.worldWidth * 0.21,
			y: engine_static.worldHeight * 0.55 - engine_static.worldHeight * 0.09
		}, {
			x: engine_static.worldWidth * 0.5 - engine_static.worldWidth * 0.245,
			y: engine_static.worldHeight * 0.55 - engine_static.worldHeight * 0.105
		}, {
			x: engine_static.worldWidth * 0.5 - engine_static.worldWidth * 0.280,
			y: engine_static.worldHeight * 0.55 - engine_static.worldHeight * 0.12
		}, {
			x: engine_static.worldWidth * 0.5 - engine_static.worldWidth * 0.315,
			y: engine_static.worldHeight * 0.55 - engine_static.worldHeight * 0.135
		}], dz2, sweets[0]),
		v: new PIXI.Graphics()
	};
	world.vWorld.addChild(ropes[0].v)
	world.vWorld.addChild(ropes[1].v)
	bubbles[0] = createBubble(engine_static.worldWidth * 0.7,engine_static.worldHeight * 0.75);
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
levelScript[6] = function() {
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
		x: engine_static.worldWidth * 0.80,
		y: engine_static.worldHeight * 0.2 ,
		hasEaten: 1,
		container: airBuoyan
	}]);
	var dz2 = createDZ({
		x: engine_static.worldWidth * 0.85,
		y: engine_static.worldHeight * 0.42
	});
	var dz3 = createDZ({
		x: engine_static.worldWidth * 0.15,
		y: engine_static.worldHeight * 0.42
	});

	stars = createStars([{
		x: engine_static.worldWidth * 0.5,
		y: engine_static.worldHeight * 0.32
	}, {
		x: engine_static.worldWidth * 0.6,
		y: engine_static.worldHeight * 0.6
	}, {
		x: engine_static.worldWidth *0.8,
		y: engine_static.worldHeight * 0.80
	}])

	sweets[0] = createSweet({
			x: engine_static.worldWidth * 0.365,
			y: engine_static.worldHeight * 0.4
		});

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
			x: engine_static.worldWidth * 0.195,
			y: engine_static.worldHeight * 0.42
		},{
			x: engine_static.worldWidth * 0.240,
			y: engine_static.worldHeight * 0.42
		},{
			x: engine_static.worldWidth * 0.285,
			y: engine_static.worldHeight * 0.42
		},{
			x: engine_static.worldWidth * 0.330,
			y: engine_static.worldHeight * 0.42
		}], dz3, sweets[0]),
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
			x: engine_static.worldWidth * 0.5+engine_static.worldWidth*0.305,
			y: engine_static.worldHeight * 0.42
		},{
			x: engine_static.worldWidth * 0.5+engine_static.worldWidth*0.26,
			y: engine_static.worldHeight * 0.42
		},{
			x: engine_static.worldWidth * 0.5+engine_static.worldWidth*0.215,
			y: engine_static.worldHeight * 0.42
		},{
			x: engine_static.worldWidth * 0.5+engine_static.worldWidth*0.17,
			y: engine_static.worldHeight * 0.42
		},{
			x: engine_static.worldWidth * 0.5+engine_static.worldWidth*0.135,
			y: engine_static.worldHeight * 0.42
		},{
			x: engine_static.worldWidth * 0.5+engine_static.worldWidth*0.09,
			y: engine_static.worldHeight * 0.42
		},{
			x: engine_static.worldWidth * 0.5+engine_static.worldWidth*0.045,
			y: engine_static.worldHeight * 0.42
		},{
			x: engine_static.worldWidth * 0.5,
			y: engine_static.worldHeight * 0.42
		},{
			x: engine_static.worldWidth * 0.5-engine_static.worldWidth*0.045,
			y: engine_static.worldHeight * 0.42
		},{
			x: engine_static.worldWidth * 0.5-engine_static.worldWidth *0.09,
			y: engine_static.worldHeight * 0.42
		}], dz2, sweets[0]),
		v: new PIXI.Graphics()
	};
//	world.vWorld.addChild(ropes[0].v)
	world.vWorld.addChild(ropes[1].v)
	world.vWorld.addChild(ropes[2].v)
	bubbles[0] =createBubble(engine_static.worldWidth * 0.365,engine_static.worldHeight * 0.42); 
	bubbles[1] = createBubble(engine_static.worldWidth * 0.8,engine_static.worldHeight * 0.7);
	bubbles[2] = createBubble(engine_static.worldWidth * 0.8,engine_static.worldHeight * 0.9);
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
	eaters = createEaters([{
		x: engine_static.worldWidth * 0.5,
		y: engine_static.worldHeight * 0.2,
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
		x: engine_static.worldWidth * 0.3,
		y: engine_static.worldHeight * 0.365
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
		texture:"../assets/squarewood.png",
		density:4,
		width:engine_static.worldWidth*0.08,
		height:engine_static.worldHeight*0.045,
		scaleX: scaleXPic2Real("squarewood", engine_static.worldWidth*0.08),
		scaleY: scaleYPic2Real("squarewood", engine_static.worldHeight*0.045),
		name:"havyBox"
	});
	sweets[0] = createSweet({
			x: engine_static.worldWidth * 0.15,
			y: engine_static.worldHeight * 0.4
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
	world.vWorld.addChild(ropes[0].v)
	world.vWorld.addChild(ropes[1].v)
	
	var qqb=createBoxObject({
		position:{
			x:engine_static.worldWidth/2,
			y:engine_static.worldHeight*0.8
		},
		texture:"../assets/stickBar.png",
		density:1,
		width:engine_static.worldWidth*0.45,
		height:engine_static.worldHeight*0.02,
		scaleX:scaleXPic2Real("stickBar",engine_static.worldWidth*0.45),
		scaleY:scaleYPic2Real("stickBar",engine_static.worldHeight*0.02),
	});
	var ddz=createDZ({
		x:engine_static.worldWidth/2,
		y:engine_static.worldHeight*0.8
	})
	setRevoluteJoint(qqb,ddz);
	bubbles[0] = createBubble(engine_static.worldWidth * 0.15,engine_static.worldHeight * 0.65);
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
		restitution:0.15,
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
		restitution:0.15,
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
		restitution:0.15,
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

levelScript[9] = function() {
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
	
	eaters = createEaters([{
		x: engine_static.worldWidth / 2,
		y: engine_static.worldHeight*0.8,
		hasEaten: 1,
		container: airBuoyan
	}]);
	var dz = createDZ({
		x: engine_static.worldWidth / 2,
		y: engine_static.worldHeight *0.1
	});
	var dz2 = createDZ({
		x: engine_static.worldWidth / 2,
		y: engine_static.worldHeight *0.3
	});

	stars = createStars([{
		x: engine_static.worldWidth *0.15,
		y: engine_static.worldHeight * 0.38
	}, {
		x: engine_static.worldWidth * 0.85,
		y: engine_static.worldHeight * 0.35
	}, {
		x: engine_static.worldWidth *0.58,
		y: engine_static.worldHeight * 0.67
	}])

	sweets[0] = createSweet({
			x: engine_static.worldWidth * 0.85,
			y: engine_static.worldHeight * 0.25
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
			x: engine_static.worldWidth *0.54,
			y: engine_static.worldHeight *0.117
		},{
			x: engine_static.worldWidth *0.58,
			y: engine_static.worldHeight *0.134
		},{
			x: engine_static.worldWidth *0.62,
			y: engine_static.worldHeight *0.151
		},{
			x: engine_static.worldWidth *0.66,
			y: engine_static.worldHeight *0.168
		},{
			x: engine_static.worldWidth *0.70,
			y: engine_static.worldHeight *0.185
		},{
			x: engine_static.worldWidth *0.74,
			y: engine_static.worldHeight *0.202
		},{
			x: engine_static.worldWidth *0.78,
			y: engine_static.worldHeight *0.219
		},{
			x: engine_static.worldWidth *0.82,
			y: engine_static.worldHeight *0.236
		}], dz, sweets[0]),
		v: new PIXI.Graphics()
	};
	world.vWorld.addChild(ropes[0].v);
	
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
			x: engine_static.worldWidth *0.54,
			y: engine_static.worldHeight *0.295
		},{
			x: engine_static.worldWidth *0.58,
			y: engine_static.worldHeight *0.29
		},{
			x: engine_static.worldWidth *0.62,
			y: engine_static.worldHeight *0.285
		},{
			x: engine_static.worldWidth *0.66,
			y: engine_static.worldHeight *0.28
		},{
			x: engine_static.worldWidth *0.70,
			y: engine_static.worldHeight *0.275
		},{
			x: engine_static.worldWidth *0.74,
			y: engine_static.worldHeight *0.27
		},{
			x: engine_static.worldWidth *0.78,
			y: engine_static.worldHeight *0.265
		},{
			x: engine_static.worldWidth *0.82,
			y: engine_static.worldHeight *0.26
		},{
			x: engine_static.worldWidth *0.86,
			y: engine_static.worldHeight *0.26
		}], dz2, sweets[0]),
		v: new PIXI.Graphics()
	};
	world.vWorld.addChild(ropes[1].v);
	
	createKillerDZ(engine_static.worldWidth/2, engine_static.worldHeight*0.43, 0)
	createKillerDZ(engine_static.worldWidth/2, engine_static.worldHeight*0.61, 0)
	
	bubbles[0] = createBubble(engine_static.worldWidth * 0.85, engine_static.worldHeight * 0.72);
	var woodBridge2 = createBoxObject({
		position: {
			x: engine_static.worldWidth * 0.85,
			y: engine_static.worldHeight * 0.85
		},
		isStatic:true,
		texture: "../assets/wood.png",
		density: 1,
		restitution:0.15,
		width: engine_static.worldWidth * 0.15,
		height: engine_static.worldHeight * 0.025,
		scaleX: scaleXPic2Real("wood", engine_static.worldWidth * 0.15),
		scaleY: scaleYPic2Real("wood", engine_static.worldHeight * 0.025),
		name: "wood"
	});
	woodBridge2.SetAngle(-0.25);
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

levelScript[10] = function() {
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
	
	eaters = createEaters([{
		x: engine_static.worldWidth / 2,
		y: engine_static.worldHeight*0.8,
		hasEaten: 1,
		container: airBuoyan
	}]);
	
	stars = createStars([{
		x: engine_static.worldWidth *0.20,
		y: engine_static.worldHeight * 0.40
	}, {
		x: engine_static.worldWidth * 0.80,
		y: engine_static.worldHeight * 0.40
	}, {
		x: engine_static.worldWidth *0.58,
		y: engine_static.worldHeight * 0.67
	}]);
		
	var qqb=createBoxObject({
		position:{
			x:engine_static.worldWidth/2,
			y:engine_static.worldHeight*0.3
		},
		touchFilter: {
			self: 1,
			other: 1
		},
		texture:"../assets/stickBar.png",
		density:1,
		width:engine_static.worldWidth*0.40,
		height:engine_static.worldHeight*0.02,
		scaleX:scaleXPic2Real("stickBar",engine_static.worldWidth*0.40),
		scaleY:scaleYPic2Real("stickBar",engine_static.worldHeight*0.02),
	});
	var ddz=createDZ({
		x:engine_static.worldWidth/2,
		y:engine_static.worldHeight*0.3
	})	
	setRevoluteJoint(qqb,ddz);
	
	var idz1=createBoxObject({
		position:{
			x:engine_static.worldWidth*0.15,
			y:engine_static.worldHeight*0.3
		},
		density: 2,
		texture:"../assets/squarewood.png",
		touchFilter: {
			self: 1,
			other: 1
		},
		height:engine_static.worldHeight*0.08,
		width:engine_static.worldHeight*0.02,
		scaleX:scaleXPic2Real("squarewood",engine_static.worldHeight*0.02),
		scaleY:scaleYPic2Real("squarewood",engine_static.worldHeight*0.08),
	})
	var idz2=createBoxObject({
		position:{
			x:engine_static.worldWidth*0.85,
			y:engine_static.worldHeight*0.30
		},
		texture:"../assets/squarewood.png",
		density: 2,
		touchFilter: {
			self: 1,
			other: 1
		},
		height:engine_static.worldHeight*0.08,
		width:engine_static.worldHeight*0.02,
		scaleX:scaleXPic2Real("squarewood",engine_static.worldHeight*0.02),
		scaleY:scaleYPic2Real("squarewood",engine_static.worldHeight*0.08),
	})
	setWeldJoint(qqb,idz1);
	setWeldJoint(qqb,idz2);
	
	var wt1=createBoxObject({
		position:{
			x:engine_static.worldWidth*0.15,
			y:engine_static.worldHeight*0.54
		},
		texture:"../assets/squarewood.png",
		touchFilter: {
			self: 1,
			other: 1
		},
		density:0.4,
		width:engine_static.worldWidth*0.06,
		height:engine_static.worldWidth*0.06,
		scaleX:scaleXPic2Real("squarewood",engine_static.worldWidth*0.06),
		scaleY:scaleYPic2Real("squarewood",engine_static.worldWidth*0.06),
	});
	
	var wt2=createBoxObject({
		position:{
			x:engine_static.worldWidth*0.85,
			y:engine_static.worldHeight*0.54
		},
		texture:"../assets/squarewood.png",
		touchFilter: {
			self: 1,
			other: 1
		},
		density:0.4,
		width:engine_static.worldWidth*0.06,
		height:engine_static.worldWidth*0.06,
		scaleX:scaleXPic2Real("squarewood",engine_static.worldWidth*0.06),
		scaleY:scaleYPic2Real("squarewood",engine_static.worldWidth*0.06),
	});
	var wt3=createBoxObject({
		position:{
			x:engine_static.worldWidth*0.15,
			y:engine_static.worldHeight*0.78
		},
		texture:"../assets/squarewood.png",
		touchFilter: {
			self: 1,
			other: 1
		},
		density:0.4,
		width:engine_static.worldWidth*0.06,
		height:engine_static.worldWidth*0.06,
		scaleX:scaleXPic2Real("squarewood",engine_static.worldWidth*0.06),
		scaleY:scaleYPic2Real("squarewood",engine_static.worldWidth*0.06),
	});
	
	var wt4=createBoxObject({
		position:{
			x:engine_static.worldWidth*0.85,
			y:engine_static.worldHeight*0.78
		},
		texture:"../assets/squarewood.png",
		touchFilter: {
			self: 1,
			other: 1
		},
		density:0.4,
		width:engine_static.worldWidth*0.06,
		height:engine_static.worldWidth*0.06,
		scaleX:scaleXPic2Real("squarewood",engine_static.worldWidth*0.06),
		scaleY:scaleYPic2Real("squarewood",engine_static.worldWidth*0.06),
	});

	sweets[0] = createSweet({
			x: engine_static.worldWidth * 0.5,
			y: engine_static.worldHeight * 0.15
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
			x: engine_static.worldWidth *0.15,
			y: engine_static.worldHeight *0.33
		},{
			x: engine_static.worldWidth *0.15,
			y: engine_static.worldHeight *0.36
		},{
			x: engine_static.worldWidth *0.15,
			y: engine_static.worldHeight *0.39
		},{
			x: engine_static.worldWidth *0.15,
			y: engine_static.worldHeight *0.42
		},{
			x: engine_static.worldWidth *0.15,
			y: engine_static.worldHeight *0.45
		},{
			x: engine_static.worldWidth *0.15,
			y: engine_static.worldHeight *0.48
		},{
			x: engine_static.worldWidth *0.15,
			y: engine_static.worldHeight *0.51
		}], idz1, wt1),
		v: new PIXI.Graphics()
	};
	world.vWorld.addChild(ropes[0].v);
	
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
			x: engine_static.worldWidth *0.85,
			y: engine_static.worldHeight *0.33
		},{
			x: engine_static.worldWidth *0.85,
			y: engine_static.worldHeight *0.36
		},{
			x: engine_static.worldWidth *0.85,
			y: engine_static.worldHeight *0.39
		},{
			x: engine_static.worldWidth *0.85,
			y: engine_static.worldHeight *0.42
		},{
			x: engine_static.worldWidth *0.85,
			y: engine_static.worldHeight *0.45
		},{
			x: engine_static.worldWidth *0.85,
			y: engine_static.worldHeight *0.48
		},{
			x: engine_static.worldWidth *0.85,
			y: engine_static.worldHeight *0.51
		}], idz2, wt2),
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
			x: engine_static.worldWidth *0.15,
			y: engine_static.worldHeight *0.57
		},{
			x: engine_static.worldWidth *0.15,
			y: engine_static.worldHeight *0.60
		},{
			x: engine_static.worldWidth *0.15,
			y: engine_static.worldHeight *0.63
		},{
			x: engine_static.worldWidth *0.15,
			y: engine_static.worldHeight *0.66
		},{
			x: engine_static.worldWidth *0.15,
			y: engine_static.worldHeight *0.69
		},{
			x: engine_static.worldWidth *0.15,
			y: engine_static.worldHeight *0.72
		},{
			x: engine_static.worldWidth *0.15,
			y: engine_static.worldHeight *0.75
		}], wt1, wt3),
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
			x: engine_static.worldWidth *0.85,
			y: engine_static.worldHeight *0.57
		},{
			x: engine_static.worldWidth *0.85,
			y: engine_static.worldHeight *0.60
		},{
			x: engine_static.worldWidth *0.85,
			y: engine_static.worldHeight *0.63
		},{
			x: engine_static.worldWidth *0.85,
			y: engine_static.worldHeight *0.66
		},{
			x: engine_static.worldWidth *0.85,
			y: engine_static.worldHeight *0.69
		},{
			x: engine_static.worldWidth *0.85,
			y: engine_static.worldHeight *0.72
		},{
			x: engine_static.worldWidth *0.85,
			y: engine_static.worldHeight *0.75
		}], wt2, wt4),
		v: new PIXI.Graphics()
	};
	world.vWorld.addChild(ropes[3].v);
}

levelScript[11] = function() {
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

	eaters = createEaters([{
		x: engine_static.worldWidth / 2,
		y: engine_static.worldHeight * 0.8,
		hasEaten: 1,
		container: airBuoyan
	}]);
	var dz = createDZ({
		x: engine_static.worldWidth / 2,
		y: engine_static.worldHeight *0.23
	});

	stars = createStars([{
		x: engine_static.worldWidth / 2,
		y: engine_static.worldHeight * 0.65
	}, {
		x: engine_static.worldWidth *0.1,
		y: engine_static.worldHeight * 0.23
	}, {
		x: engine_static.worldWidth *0.90,
		y: engine_static.worldHeight * 0.32
	}])

	sweets[0] = createSweet({
		x: engine_static.worldWidth / 2 ,
		y: engine_static.worldHeight / 2
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
			x: engine_static.worldWidth / 2 ,
			y: engine_static.worldHeight *0.26
		},{
			x: engine_static.worldWidth / 2 ,
			y: engine_static.worldHeight *0.29
		},{
			x: engine_static.worldWidth / 2 ,
			y: engine_static.worldHeight *0.32
		},{
			x: engine_static.worldWidth / 2 ,
			y: engine_static.worldHeight *0.35
		},{
			x: engine_static.worldWidth / 2 ,
			y: engine_static.worldHeight *0.38
		},{
			x: engine_static.worldWidth / 2 ,
			y: engine_static.worldHeight *0.41
		},{
			x: engine_static.worldWidth / 2 ,
			y: engine_static.worldHeight *0.44
		},{
			x: engine_static.worldWidth / 2 ,
			y: engine_static.worldHeight *0.47
		}], dz, sweets[0]),
		v: new PIXI.Graphics()
	};

	world.vWorld.addChild(ropes[0].v);
	
	pumpArray[0] = createPump(engine_static.worldWidth*0.75,engine_static.worldHeight/2,Math.PI*1.5);
}

levelScript[12] = function() {
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

	eaters = createEaters([{
		x: engine_static.worldWidth *0.55,
		y: engine_static.worldHeight * 0.61,
		hasEaten: 1,
		container: airBuoyan
	}]);
	var dz = createDZ({
		x: engine_static.worldWidth *0.65,
		y: engine_static.worldHeight *0.21
	});
	var dz1 = createDZ({
		x: engine_static.worldWidth *0.31,
		y: engine_static.worldHeight *0.42
	});

	stars = createStars([{
		x: engine_static.worldWidth *0.31,
		y: engine_static.worldHeight * 0.17
	}, {
		x: engine_static.worldWidth *0.31,
		y: engine_static.worldHeight * 0.51
	}, {
		x: engine_static.worldWidth *0.31,
		y: engine_static.worldHeight * 0.64
	}])

	sweets[0] = createSweet({
		x: engine_static.worldWidth *0.65 ,
		y: engine_static.worldHeight *0.42
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
			x: engine_static.worldWidth *0.65 ,
			y: engine_static.worldHeight *0.24
		},{
			x: engine_static.worldWidth *0.65 ,
			y: engine_static.worldHeight *0.27
		},{
			x: engine_static.worldWidth *0.65 ,
			y: engine_static.worldHeight *0.30
		},{
			x: engine_static.worldWidth *0.65 ,
			y: engine_static.worldHeight *0.33
		},{
			x: engine_static.worldWidth *0.65 ,
			y: engine_static.worldHeight *0.36
		},{
			x: engine_static.worldWidth *0.65 ,
			y: engine_static.worldHeight *0.39
		}], dz, sweets[0]),
		v: new PIXI.Graphics()
	};

	world.vWorld.addChild(ropes[0].v);
	
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
			x: engine_static.worldWidth *0.35 ,
			y: engine_static.worldHeight *0.432
		},{
			x: engine_static.worldWidth *0.39 ,
			y: engine_static.worldHeight *0.444
		},{
			x: engine_static.worldWidth *0.43 ,
			y: engine_static.worldHeight *0.456
		},{
			x: engine_static.worldWidth *0.47 ,
			y: engine_static.worldHeight *0.468
		},{
			x: engine_static.worldWidth *0.51 ,
			y: engine_static.worldHeight *0.456
		},{
			x: engine_static.worldWidth *0.55 ,
			y: engine_static.worldHeight *0.444
		},{
			x: engine_static.worldWidth *0.59 ,
			y: engine_static.worldHeight *0.432
		},{
			x: engine_static.worldWidth *0.62 ,
			y: engine_static.worldHeight *0.42
		}], dz1, sweets[0]),
		v: new PIXI.Graphics()
	};

	world.vWorld.addChild(ropes[1].v);
	
	pumpArray[0] = createPump(engine_static.worldWidth*0.85,engine_static.worldHeight*0.42,Math.PI*1.5);
	//pumpArray[1] = createPump(engine_static.worldWidth*0.32,engine_static.worldHeight*0.42,Math.PI*0.5);
	pumpArray[1] = createPump(engine_static.worldWidth*0.1,engine_static.worldHeight*0.65,Math.PI*0.5);
	createBoxObject({
		position: {
			x: engine_static.worldWidth*0.55,
			y: engine_static.worldHeight*0.51
		},
		texture: "../assets/killerDz.png",
		width: engine_static.worldWidth/7.4,
		height:engine_static.worldWidth/26,
		density: 0.5,
		touchFilter: {
			self: 1,
			other: 1
		},
		isStatic:true,
		restitution: 0.7,
		scaleX:scaleXPic2Real("killerDz",engine_static.worldWidth/7.2),
		scaleY:scaleYPic2Real("killerDz",engine_static.worldWidth/23),
		name: "killerDz"
	});
	createBoxObject({
		position: {
			x: engine_static.worldWidth*0.49+engine_static.worldWidth/3.6,
			y: engine_static.worldHeight*0.51
		},
		texture: "../assets/killerDz.png",
		width: engine_static.worldWidth/7.4,
		height:engine_static.worldWidth/26,
		density: 0.5,
		touchFilter: {
			self: 1,
			other: 1
		},
		isStatic:true,
		restitution: 0.7,
		scaleX:scaleXPic2Real("killerDz",engine_static.worldWidth/7.2),
		scaleY:scaleYPic2Real("killerDz",engine_static.worldWidth/23),
		name: "killerDz"
	});
	
	createBoxObject({
		position: {
			x: engine_static.worldWidth*0.08,
			y: engine_static.worldHeight*0.51
		},
		texture: "../assets/killerDz.png",
		width: engine_static.worldWidth/7.4,
		height:engine_static.worldWidth/26,
		density: 0.5,
		touchFilter: {
			self: 1,
			other: 1
		},
		isStatic:true,
		restitution: 0.7,
		scaleX:scaleXPic2Real("killerDz",engine_static.worldWidth/7.2),
		scaleY:scaleYPic2Real("killerDz",engine_static.worldWidth/23),
		name: "killerDz"
	});
	
	bubbles[0] = createBubble(engine_static.worldWidth * 0.31,engine_static.worldHeight * 0.31);
	
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

levelScript[13] = function() {
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

	eaters = createEaters([{
		x: engine_static.worldWidth / 2,
		y: engine_static.worldHeight * 0.8,
		hasEaten: 1,
		container: airBuoyan
	}]);
	var dz = createDZ({
		x: engine_static.worldWidth / 2,
		y: engine_static.worldHeight *0.1
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

	sweets[0] = createSweet({
		x: engine_static.worldWidth / 2 ,
		y: engine_static.worldHeight *0.34
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
			x: engine_static.worldWidth / 2 ,
			y: engine_static.worldHeight *0.13
		},{
			x: engine_static.worldWidth / 2 ,
			y: engine_static.worldHeight *0.16
		},{
			x: engine_static.worldWidth / 2 ,
			y: engine_static.worldHeight *0.19
		},{
			x: engine_static.worldWidth / 2 ,
			y: engine_static.worldHeight *0.22
		},{
			x: engine_static.worldWidth / 2 ,
			y: engine_static.worldHeight *0.25
		},{
			x: engine_static.worldWidth / 2 ,
			y: engine_static.worldHeight *0.28
		},{
			x: engine_static.worldWidth / 2 ,
			y: engine_static.worldHeight *0.31
		}], dz, sweets[0]),
		v: new PIXI.Graphics()
	};

	world.vWorld.addChild(ropes[0].v)

	magicSpecialObjArray[1] = createKillerDZ(engine_static.worldWidth * 0.6, engine_static.worldHeight * 0.55, 0);
	magicSpecialObjArray[2] = createKillerDZ(engine_static.worldWidth * 0.4, engine_static.worldHeight * 0.55, 0);
	magicSpecialObjArray[0] = stars[0];
	stars[0].smallAngle = Math.PI / 2;
	stars[0].specialAction = function() {
		var theObj = magicSpecialObjArray[0];
		theObj.smallAngle += 0.025;
		theObj.position.x += Math.sin(theObj.smallAngle) * 1.2;
		theObj.light.position.x += Math.sin(theObj.smallAngle) * 1.2;
		theObj.disappear.position.x += Math.sin(theObj.smallAngle) * 1.2;
	}
	magicSpecialObjArray[3] = stars[2];
	stars[2].smallAngle = Math.PI / 2;
	stars[2].specialAction = function() {
		var theObj = magicSpecialObjArray[3];
		theObj.smallAngle -= 0.0125;
		theObj.position.x += Math.sin(theObj.smallAngle) * 1.2;
		theObj.light.position.x += Math.sin(theObj.smallAngle) * 1.2;
		theObj.disappear.position.x += Math.sin(theObj.smallAngle) * 1.2;
	}

	magicSpecialObjArray[1].smallAngle = 0;
	magicSpecialObjArray[1].specialAction = function() {
		var theObj = magicSpecialObjArray[1];
		theObj.smallAngle += 0.015;
		theObj.GetPosition().x += Math.sin(theObj.smallAngle) * 0.01;
		theObj.SetAngle(theObj.smallAngle / 2);
	}
	magicSpecialObjArray[2].smallAngle = 0;
	magicSpecialObjArray[2].specialAction = function() {
		var theObj = magicSpecialObjArray[2];
		theObj.smallAngle -= 0.015;
		theObj.GetPosition().x += Math.sin(theObj.smallAngle) * 0.01;
		theObj.SetAngle(theObj.smallAngle / 2);
	}
}