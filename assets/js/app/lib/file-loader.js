

function loadModel(file, scale, name){

	var loader = new THREE.ColladaLoader();

	var dae;

	loader.options.convertUpAxis = true;

	loader.load( file, function (collada) {

   		dae = collada.scene;

		dae.scale.x = dae.scale.y = dae.scale.z = scale;

		dae.	.set( 2, 2, 2 ); 

		appVars.models[name] = dae;

		appVars.scene.add(dae);
	});
}