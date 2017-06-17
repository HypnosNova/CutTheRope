var airBuoyan;
function makeGameScene() {
	inLevel = true;
	var bg = new PIXI.Sprite(PIXI.Texture.fromFrame("../assets/bg.jpg"));
	world.vWorld.addChild(bg);
	bg.anchor.x = bg.anchor.y = 0;
	bg.scale.x = bg.scale.y = engine_static.worldHeight / 1024;
	airBuoyan= addBuoyancy({
		position: 1000,
		density: 2,
		angularDrag: 1,
		linearDrag: 1,
		velocity: {
			x: 0,
			y: 0
		}
	});
	var airBuoyan2 = addBuoyancy({
		position: 1000,
		density: 2,
		angularDrag: 0.2,
		linearDrag: 0.2,
		velocity: {
			x: 0,
			y: 0
		}
	});

	var dz = createBallObject({
		position: {
			x: engine_static.worldWidth / 2,
			y: engine_static.worldHeight / 8
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
		x: engine_static.worldWidth / 2,
		y: engine_static.worldHeight / 2
	}, {
		x: engine_static.worldWidth / 2,
		y: engine_static.worldHeight / 2 + 70
	}, {
		x: engine_static.worldWidth / 2,
		y: engine_static.worldHeight / 2 + 140
	}])

	bubbles[0]=createMagicBall({
		position: {
			x: engine_static.worldWidth / 2,
			y: engine_static.worldHeight *0.5
		},
		radius:30,
		texture:"../assets/bubble.png",
		name:"bubble"
	})

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
			density: 15,
			name: "chain",
			touchFilter: {
				self: 16,
				other: 9
			},
			container: airBuoyan2,
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
		container: airBuoyan2
	}]);

	//clearAllGameThings();
	touchObject.createTouchListen();
	update();
}