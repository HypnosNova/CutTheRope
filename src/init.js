function gameLoad() {
	createWorld();
	renderObject.addStatsView();
	renderObject.addRenderView();

	//加载资源
	var loader = new PIXI.loaders.Loader();
	loader.add('sweet', "../assets/sweet.png");
	loader.add('box', "../assets/box.jpg");
	loader.add('ball', "../assets/ball.png");
	loader.add('eater', "../assets/eater.png");
	loader.add('circledef', "../assets/circledef.png");
	loader.add('boxdef', "../assets/boxdef.png");
	loader.add('null', "../assets/null.png");
	loader.add('star', "../assets/star.png");
	loader.add('fix', "../assets/fix.png");
	loader.add('bg', "../assets/bg.jpg");
	loader.add('chair', "../assets/chair.png");
	loader.add('obj_star_idle', "../assets/movieClip/star_animations.json");
	loader.add('char_animations', "../assets/movieClip/char_animations.json");
	loader.add('char_animations3', "../assets/movieClip/char_animations3.json");
	//loader.add('crystalball', "../assets/movieClip/crystalball.json");
	//loader.add('fighter', "../assets/movieClip/fighter.json");
	loader.once('complete', makeGameScene);
	loader.load();
}
gameLoad();
