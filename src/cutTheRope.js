function doSpecialAction() {
	sweetTouchStar();
	drawLineRope();
	eatCandy();
	lostSweet();
}

function doContactBegin(bodyA, bodyB) {
	cutRope(bodyA, bodyB);
	//eatCandy(bodyA, bodyB)
}

function doContactEnd(bodyA, bodyB) {
	//cutRope(bodyA, bodyB);
	//eatCandy(bodyA, bodyB)
}

//糖果掉落没有被吃掉
var gameResult = false; //是否游戏胜利或失败
function lostSweet() {
	if(!gameResult) {
		for(var h = 0; h < sweets.length; h++) {
			var position1 = {
				x: 100 * sweets[h].GetPosition().x,
				y: 100 * sweets[h].GetPosition().y
			};
			if(position1.y > engine_static.worldHeight + 200) {
				gameResult = true;
				ion.sound.play("sad")
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
	//	if((bodyA.name == "eater" && bodyB.name == "sweet") || (bodyB.name == "eater" && bodyA.name == "sweet")) {
	//		var sweetBody = bodyA.name == "sweet" ? bodyA : bodyB;
	//		world.deleteObj(sweetBody);
	//		ion.sound.play("eat");
	//	}
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
				if(distance < 50) {
					eaters[i].hasEaten--;
					world.deleteObj(sweets[h]);
					for(var j = 0; j < ropes.length; j++) {
						if(ropes[j]) {
							if(sweets[i] == ropes[j].p[ropes[j].p.length - 1]) {
								ropes[j].p.remove(ropes[j].p.length - 1)
							}
						}
					}
					ion.sound.play("eat");
				}
			}
		}
	}
}

function removeRope(ropeId) {

}

function sweetTouchStar() {
	for(var h = 0; h < sweets.length; h++) {
		for(var i = 0; i < stars.length; i++) {
			var position = {
				x: 100 * sweets[h].GetPosition().x,
				y: 100 * sweets[h].GetPosition().y
			};
			var distance = MathUtil.getDistanceFromTwoPoint(position, stars[i].position);
			if(distance < 45) {
				world.vWorld.removeChild(stars[i]);
				stars.remove(i);
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
	eaters = [];

document.addEventListener("mouseup", function(event) {
	cutBody = world.deleteObj(cutBody);
}, true);
document.addEventListener("touchend", function(event) {
	cutBody = world.deleteObj(cutBody);
}, true);

var cutBody = null;
document.addEventListener("mousedown", function(event) {
	if(!cutBody) {
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
	if(!cutBody) {
		cutBody = createBallObject({
			position: {
				x: event.clientX,
				y: event.clientY
			},
			//texture: "assets/eater.png",
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