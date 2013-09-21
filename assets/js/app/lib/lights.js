// Class for all the lihgt utils
function LightUtils(){

}

LightUtils.prototype.addPointLight = function(color, x, y, z) {
	var light = new THREE.PointLight(color);
	
	// set its position
	light.position.x = x;
	light.position.y = y;
	light.position.z = z;

	// add to the scene
	appVars.scene.add(light);

	return light;
};