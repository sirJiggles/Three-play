// used for creating shapes

function addSphere(rad, seg, rings, mat){
	
	var sphere = new THREE.Mesh( 
		new THREE.SphereGeometry(rad, seg, rings),
		mat
	);
	
	sphere.overdraw = true;
	sphere.rotation.x = Math.PI * 0.1;

	appVars.scene.add(sphere);

	return sphere;
}
