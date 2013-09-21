// Shape utils class

function ShapeUtils(){

}

ShapeUtils.prototype.addSphere = function(rad, seg, rings, mat, dynamic) {
	var sphere = new THREE.Mesh( 
		new THREE.SphereGeometry(rad, seg, rings),
		mat
	);

	if(typeof(dynamic) !== undefined && dynamic){
		sphere.overdraw = true;
	}
	
	appVars.scene.add(sphere);

	return sphere;
};