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