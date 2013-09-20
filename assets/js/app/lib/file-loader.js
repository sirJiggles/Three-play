
/*
 * Generic utils function for loading models from files
 * @param string filename (file path and name to lookup)
 * @param int scale (size of the model)
 * @param string name (used for ref in appVars)
 */

function loadModel(file, scale, rotation, name){

	var loader = new THREE.ColladaLoader();

	var dae;

	loader.options.convertUpAxis = true;

	loader.load( file, function (collada) {

   		dae = collada.scene;

		dae.scale.x = dae.scale.y = dae.scale.z = scale;

		dae.rotation.y = rotation * (Math.PI/ 180);
		
		appVars.models[name] = dae;
		appVars.scene.add(dae);

	});
}