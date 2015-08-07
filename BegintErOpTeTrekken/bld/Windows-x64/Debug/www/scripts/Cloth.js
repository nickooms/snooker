(function () {
	"use strict";
	Snooker.Cloth = {
		LENGTH: 11 * Snooker.FOOT + (8.5 * Snooker.INCH),
		WIDTH: 5 * Snooker.FOOT + (5 * Snooker.INCH),
		create: function (scene) {
			var w = this.WIDTH,
					l = this.LENGTH,
					b = Snooker.BAULK_LINE,
					d = Snooker.D_RADIUS,
					h = 0.02;
			var cloth = BABYLON.Mesh.CreateGround('cloth', w, l, 2, scene);
			var material = new BABYLON.StandardMaterial('greenCloth', scene);
			material.diffuseColor = new BABYLON.Color3(0, 1, 0);
			cloth.material = material;
			var lines = BABYLON.Mesh.CreateLines('line', [
        new BABYLON.Vector3(-w / 2, h, b),
        new BABYLON.Vector3(w/ 2, h, b),
			], scene);
			var d = BABYLON.Curve3.CreateCubicBezier(
				new BABYLON.Vector3(-d, h, b),
				new BABYLON.Vector3(-d, h, b + d),
				new BABYLON.Vector3(d, h, b + d),
				new BABYLON.Vector3(d, h, b),
			30);
			var dPoints = d.getPoints();
			var quadraticBezierCurve = BABYLON.Mesh.CreateLines("qbezier", d.getPoints(), scene);
			quadraticBezierCurve.color = new BABYLON.Color3(1, 1, 1);
		}
	};
	Snooker.BAULK_LINE = (Snooker.Cloth.LENGTH / 2) - 0.737;
	Snooker.D_RADIUS = 0.292;
})();