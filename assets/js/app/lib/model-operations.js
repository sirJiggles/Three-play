// All of our model operations

/*
 * function to set the position of a model on the scene
 * @param string name (used to ref the model from the appvars array)
 * @param array position (the new position on the stage [x, y, z])
 */ 
function setModelPosition(name, position){
	var model = appVars.models[name];
	
	if (typeof(model) === 'undefined'){
		logging('could not get position of model requested to change position of: ', name, 'Fatal');
		return;
	}

	model.visible = true;
	model.position.x = position[0];
	model.position.y = position[1] - (appVars.height / 4);
	model.position.z = position[2];

	appVars.models[name] = model;
}

function setModelRotation(name, palmNormal){
	var model = appVars.models[name];

	if (typeof(model) === 'undefined'){
		logging('could not get roation of model requested to change rotation of: ', name, 'Fatal');
		return;
	}

	//model.rotation.y = palmNormal[0];
	//model.rotation.y += palmNormal[0];
	//model.rotation.x += palmNormal[1];

	appVars.models[name] = model;

}

/*
 * function to remove a model from the scene (hide it rather)
 * @param string name (name of the model in the appvars object)
 */
function hideFromSceneModel(name){

	var model = appVars.models[name];

	if( typeof(model) !== 'undefined'){
		model.visible = false;
		appVars.models[name] = model;
	}
}