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

	var dz1 = createBallObject({
		position: {
			x: engine_static.worldWidth * 0.20,
			y: engine_static.worldHeight * 0.15
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

	var dz2 = createBallObject({
		position: {
			x: engine_static.worldWidth * 0.8,
			y: engine_static.worldHeight * 0.15
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

	stars[0] = createMagicBall({
		position: {
			x: engine_static.worldWidth / 2,
			y: engine_static.worldHeight / 1.7
		},
		texture: "../assets/star.png",
		radius: 20,
		height: 1,
		isStatic: true,
		restitution: 0,
		touchFilter: {
			self: 1,
			other: 1
		},
		name: "star",
	});

	stars[1] = createMagicBall({
		position: {
			x: engine_static.worldWidth / 2,
			y: engine_static.worldHeight / 1.7 + 70
		},
		texture: "../assets/star.png",
		radius: 20,
		height: 1,
		isStatic: true,
		restitution: 0,
		touchFilter: {
			self: 1,
			other: 1
		},
		name: "star",
	});
	stars[2] = createMagicBall({
		position: {
			x: engine_static.worldWidth / 2,
			y: engine_static.worldHeight / 1.7 + 140
		},
		texture: "../assets/star.png",
		radius: 20,
		height: 1,
		isStatic: true,
		restitution: 0,
		touchFilter: {
			self: 1,
			other: 1
		},
		name: "star",
	});

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

	/**/
	eaters[0] = createBallObject({
		position: {
			x: engine_static.worldWidth / 2,
			y: engine_static.worldHeight - 75
		},
		texture: "../assets/eater.png",
		radius: 37.5,
		density: 0.5,
		touchFilter: {
			self: 2,
			other: 3
		},
		isDragable: false,
		restitution: 0.3,
		name: "eater",
	}, airBuoyan);
	eaters[0].hasEaten=1;
	ropes[1] = {
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
	world.vWorld.addChild(ropes[1].v)
	touchObject.createTouchListen()
	update();
}