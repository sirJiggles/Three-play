// Class for all the light utils extends core
core.LightUtils = function() {};

core.LightUtils.prototype.addPointLight = function(color, x, y, z) {
	var light = new THREE.PointLight(color);
	
	// set its position
	light.position.x = x;
	light.position.y = y;
	light.position.z = z;

	// add to the scene
	core.scene.add(light);

	return light;
};