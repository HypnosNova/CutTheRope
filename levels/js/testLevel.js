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
	var dz3 = createDZ({
		x: engine_static.worldWidth / 2,
		y: engine_static.worldHeight *0.5
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
	
	createBoxObject({
		position: {
			x: engine_static.worldWidth/2,
			y: engine_static.worldHeight*0.43
		},
		texture: "../assets/killerDz.png",
		width: engine_static.worldWidth/7.2,
		height:engine_static.worldWidth/24,
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
			x: engine_static.worldWidth/2,
			y: engine_static.worldHeight*0.61
		},
		texture: "../assets/killerDz.png",
		width: engine_static.worldWidth/7.2,
		height:engine_static.worldWidth/24,
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