(function () {
	"use strict";
	document.addEventListener('deviceready', onDeviceReady.bind(this), false);
	function onDeviceReady() {
		//document.getElementById('drawer-panel').closeDrawer();
		document.addEventListener('pause', onPause.bind(this), false);
		document.addEventListener('resume', onResume.bind(this), false);
		var canvas = document.getElementById('renderCanvas');
		var engine = new BABYLON.Engine(canvas, true);
		var scene = createScene(engine, canvas);
		engine.runRenderLoop(function () {
			scene.render();
		});
		window.addEventListener('resize', function () {
			engine.resize();
		});
	};
	function createScene(engine, canvas) {
		var scene = new BABYLON.Scene(engine);
		var camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 2.5, 2.5), scene);
		camera.setTarget(BABYLON.Vector3.Zero());
		camera.attachControl(canvas, true);
		var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), scene);
		light.intensity = 0.7;
		Snooker.Cloth.create(scene);
		Snooker.Table.create(scene);
		Snooker.Balls.create(scene);
		return scene;
	};
	function onPause() {
		// TODO: This application has been suspended. Save application state here.
	};
	function onResume() {
		// TODO: This application has been reactivated. Restore application state here.
	};
})();