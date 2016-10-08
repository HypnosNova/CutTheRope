var inLevel = false; //是否进入游戏关卡
var starsGet = 0;

function doSpecialAction() {
	sweetTouchStar();
	drawLineRope();
	eatCandy();
	lostSweet();
	winOrLost();
	sweetTouchBubble();
}

function doContactBegin(bodyA, bodyB) {
	cutRope(bodyA, bodyB);
	//eatCandy(bodyA, bodyB)
}

function doContactEnd(bodyA, bodyB) {
	//cutRope(bodyA, bodyB);
	//eatCandy(bodyA, bodyB)
}

function winOrLost() {
	if(gameResult == 0) {
		$(".starContainer").empty();
		gameResult = -2;
		setTimeout(function() {
			coverClose();
			setTimeout(function() {
				$(".scoreContainer").show();
				ion.sound.play("win");
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
			if(position1.y > engine_static.worldHeight + 200) {
				gameResult = -1;
				ion.sound.play("sad");
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

//割断绳子
function cutRope(bodyA, bodyB) {
	if((bodyA.name == "chain" && bodyB.name == "cut") || (bodyB.name == "chain" && bodyA.name == "cut")) {
		var chainBody = bodyA.name == "chain" ? bodyA : bodyB;
		var ropeId = chainBody.ropeId;
		var ropePointId = ropes[ropeId].p.getIndex(chainBody);
		ion.sound.play("cut");
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
				if(distance < 100 && distance >= 40 && (eaters[i].currentAction != eaters[i].openMouthAction)) {
					//张开嘴动画
					eaters[i].currentAction.gotoAndStop(0);
					world.vWorld.removeChild(eaters[i].currentAction);
					eaters[i].currentAction = eaters[i].openMouthAction;
					world.vWorld.addChild(eaters[i].openMouthAction);
					eaters[i].openMouthAction.gotoAndPlay(0);
					ion.sound.play("openMouth");
				} else if(distance < 40) {
					eaters[i].hasEaten--;
					world.deleteObj(sweets[h]);
					for(var j = 0; j < ropes.length; j++) {
						if(ropes[j]) {
							if(sweets[h] == ropes[j].p[ropes[j].p.length - 1]) {
								ropes[j].p.remove(ropes[j].p.length - 1)
							}
						}
					}
					ion.sound.play("eat");
					eaters[i].currentAction.gotoAndStop(0);
					world.vWorld.removeChild(eaters[i].currentAction);
					eaters[i].currentAction = eaters[i].chewAction;
					world.vWorld.addChild(eaters[i].chewAction);
					eaters[i].chewAction.gotoAndPlay(0);
					gameResult--;
				} else if(distance >= 100 && distance < 120 && (eaters[i].currentAction != eaters[i].closeMouthAction) && (eaters[i].currentAction != eaters[i].normalAction)) {
					//bi嘴动画
					eaters[i].currentAction.gotoAndStop(0);
					world.vWorld.removeChild(eaters[i].currentAction);
					eaters[i].currentAction = eaters[i].closeMouthAction;
					world.vWorld.addChild(eaters[i].closeMouthAction);
					eaters[i].closeMouthAction.gotoAndPlay(0);
					ion.sound.play("closeMouth");
				} else if(distance >= 120 && (eaters[i].currentAction != eaters[i].normalAction) && (eaters[i].currentAction != eaters[i].sadAction)) {
					world.vWorld.removeChild(eaters[i].currentAction);
					eaters[i].currentAction.gotoAndStop(0);
					eaters[i].currentAction = eaters[i].normalAction;
					world.vWorld.addChild(eaters[i].normalAction);
					eaters[i].normalAction.gotoAndPlay(0);
					ion.sound.play("normal");
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
			var position = {
				x: 100 * sweets[h].GetPosition().x,
				y: 100 * sweets[h].GetPosition().y
			};
			var distance = MathUtil.getDistanceFromTwoPoint(position, bubbles[i].position);
			if(distance < 25) {
				world.vWorld.removeChild(bubbles[i]);
				bubbles.remove(i);
				var pball = createBallObject({
					position: {
						x: position.x + 0,
						y: position.y
					},
					texture: "../assets/bubble.png",
					radius: 70,
					name: "bubble",
					density: 1.5,
					touchFilter: {
						self: 0,
						other: 0
					}
				}, airBuoyan);
				setWeldJoint(sweets[h], pball);
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
			if(distance < 40) {
				world.vWorld.removeChild(stars[i]);
				world.vWorld.removeChild(stars[i].light);

				world.vWorld.addChild(stars[i].disappear);
				stars[i].disappear.gotoAndPlay(0);
				stars.remove(i);
				starsGet++;
				ion.sound.play("star_" + (3 - stars.length));
			}
		}
	}
}
//把绳子画出来，不再是一个个点
function drawLineRope() {
	for(var i = 0; i < ropes.length; i++) {
		if(ropes[i] && ropes[i].p[0]) {
			ropes[i].v.clear();
			ropes[i].v.lineStyle(2, 0x000000, 0.7);
			ropes[i].v.moveTo(ropes[i].p[0].GetPosition().x * 100, ropes[i].p[0].GetPosition().y * 100);
			for(var j = 1; j < ropes[i].p.length; j++) {
				ropes[i].v.lineTo(ropes[i].p[j].GetPosition().x * 100, ropes[i].p[j].GetPosition().y * 100);
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
document.addEventListener("mousedown", function(event) {
	if(!cutBody && inLevel) {
		cutBody = createBallObject({
			position: {
				x: event.clientX,
				y: event.clientY
			},
			radius: 8,
			density: 1,
			touchFilter: {
				self: 8,
				other: 16
			},
			isDragable: true,
			restitution: 0.3,
			name: "cut"
		})
	}
}, true);

document.addEventListener("touchstart", function(event) {
	event = event.changedTouches[0];
	if(!cutBody && inLevel) {
		cutBody = createBallObject({
			position: {
				x: event.clientX,
				y: event.clientY
			},
			radius: 8,
			density: 1,
			touchFilter: {
				self: 8,
				other: 16
			},
			isDragable: true,
			restitution: 0.3,
			name: "cut"
		})
	}
}, true);

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
		});
		stars[i].light = createMagicBall({
			position: {
				x: arr[i].x,
				y: arr[i].y
			},
			texture: "starLight.png",
			radius: 90,
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
		}
	})
}

function createEaters(arr) {
	var eaters = [];
	for(var i = 0; i < arr.length; i++) {
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
		});
		eaters[i].chewAction.loop = false;

	}
	return eaters
}