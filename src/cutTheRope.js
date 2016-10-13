var inLevel = false; //是否进入游戏关卡
var starsGet = 0;
var bubbleArray = [];

var CUT_THE_ROPE_STATIC = {
	sweetRadius: engine_static.worldWidth * 0.07,
	dzRadius: engine_static.worldWidth * 0.05,
	starRadius: engine_static.worldWidth * 0.12,
	bubbleRadius: engine_static.worldWidth * 0.10,
	starDisappearScale: engine_static.worldWidth * 0.21,
	eaterRadius: engine_static.worldWidth * 0.12,
	openMouthMinDistance: engine_static.worldWidth * 0.12 * 1.0,
	openMouthMaxDistance: engine_static.worldWidth * 0.12 * 2.0,
	closeMouthMaxDistance: engine_static.worldWidth * 0.12 * 2.3
}

function doSpecialAction() {
	sweetTouchStar();
	drawLineRope();
	eatCandy();
	lostSweet();
	winOrLost();
	sweetTouchBubble();
	bubbleArrayRend();
}

function bubbleArrayRend() {
	for(var i = 0; i < bubbleArray.length; i++) {
		var v = bubbleArray[i].v.normalAction;
		var p = bubbleArray[i];
		v.position.x = p.GetPosition().x * 100;
		v.position.y = p.GetPosition().y * 100;
	}
}

function doContactBegin(bodyA, bodyB) {
	cutRope(bodyA, bodyB);
}

function doContactEnd(bodyA, bodyB) {
	candyTouchKiller(bodyA, bodyB);
}

function winOrLost() {
	if(gameResult == 0) {
		$(".starContainer").empty();
		gameResult = -2;
		setTimeout(function() {
			coverClose();
			setTimeout(function() {
				$(".scoreContainer").show();
				try {
					ion.sound.play("win");
				} catch(e) {}
				for(var i = 0; i < starsGet; i++) {
					var img = document.createElement("img");
					img.src = "../assets/star.png";
					img.style.visibility = "hidden";
					$(img).addClass("starImg")
					$(".starContainer").append(img);
					(function(i) {
						setTimeout(function() {
							var il = $(".starImg")[i];
							il.style.visibility = "visible";
							$(il).animateCss("zoomIn");
						}, i * 200 + 1);
					})(i);
				}
			}, 500);
		}, 1500);
	} else if(gameResult == -1) {
		gameResult = -2;
		setTimeout(function() {

			$(".starContainer").empty();
			$(".swiper-container").hide();
			starsGet = 0;
			ropes = [];
			coverClose();
			setTimeout(function() {
				clearAllGameThings();
				levelScript[currentLevel]();
				setTimeout(function() {
					coverOpen();
					setTimeout(function() {
						$(".coverDown").hide();
						$(".coverUp").hide();
						inLevel = true;
					}, 500);
				}, 100);
			}, 500);
		}, 1500);
	}
}

//糖果掉落没有被吃掉
var gameResult = -2; //是否游戏胜利或失败
function lostSweet() {
	if(gameResult > 0) {
		for(var h = 0; h < sweets.length; h++) {
			var position1 = {
				x: 100 * sweets[h].GetPosition().x,
				y: 100 * sweets[h].GetPosition().y
			};
			if(position1.y > engine_static.worldHeight + 200 || position1.y < -200) {
				gameResult = -1;
				try {
					ion.sound.play("sad");
				} catch(e) {}
				for(var i = 0; i < eaters.length; i++) {
					eaters[i].currentAction.gotoAndStop(0);
					world.vWorld.removeChild(eaters[i].currentAction);
					eaters[i].currentAction = eaters[i].sadAction;
					world.vWorld.addChild(eaters[i].sadAction);
					eaters[i].sadAction.gotoAndPlay(0);
				}
			}
		}
	}
}
//糖果碰到钉子碎了
function candyTouchKiller(bodyA, bodyB) {
	if((bodyA.name == "sweet" && bodyB.name == "killerDz") || (bodyB.name == "sweet" && bodyA.name == "killerDz")) {
		(function(bodyA, bodyB) {
			setTimeout(function() {
				var theSweet = bodyA.name == "sweet" ? bodyA : bodyB;
				//				var sweetLeft = createBallObject({
				//					position: {
				//						x: theSweet.GetPosition().x * 100 + CUT_THE_ROPE_STATIC.sweetRadius / 2,
				//						y: theSweet.GetPosition().y * 100
				//					},
				//					texture: "../assets/sweetLeft.png",
				//					width: CUT_THE_ROPE_STATIC.sweetRadius / 2,
				//					height: CUT_THE_ROPE_STATIC.sweetRadius,
				//					density: 0.5,
				//					touchFilter: {
				//						self: 0,
				//						other: 0
				//					},
				//					restitution: 0.7,
				//					scaleX: scaleXPic2Real("sweetLeft", CUT_THE_ROPE_STATIC.sweetRadius / 2),
				//					scaleY: scaleYPic2Real("sweetLeft", CUT_THE_ROPE_STATIC.sweetRadius),
				//					name: "sweetLeft"
				//				});
				//				var sweetRight = createBallObject({
				//					position: {
				//						x: theSweet.GetPosition().x * 100 - CUT_THE_ROPE_STATIC.sweetRadius / 2,
				//						y: theSweet.GetPosition().y * 100
				//					},
				//					texture: "../assets/sweetRight.png",
				//					width: CUT_THE_ROPE_STATIC.sweetRadius / 2,
				//					height: CUT_THE_ROPE_STATIC.sweetRadius,
				//					density: 0.5,
				//					touchFilter: {
				//						self: 0,
				//						other: 0
				//					},
				//					restitution: 0.7,
				//					scaleX: scaleXPic2Real("sweetRight", CUT_THE_ROPE_STATIC.sweetRadius / 2),
				//					scaleY: scaleYPic2Real("sweetRight", CUT_THE_ROPE_STATIC.sweetRadius),
				//					name: "sweetRight"
				//				});
				//				sweetLeft.SetLinearVelocity(theSweet.GetLinearVelocity());
				//				sweetRight.SetLinearVelocity(theSweet.GetLinearVelocity());
				//				sweetLeft.ApplyImpulse(vector(0.04, 0), sweetLeft.GetWorldCenter());
				//				sweetRight.ApplyImpulse(vector(-0.04, 0), sweetRight.GetWorldCenter());

				var crash1 = createBallObject({
					position: {
						x: theSweet.GetPosition().x * 100 + CUT_THE_ROPE_STATIC.sweetRadius / 2,
						y: theSweet.GetPosition().y * 100 - CUT_THE_ROPE_STATIC.sweetRadius / 2
					},
					texture: "../assets/crash1.png",
					width: CUT_THE_ROPE_STATIC.sweetRadius / 2.5,
					height: CUT_THE_ROPE_STATIC.sweetRadius / 2.5,
					density: 0.5,
					touchFilter: {
						self: 0,
						other: 0
					},
					restitution: 0.7,
					scaleX: scaleXPic2Real("crash1", CUT_THE_ROPE_STATIC.sweetRadius / 2.5),
					scaleY: scaleYPic2Real("crash1", CUT_THE_ROPE_STATIC.sweetRadius / 2.5),
					name: "sweetLeft"
				});
				var crash2 = createBallObject({
					position: {
						x: theSweet.GetPosition().x * 100 + CUT_THE_ROPE_STATIC.sweetRadius / 2,
						y: theSweet.GetPosition().y * 100 + CUT_THE_ROPE_STATIC.sweetRadius / 2
					},
					texture: "../assets/crash2.png",
					width: CUT_THE_ROPE_STATIC.sweetRadius / 2,
					height: CUT_THE_ROPE_STATIC.sweetRadius / 2,
					density: 0.5,
					touchFilter: {
						self: 0,
						other: 0
					},
					restitution: 0.7,
					scaleX: scaleXPic2Real("crash2", CUT_THE_ROPE_STATIC.sweetRadius / 2),
					scaleY: scaleYPic2Real("crash2", CUT_THE_ROPE_STATIC.sweetRadius / 2),
					name: "sweetRight"
				});
				var crash3 = createBallObject({
					position: {
						x: theSweet.GetPosition().x * 100 - CUT_THE_ROPE_STATIC.sweetRadius / 2,
						y: theSweet.GetPosition().y * 100 - CUT_THE_ROPE_STATIC.sweetRadius / 2
					},
					texture: "../assets/crash3.png",
					width: CUT_THE_ROPE_STATIC.sweetRadius / 2.5,
					height: CUT_THE_ROPE_STATIC.sweetRadius / 2.5,
					density: 0.5,
					touchFilter: {
						self: 0,
						other: 0
					},
					restitution: 0.7,
					scaleX: scaleXPic2Real("crash3", CUT_THE_ROPE_STATIC.sweetRadius / 2.5),
					scaleY: scaleYPic2Real("crash3", CUT_THE_ROPE_STATIC.sweetRadius / 2.5),
					name: "sweetLeft"
				});
				var crash4 = createBallObject({
					position: {
						x: theSweet.GetPosition().x * 100 - CUT_THE_ROPE_STATIC.sweetRadius / 2,
						y: theSweet.GetPosition().y * 100 + CUT_THE_ROPE_STATIC.sweetRadius / 2
					},
					texture: "../assets/crash4.png",
					width: CUT_THE_ROPE_STATIC.sweetRadius / 2,
					height: CUT_THE_ROPE_STATIC.sweetRadius / 2,
					density: 0.5,
					touchFilter: {
						self: 0,
						other: 0
					},
					restitution: 0.7,
					scaleX: scaleXPic2Real("crash4", CUT_THE_ROPE_STATIC.sweetRadius / 2),
					scaleY: scaleYPic2Real("crash4", CUT_THE_ROPE_STATIC.sweetRadius / 2),
					name: "sweetRight"
				});
				var crash5 = createBallObject({
					position: {
						x: theSweet.GetPosition().x * 100,
						y: theSweet.GetPosition().y * 100
					},
					texture: "../assets/crash5.png",
					width: CUT_THE_ROPE_STATIC.sweetRadius / 2.4,
					height: CUT_THE_ROPE_STATIC.sweetRadius / 2.1,
					density: 0.5,
					touchFilter: {
						self: 0,
						other: 0
					},
					restitution: 0.7,
					scaleX: scaleXPic2Real("crash5", CUT_THE_ROPE_STATIC.sweetRadius / 2.4),
					scaleY: scaleYPic2Real("crash5", CUT_THE_ROPE_STATIC.sweetRadius / 2.1),
					name: "sweetRight"
				});
				crash1.SetLinearVelocity(theSweet.GetLinearVelocity());
				crash2.SetLinearVelocity(theSweet.GetLinearVelocity());
				crash3.SetLinearVelocity(theSweet.GetLinearVelocity());
				crash4.SetLinearVelocity(theSweet.GetLinearVelocity());
				crash5.SetLinearVelocity(theSweet.GetLinearVelocity());
				crash1.ApplyImpulse(vector(MathUtil.rndRange(0, 0.025) - 0.005, -MathUtil.rndRange(0, 0.012) + 0.002), crash1.GetWorldCenter());
				crash2.ApplyImpulse(vector(MathUtil.rndRange(0, 0.025) - 0.005, MathUtil.rndRange(0, 0.012) - 0.002), crash2.GetWorldCenter());
				crash3.ApplyImpulse(vector(-MathUtil.rndRange(0, 0.025) + 0.005, -MathUtil.rndRange(0, 0.012) + 0.002), crash3.GetWorldCenter());
				crash4.ApplyImpulse(vector(-MathUtil.rndRange(0, 0.025) + 0.005, MathUtil.rndRange(0, 0.012) - 0.002), crash4.GetWorldCenter());
				crash5.ApplyImpulse(vector(MathUtil.rndRange(0, 0.02) - 0.01, MathUtil.rndRange(0, 0.02) - 0.01), crash4.GetWorldCenter());
				world.deleteObj(theSweet);
				gameResult = -1;
				for(var i = 0; i < ropes.length; i++) {
					if(ropes[i] && ropes[i].p) {
						var index = ropes[i].p.getIndex(theSweet)
						if(index) {
							ropes[i].p.remove(index);
						}
					}
				}
				try {
					ion.sound.play("sad");
				} catch(e) {}
				for(var i = 0; i < eaters.length; i++) {
					eaters[i].currentAction.gotoAndStop(0);
					world.vWorld.removeChild(eaters[i].currentAction);
					eaters[i].currentAction = eaters[i].sadAction;
					world.vWorld.addChild(eaters[i].sadAction);
					eaters[i].sadAction.gotoAndPlay(0);
				}
			}, 1)
		})(bodyA, bodyB)
	}
}
//割断绳子
function cutRope(bodyA, bodyB) {
	if((bodyA.name == "chain" && bodyB.name == "cut") || (bodyB.name == "chain" && bodyA.name == "cut")) {
		var chainBody = bodyA.name == "chain" ? bodyA : bodyB;
		var ropeId = chainBody.ropeId;
		var ropePointId = ropes[ropeId].p.getIndex(chainBody);
		try {
			ion.sound.play("cut");
		} catch(e) {}
		if(ropePointId > 0 && ropePointId < ropes[ropeId].p.length - 1) {
			if(chainBody.m_jointList && chainBody.m_jointList.joint) {
				//断开一个距离链接，将绳子拆成2段
				world.pWorld.DestroyJoint(chainBody.m_jointList.joint);
				var ropeA = {},
					ropeB = {};
				var ropePhy = ropes[ropeId].p.sperate(ropePointId);
				ropeA.p = ropePhy[0];
				ropeB.p = ropePhy[1];
				ropeA.v = new PIXI.Graphics();
				ropeB.v = new PIXI.Graphics();
				world.vWorld.addChild(ropeA.v);
				world.vWorld.addChild(ropeB.v);
				world.vWorld.removeChild(ropes[ropeId].v);
				ropes.push(ropeA);
				for(var i = 0; i < ropeA.p.length; i++) {
					ropeA.p[i].ropeId = ropes.length - 1;
				}
				ropes.push(ropeB);
				//world.pWorld.setDistanceJoint(ropeB.p[0],ropeB.p[1]);
				for(var i = 0; i < ropeB.p.length; i++) {
					ropeB.p[i].ropeId = ropes.length - 1;
					if(ropeB.p[i].name == "chain") {
						var shape = ropeB.p[i].GetFixtureList().GetShape();
						shape.SetRadius(0.0002);
						ropeB.p[i].ResetMassData();
					}
					if(i < ropeB.p.length - 1 && ropeB.p[i].m_jointList && ropeB.p[i].m_jointList.joint) {
						world.pWorld.DestroyJoint(ropeB.p[i].m_jointList.joint);
					}
				}
				for(var i = 1; i < ropeB.p.length; i++) {
					setDistanceJoint(ropeB.p[i - 1], ropeB.p[i]);
				}
				ropes[ropeId] = null;
			}
		}
	}
}
//吃掉糖果
function eatCandy() {
	for(var h = 0; h < sweets.length; h++) {
		var position1 = {
			x: 100 * sweets[h].GetPosition().x,
			y: 100 * sweets[h].GetPosition().y
		};
		for(var i = 0; i < eaters.length; i++) {
			if(eaters[i].hasEaten > 0) {
				var position2 = {
					x: 100 * eaters[i].GetPosition().x,
					y: 100 * eaters[i].GetPosition().y
				};
				var distance = MathUtil.getDistanceFromTwoPoint(position1, position2);
				if(distance < CUT_THE_ROPE_STATIC.openMouthMaxDistance && distance >= CUT_THE_ROPE_STATIC.openMouthMinDistance && (eaters[i].currentAction != eaters[i].openMouthAction)) {
					//张开嘴动画
					eaters[i].currentAction.gotoAndStop(0);
					world.vWorld.removeChild(eaters[i].currentAction);
					eaters[i].currentAction = eaters[i].openMouthAction;
					world.vWorld.addChild(eaters[i].openMouthAction);
					eaters[i].openMouthAction.gotoAndPlay(0);
					try {
						ion.sound.play("openMouth");
					} catch(e) {}
				} else if(distance < CUT_THE_ROPE_STATIC.openMouthMinDistance) {
					eaters[i].hasEaten--;
					world.deleteObj(sweets[h]);
					for(var j = 0; j < ropes.length; j++) {
						if(ropes[j]) {
							if(sweets[h] == ropes[j].p[ropes[j].p.length - 1]) {
								ropes[j].p.remove(ropes[j].p.length - 1)
							}
						}
					}
					try {
						ion.sound.play("eat");
					} catch(e) {}
					eaters[i].currentAction.gotoAndStop(0);
					world.vWorld.removeChild(eaters[i].currentAction);
					eaters[i].currentAction = eaters[i].chewAction;
					world.vWorld.addChild(eaters[i].chewAction);
					eaters[i].chewAction.gotoAndPlay(0);
					gameResult--;
				} else if(distance >= CUT_THE_ROPE_STATIC.openMouthMaxDistance && distance < CUT_THE_ROPE_STATIC.closeMouthMaxDistance && (eaters[i].currentAction != eaters[i].closeMouthAction) && (eaters[i].currentAction != eaters[i].normalAction)) {
					//bi嘴动画
					eaters[i].currentAction.gotoAndStop(0);
					world.vWorld.removeChild(eaters[i].currentAction);
					eaters[i].currentAction = eaters[i].closeMouthAction;
					world.vWorld.addChild(eaters[i].closeMouthAction);
					eaters[i].closeMouthAction.gotoAndPlay(0);
					try {
						ion.sound.play("closeMouth");
					} catch(e) {}
				} else if(distance >= CUT_THE_ROPE_STATIC.closeMouthMaxDistance && (eaters[i].currentAction != eaters[i].normalAction) && (eaters[i].currentAction != eaters[i].sadAction)) {
					world.vWorld.removeChild(eaters[i].currentAction);
					eaters[i].currentAction.gotoAndStop(0);
					eaters[i].currentAction = eaters[i].normalAction;
					world.vWorld.addChild(eaters[i].normalAction);
					eaters[i].normalAction.gotoAndPlay(0);
					try {
						ion.sound.play("normal");
					} catch(e) {}
				}
			}
		}
	}
}

function removeRope(ropeId) {

}

function sweetTouchBubble() {
	for(var h = 0; h < sweets.length; h++) {
		for(var i = 0; i < bubbles.length; i++) {
			if(!bubbles[i]) {
				continue;
			}
			var position = {
				x: 100 * sweets[h].GetPosition().x,
				y: 100 * sweets[h].GetPosition().y
			};
			var distance = MathUtil.getDistanceFromTwoPoint(position, bubbles[i].position);
			if(distance < 30) {
				try {
					ion.sound.play("bubble");
				} catch(e) {}
				world.vWorld.removeChild(bubbles[i]);
				bubbles.remove(i);
				var pball = createInvisibileBallObject({
					position: {
						x: position.x + 0,
						y: position.y
					},
					radius: 35,
					name: "bubble",
					density: 1.2,
					touchFilter: {
						self: 0,
						other: 0
					}
				}, airBuoyan);
				//				console.log(pball)
				//				var shape=pball.GetFixtureList().GetShape();
				//				shape.SetRadius(shape.GetRadius()*10);

				setWeldJoint(sweets[h], pball);
				pball.v = {};
				pball.v.normalAction = createMovieClip({
					name: "bubble",
					movieLength: 14,
					speed: 0.2,
					position: {
						x: position.x,
						y: position.y
					},
				});
				pball.v.popAction = createMovieClip({
					name: "bubblepop",
					movieLength: 12,
					speed: 0.5,
					position: {
						x: position.x,
						y: position.y
					},
				});
				pball.v.popAction.loop = false;
				world.vWorld.addChild(pball.v.normalAction);
				pball.v.normalAction.gotoAndPlay(0);
				bubbleArray.push(pball);
			}
		}
	}
}

function sweetTouchStar() {
	for(var h = 0; h < sweets.length; h++) {
		for(var i = 0; i < stars.length; i++) {
			var position = {
				x: 100 * sweets[h].GetPosition().x,
				y: 100 * sweets[h].GetPosition().y
			};
			var distance = MathUtil.getDistanceFromTwoPoint(position, stars[i].position);
			if(distance < (CUT_THE_ROPE_STATIC.starRadius + CUT_THE_ROPE_STATIC.sweetRadius) / 2) {
				world.vWorld.removeChild(stars[i]);
				world.vWorld.removeChild(stars[i].light);

				world.vWorld.addChild(stars[i].disappear);
				stars[i].disappear.gotoAndPlay(0);
				stars.remove(i);
				starsGet++;
				try {
					ion.sound.play("star_" + (3 - stars.length));
				} catch(e) {}
			}
		}
	}
}
//把绳子画出来，不再是一个个点
function drawLineRope() {
	for(var i = 0; i < ropes.length; i++) {
		if(ropes[i] && ropes[i].p[0]) {
			ropes[i].v.clear();
			ropes[i].v.lineStyle(1.5, 0x333333, 0.7);
			ropes[i].v.moveTo(ropes[i].p[0].GetPosition().x * 100, ropes[i].p[0].GetPosition().y * 100);
			if(ropes[i].p.length <= 2) {
				for(var j = 1; j < ropes[i].p.length; j++) {
					ropes[i].v.lineTo(ropes[i].p[j].GetPosition().x * 100, ropes[i].p[j].GetPosition().y * 100);
				}
			}else{
				var arr=[];
				for(var j = 0; j < ropes[i].p.length; j++) {
					arr.push(ropes[i].p[j].GetPosition().x * 100);
					arr.push(ropes[i].p[j].GetPosition().y * 100);
					//ropes[i].v.bezierCurveTo(ropes[i].p[j-2].GetPosition().x * 100, ropes[i].p[j-2].GetPosition().y * 100,ropes[i].p[j-1].GetPosition().x * 100, ropes[i].p[j-1].GetPosition().y * 100,ropes[i].p[j].GetPosition().x * 100, ropes[i].p[j].GetPosition().y * 100);
				}
				var splinePoints = getCurvePoints(arr, 0.5, 4);
				for(var j = 0; j < splinePoints.length; j+=2) {
					ropes[i].v.lineTo(splinePoints[j], splinePoints[j+1]);
				}
			}
			
			ropes[i].v.endFill();
		}
	}
}

var sweet = {},
	stars = [],
	ropes = [],
	sweets = [],
	bubbles = [],
	eaters = [];

document.addEventListener("mouseup", function(event) {
	if(inLevel) {
		cutBody = world.deleteObj(cutBody);
	}
}, true);
document.addEventListener("touchend", function(event) {
	if(inLevel) {
		cutBody = world.deleteObj(cutBody);
	}
}, true);

var cutBody = null;

function checkCutBubble(posi) {
	for(var i = 0; i < bubbleArray.length; i++) {
		var distance = MathUtil.getDistanceFromTwoPoint(posi, bubbleArray[i].v.normalAction.position);
		if(distance < 30) {
			try {
				ion.sound.play("bubble_break");
			} catch(e) {}
			world.vWorld.removeChild(bubbleArray[i].v.normalAction);
			bubbleArray[i].v.normalAction.gotoAndStop(0);
			bubbleArray[i].v.popAction.position.x = bubbleArray[i].v.normalAction.position.x;
			bubbleArray[i].v.popAction.position.y = bubbleArray[i].v.normalAction.position.y;
			world.vWorld.addChild(bubbleArray[i].v.popAction);
			bubbleArray[i].v.popAction.gotoAndPlay(0);
			world.deleteObj(bubbleArray[i]);
			bubbleArray.remove(i);
			return true;
		}
	}
	return false;
}
document.addEventListener("mousedown", function(event) {
	createCutKnife(event);
}, true);

document.addEventListener("touchstart", function(event) {
	event = event.changedTouches[0];
	createCutKnife(event);
}, true);

function createCutKnife(event) {
	var flag = checkCutBubble({
		x: event.clientX,
		y: event.clientY
	});
	if(flag) {
		return
	}
	if(!cutBody && inLevel) {
		cutBody = createBallObject({
			position: {
				x: event.clientX,
				y: event.clientY
			},
			radius: engine_static.worldWidth * 0.03,
			density: 1,
			touchFilter: {
				self: 8,
				other: 16
			},
			isDragable: true,
			restitution: 0.1,
			name: "cut"
		})
	}
}
//创建星星
function createStars(arr) {
	var stars = [];
	for(var i = 0; i < arr.length; i++) {
		stars[i] = createMovieClip({
			name: "star",
			movieLength: 18,
			speed: 0.4,
			position: {
				x: arr[i].x,
				y: arr[i].y
			},
			scale: scaleXPic2Real("obj_star_idle", CUT_THE_ROPE_STATIC.starRadius, "starLight.png")
		});
		stars[i].light = createMagicBall({
			position: {
				x: arr[i].x,
				y: arr[i].y
			},
			texture: "starLight.png",
			radius: CUT_THE_ROPE_STATIC.starRadius,
			scaleX: 1,
			scaleY: 1,
			name: "starLight",
		});
		stars[i].disappear = createMovieClip({
			name: "starDisappear",
			movieLength: 12,
			speed: 0.65,
			position: {
				x: arr[i].x,
				y: arr[i].y
			},
			scale: scaleXPic2Real("star_disappear", CUT_THE_ROPE_STATIC.starDisappearScale, "starDisappear0.png")
		});
		stars[i].disappear.loop = false;
		world.vWorld.addChild(stars[i]);

		stars[i].gotoAndPlay(MathUtil.rndIntRange(0, 18));
	}
	return stars;
}

function createDZ(p) {
	return createBallObject({
		position: {
			x: p.x,
			y: p.y
		},
		texture: "../assets/fix.png",
		radius: 1,
		height: 1,
		isStatic: true,
		touchFilter: {
			self: 0,
			other: 0
		},
		scaleX: scaleXPic2Real("fix", engine_static.worldWidth * 0.03),
		scaleY: scaleYPic2Real("fix", engine_static.worldWidth * 0.03),
	})
}

function createSweet(p) {
	return createBallObject({
		position: {
			x: p.x,
			y: p.y
		},
		texture: "../assets/sweet.png",
		radius: CUT_THE_ROPE_STATIC.sweetRadius,
		density: 0.5,
		touchFilter: {
			self: 1,
			other: 1
		},
		restitution: 0.7,
		scaleX: scaleXPic2Real("sweet", CUT_THE_ROPE_STATIC.sweetRadius),
		scaleY: scaleYPic2Real("sweet", CUT_THE_ROPE_STATIC.sweetRadius),
		name: "sweet"
	})
}

function createChair(x, y) {
	createMagicBox({
		texture: "../assets/chair.png",
		scaleX: scaleXPic2Real("chair", engine_static.worldWidth * 0.18),
		scaleY: scaleYPic2Real("chair", engine_static.worldWidth * 0.18),
		position: {
			x: x,
			y: engine_static.worldHeight * 0.01 + y
		},
		width: engine_static.worldWidth * 0.18,
		height: engine_static.worldWidth * 0.18
	});
}

function createBubble(x, y) {
	return createMagicBall({
		position: {
			x: x,
			y: y
		},
		radius: CUT_THE_ROPE_STATIC.bubbleRadius,
		texture: "../assets/bubble.png",
		scaleX: scaleXPic2Real("bubble", CUT_THE_ROPE_STATIC.bubbleRadius),
		scaleY: scaleYPic2Real("bubble", CUT_THE_ROPE_STATIC.bubbleRadius),
		name: "bubble"
	});
}

function createEaters(arr) {
	var eaters = [];
	for(var i = 0; i < arr.length; i++) {
		createChair(arr[i].x, arr[i].y)
		eaters[i] = createBallObject({
			position: {
				x: arr[i].x,
				y: arr[i].y
			},
			texture: "../assets/null.png",
			radius: 37.5,
			density: 0.5,
			isStatic: true,
			touchFilter: {
				self: 2,
				other: 3
			},
			isDragable: false,
			restitution: 0.3,
			name: "eater"
		}, arr[i].container);
		eaters[i].hasEaten = arr[i].hasEaten;
		eaters[i].normalAction = createMovieClip({
			name: "normal",
			movieLength: 19,
			speed: 0.3,
			position: {
				x: arr[i].x,
				y: arr[i].y
			},
			scale: scaleXPic2Real("char_animations", CUT_THE_ROPE_STATIC.eaterRadius, "normal0.png")
		});
		world.vWorld.addChild(eaters[i].normalAction);
		eaters[i].normalAction.gotoAndPlay(0);
		eaters[i].currentAction = eaters[i].normalAction;
		eaters[i].openMouthAction = createMovieClip({
			name: "openMouth",
			movieLength: 4,
			speed: 0.5,
			position: {
				x: arr[i].x,
				y: arr[i].y
			},
			scale: scaleXPic2Real("char_animations", CUT_THE_ROPE_STATIC.eaterRadius, "normal0.png")
		});
		eaters[i].openMouthAction.loop = false;
		eaters[i].closeMouthAction = createMovieClip({
			name: "closeMouth",
			movieLength: 4,
			speed: 0.5,
			position: {
				x: arr[i].x,
				y: arr[i].y
			},
			scale: scaleXPic2Real("char_animations", CUT_THE_ROPE_STATIC.eaterRadius, "normal0.png")
		});
		eaters[i].closeMouthAction.loop = false;
		eaters[i].sadAction = createMovieClip({
			name: "sad",
			movieLength: 14,
			speed: 0.5,
			position: {
				x: arr[i].x,
				y: arr[i].y
			},
			scale: scaleXPic2Real("char_animations", CUT_THE_ROPE_STATIC.eaterRadius, "normal0.png")
		});
		eaters[i].sadAction.loop = false;
		eaters[i].chewAction = createMovieClip({
			name: "chew",
			movieLength: 42,
			speed: 0.28,
			position: {
				x: arr[i].x,
				y: arr[i].y
			},
			scale: scaleXPic2Real("char_animations", CUT_THE_ROPE_STATIC.eaterRadius, "normal0.png")
		});
		eaters[i].chewAction.loop = false;
	}
	return eaters
}