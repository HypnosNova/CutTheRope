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
		texture:"../assets/stickBar.png",
		touchFilter: {
			self: 1,
			other: 1
		},
		height:engine_static.worldHeight*0.08,
		width:engine_static.worldHeight*0.02,
		scaleX:scaleXPic2Real("stickBar",engine_static.worldHeight*0.02),
		scaleY:scaleYPic2Real("stickBar",engine_static.worldHeight*0.08),
	})
	var idz2=createBoxObject({
		position:{
			x:engine_static.worldWidth*0.85,
			y:engine_static.worldHeight*0.30
		},
		texture:"../assets/stickBar.png",
		density: 2,
		touchFilter: {
			self: 1,
			other: 1
		},
		height:engine_static.worldHeight*0.08,
		width:engine_static.worldHeight*0.02,
		scaleX:scaleXPic2Real("stickBar",engine_static.worldHeight*0.02),
		scaleY:scaleYPic2Real("stickBar",engine_static.worldHeight*0.08),
	})
	setWeldJoint(qqb,idz1);
	setWeldJoint(qqb,idz2);
	
	var wt1=createBoxObject({
		position:{
			x:engine_static.worldWidth*0.15,
			y:engine_static.worldHeight*0.54
		},
		color:0xeeeeee,
		touchFilter: {
			self: 1,
			other: 1
		},
		density:0.4,
		width:engine_static.worldWidth*0.06,
		height:engine_static.worldWidth*0.06,
		scaleX:scaleXPic2Real("stickBar",engine_static.worldWidth*0.45),
		scaleY:scaleYPic2Real("stickBar",engine_static.worldHeight*0.02),
	});
	
	var wt2=createBoxObject({
		position:{
			x:engine_static.worldWidth*0.85,
			y:engine_static.worldHeight*0.54
		},
		color:0xeeeeee,
		touchFilter: {
			self: 1,
			other: 1
		},
		density:0.4,
		width:engine_static.worldWidth*0.06,
		height:engine_static.worldWidth*0.06,
		scaleX:scaleXPic2Real("stickBar",engine_static.worldWidth*0.45),
		scaleY:scaleYPic2Real("stickBar",engine_static.worldHeight*0.02),
	});
	var wt3=createBoxObject({
		position:{
			x:engine_static.worldWidth*0.15,
			y:engine_static.worldHeight*0.78
		},
		color:0xeeeeee,
		touchFilter: {
			self: 1,
			other: 1
		},
		density:0.4,
		width:engine_static.worldWidth*0.06,
		height:engine_static.worldWidth*0.06,
		scaleX:scaleXPic2Real("stickBar",engine_static.worldWidth*0.45),
		scaleY:scaleYPic2Real("stickBar",engine_static.worldHeight*0.02),
	});
	
	var wt4=createBoxObject({
		position:{
			x:engine_static.worldWidth*0.85,
			y:engine_static.worldHeight*0.78
		},
		color:0xeeeeee,
		touchFilter: {
			self: 1,
			other: 1
		},
		density:0.4,
		width:engine_static.worldWidth*0.06,
		height:engine_static.worldWidth*0.06,
		scaleX:scaleXPic2Real("stickBar",engine_static.worldWidth*0.45),
		scaleY:scaleYPic2Real("stickBar",engine_static.worldHeight*0.02),
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