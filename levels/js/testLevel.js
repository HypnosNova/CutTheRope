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
		y: engine_static.worldHeight * 0.125
	}, {
		x: engine_static.worldWidth *0.15,
		y: engine_static.worldHeight * 0.23
	}, {
		x: engine_static.worldWidth *0.80,
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
	
	

	pumpArray[0] = createMovieClip({
		name: "pump",
		movieLength: 6,
		speed: 0.4,
		position: {
			x: engine_static.worldWidth*0.75,
			y: engine_static.worldHeight/2
		},
		rotation:Math.PI*1.5,
		scale: scaleXPic2Real("pump", CUT_THE_ROPE_STATIC.pumpWidth, "pump0.png")
	});
	pumpArray[0].loop=false;
	world.vWorld.addChild(pumpArray[0]);
}