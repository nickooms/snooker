(function () {
	"use strict";
	Snooker.Ball = {
		DIAMETER: Snooker.INCH * (2 + 1 / 16),
		create: function (color, scene) {
			var ball = BABYLON.Mesh.CreateSphere('sphere1', 16, this.DIAMETER, scene);
			var material = new BABYLON.StandardMaterial('redBall', scene);
			material.diffuseColor = color;
			ball.material = material;
			ball.position.y = this.DIAMETER / 2;
			return ball;
		}
	};
})();