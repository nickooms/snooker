(function () {
	"use strict";
	Snooker.Balls = {
		create: function (scene) {
			Snooker.Triangle.create(scene);
			var blue = Snooker.Ball.create(new BABYLON.Color3(0, 0, 1), scene);
			var pink = Snooker.Ball.create(new BABYLON.Color3(1, 0xCC / 0xFF, 0xE5 / 0xFF), scene);
			pink.position.z = -Snooker.Cloth.LENGTH / 4;
			var brown = Snooker.Ball.create(new BABYLON.Color3(0xFF / 0xFF, 0x66 / 0xFF, 0), scene);
			brown.position.z = Snooker.BAULK_LINE;
			var yellow = Snooker.Ball.create(new BABYLON.Color3(1, 1, 0), scene);
			yellow.position.z = Snooker.BAULK_LINE;
			yellow.position.x = -Snooker.D_RADIUS;
			var green = Snooker.Ball.create(new BABYLON.Color3(0, 0x66 / 0xFF, 0), scene);
			green.position.z = Snooker.BAULK_LINE;
			green.position.x = Snooker.D_RADIUS;
			var black = Snooker.Ball.create(new BABYLON.Color3(0, 0, 0), scene);
			black.position.z = (-Snooker.Cloth.LENGTH / 4) * 1.70;
			var white = Snooker.Ball.create(new BABYLON.Color3(1, 1, 1), scene);
			white.position.z = Snooker.BAULK_LINE * 1.1;
			white.position.x = Snooker.D_RADIUS / 2;
		}
	}
})();