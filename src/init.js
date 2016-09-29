function gameLoad() {
	createWorld();
	renderObject.addStatsView();
	renderObject.addRenderView();

	//加载图片资源
	var loader = new PIXI.loaders.Loader();
	loader.add('sweet', "../assets/sweet.png");
	loader.add('box', "../assets/box.jpg");
	loader.add('ball', "../assets/ball.png");
	loader.add('eater', "../assets/eater.png");
	loader.add('circledef', "../assets/circledef.png");
	loader.add('boxdef', "../assets/boxdef.png");
	loader.add('null', "../assets/null.png");
	loader.add('star', "../assets/star.png");
	loader.add('bg', "../assets/bg.jpg");
	loader.once('complete', makeGameScene);
	loader.load();
}
gameLoad();
