// Shape utils class

core.ShapeUtils = function(){}

core.ShapeUtils.prototype.addSphere = function(rad, seg, rings, mat, dynamic) {
	var sphere = new THREE.Mesh( 
		new THREE.SphereGeometry(rad, seg, rings),
		mat
	);

	if(typeof(dynamic) !== undefined && dynamic){
		sphere.overdraw = true;
	}
	
	core.scene.add(sphere);

	return sphere;
};