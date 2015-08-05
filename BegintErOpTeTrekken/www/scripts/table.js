(function () {
	"use strict";
	Snooker.Table = {
		LENGTH: Snooker.Cloth.LENGTH + 0.2,
		WIDTH: Snooker.Cloth.WIDTH + 0.2,
		create: function (scene) {
			var table = BABYLON.Mesh.CreateGround('table', this.WIDTH, this.LENGTH, 2, scene);
			var woodMaterial = new BABYLON.StandardMaterial('woodMaterial', scene);
			var woodTexture = new BABYLON.WoodProceduralTexture('woodTexture', 1024, scene);
			woodMaterial.diffuseTexture = woodTexture;
			woodTexture.woodColor = new BABYLON.Color3(0xBB / 0xFF, 0x55 / 0xFF, 0);
			//woodTexture.ampScale = new BABYLON.Vector2(0.1, 0.1);
			table.material = woodMaterial;
			table.position.y = -0.01;
		}
	};
})();