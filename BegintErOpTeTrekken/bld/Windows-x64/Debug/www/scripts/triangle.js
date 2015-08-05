(function () {
	"use strict";
	Snooker.Triangle = {
		create: function (scene) {
			var row = 0, balls = 5;
			while (balls > 0) {
				for (var i = 0; i < balls; i++) {
					var ball = Snooker.Ball.create(new BABYLON.Color3(1, 0, 0), scene);
					ball.position.x = row * (Snooker.Ball.DIAMETER * 0.5) + (i * Snooker.Ball.DIAMETER) - (2 * Snooker.Ball.DIAMETER);
					ball.position.z = ((row - 5) * Snooker.Ball.DIAMETER) - (Snooker.Cloth.LENGTH / 4);
				}
				row++;
				balls--;
			}
		}
	};
})();