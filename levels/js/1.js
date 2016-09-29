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
		texture: "../assets/circledef.png",
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

	sweet = createBallObject({
		position: {
			x: engine_static.worldWidth / 2 + engine_static.worldWidth / 80 * 15,
			y: engine_static.worldHeight / 4 + engine_static.worldHeight / 80 * 15
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
		}], dz, sweet),
		v: new PIXI.Graphics()
	};

	world.vWorld.addChild(ropes[0].v)

	/**/
	var eater = createBallObject({
		position: {
			x: engine_static.worldWidth / 2,
			y: engine_static.worldHeight - 75
		},
		texture: "../assets/eater.png",
		radius: 37.5,
		density: 0.5,
		touchFilter: {
			self: 1,
			other: 1
		},
		isDragable: false,
		restitution: 0.3,
		name: "sweet"
	}, airBuoyan);
	touchObject.createTouchListen()
	update();
}