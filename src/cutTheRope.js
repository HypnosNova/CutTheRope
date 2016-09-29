function doSpecialAction() {
	sweetTouchStar();
	drawLineRope();
}

function doContactBegin(bodyA, bodyB) {
	if((bodyA.name == "chain" && bodyB.name == "cut") || (bodyB.name == "chain" && bodyA.name == "cut")) {
		var chainBody = bodyA.name == "chain" ? bodyA : bodyB;
		var ropeId = chainBody.ropeId;
		var ropePointId = ropes[ropeId].p.getIndex(chainBody);

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
					ropeA.p[i].ropeId = ropes.length-1;
				}
				ropes.push(ropeB);
				//world.pWorld.setDistanceJoint(ropeB.p[0],ropeB.p[1]);
				for(var i = 0; i < ropeB.p.length; i++) {
					ropeB.p[i].ropeId = ropes.length-1;
				}
				ropes[ropeId] = null;
			}
		}

	}
}

function removeRope(ropeId) {

}

function sweetTouchStar() {
	for(var i = 0; i < stars.length; i++) {
		var position = {
			x: 100 * sweet.GetPosition().x,
			y: 100 * sweet.GetPosition().y
		};
		var distance = MathUtil.getDistanceFromTwoPoint(position, stars[i].position);
		if(distance < 45) {
			world.vWorld.removeChild(stars[i]);
		}
	}
}
//把绳子画出来，不再是一个个点
function drawLineRope() {
	for(var i = 0; i < ropes.length; i++) {
		if(ropes[i]) {			
			ropes[i].v.clear();
			ropes[i].v.lineStyle(2, 0x000000, 0.7);
			ropes[i].v.beginFill(0x000000, 0);
			ropes[i].v.moveTo(ropes[i].p[0].GetPosition().x * 100, ropes[i].p[0].GetPosition().y * 100);
			for(var j = 1; j < ropes[i].p.length; j++) {
				ropes[i].v.lineTo(ropes[i].p[j].GetPosition().x * 100, ropes[i].p[j].GetPosition().y * 100);
			}
			for(var j = ropes[i].p.length - 2; j > 0; j--) {
				ropes[i].v.lineTo(ropes[i].p[j].GetPosition().x * 100, ropes[i].p[j].GetPosition().y * 100);
			}
			ropes[i].v.endFill();
		}
	}
}

var sweet = {},
	stars = [],
	ropes = [];

document.addEventListener("mouseup", function(event) {
	world.pWorld.DestroyBody(cutBody);
	world.vWorld.removeChild(world.vArray[world.vArray.length - 1]);
	cutBody = null;

}, true);
document.addEventListener("touchend", function(event) {
	world.pWorld.DestroyBody(cutBody);
	world.vWorld.removeChild(world.vArray[world.vArray.length - 1]);
	cutBody = null;

}, true);

var cutBody = null;
document.addEventListener("mousedown", function(event) {
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