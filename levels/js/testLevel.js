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