
// function fo creating point lights
function addPointLight(color, x, y, z){
	
	var light = new THREE.PointLight(color);
	
	// set its position
	light.position.x = x;
	light.position.y = y;
	light.position.z = z;

	// add to the scene
	appVars.scene.add(light);

	return light;
}