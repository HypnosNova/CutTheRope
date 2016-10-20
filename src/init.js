var loader,gameResource;
function gameLoad() {
	createWorld();
	//renderObject.addStatsView();
	renderObject.addRenderView();
	//加载资源
	loader = new PIXI.loaders.Loader();
	loader.add('sweet', "../assets/sweet.png");
	loader.add('sweetLeft', "../assets/sweetLeft.png");
	loader.add('sweetRight', "../assets/sweetRight.png");
	loader.add('crash1', "../assets/crash1.png");
	loader.add('crash2', "../assets/crash2.png");
	loader.add('crash3', "../assets/crash3.png");
	loader.add('crash4', "../assets/crash4.png");
	loader.add('crash5', "../assets/crash5.png");
	loader.add('box', "../assets/box.jpg");
	loader.add('ball', "../assets/ball.png");
	loader.add('eater', "../assets/eater.png");
	loader.add('circledef', "../assets/circledef.png");
	loader.add('boxdef', "../assets/boxdef.png");
	loader.add('null', "../assets/null.png");
	loader.add('star', "../assets/star.png");
	loader.add('pump', "../assets/movieClip/pump.json");
	loader.add('fix', "../assets/fix.png");
	loader.add('bg', "../assets/bg.jpg");
	loader.add('pauseBtn', "../assets/pauseBtn.png");
	loader.add('restartBtn', "../assets/restartBtn.png");
	loader.add('mainbg', "../assets/mainbg.jpg");
	loader.add('chair', "../assets/chair.png");
	loader.add('bubble', "../assets/bubble.png");
	loader.add('killerDz', "../assets/killerDz.png");
	loader.add('wood', "../assets/wood.png");
	loader.add('squarewood', "../assets/squarewood.png");
	loader.add('bubble2', "../assets/movieClip/bubble_animations.json");
	loader.add('bubblepop', "../assets/movieClip/bubble_pop.json");
	loader.add('startBtn', "../assets/startBtn.png");
	loader.add('startBtn2', "../assets/startBtn2.png");
	loader.add('stickBar', "../assets/stickBar.png");
	loader.add('coverCard', "../assets/coverCard.jpg");
	loader.add('levelSelect', "../assets/levelSelect.jpg");
	loader.add('obj_star_idle', "../assets/movieClip/star_animations.json");
	loader.add('star_disappear', "../assets/movieClip/star_disappear.json");
	loader.add('char_animations', "../assets/movieClip/char_animations.json");
	loader.add('char_animations3', "../assets/movieClip/char_animations3.json");
	loader.once('complete', makeGameScene);
	loader.load();
	
}
gameLoad();
