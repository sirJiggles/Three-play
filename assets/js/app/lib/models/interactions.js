// All of our model operations

core.ModelInteraction = function(namespace){
	this.namespace = namespace;
}

/*
 * function to set the position of a model on the scene
 * @param string name (used to ref the model from the appvars array)
 * @param array position (the new position on the stage [x, y, z])
 */ 
core.ModelInteraction.prototype.setPosition = function(position) {

	var model = core.models[this.namespace];
	
	if (typeof(model) === 'undefined'){
		core.logging('could not get position of model requested to change position of: ', this.namespace, 'Fatal');
		return;
	}

	model.visible = true;
	model.position.x = position[0];
	model.position.y = position[1] - (core.height / 4);
	model.position.z = position[2];

	core.models[this.namespace] = model;

};


core.ModelInteraction.prototype.setRotation = function(palmNormal) {
	var model = core.models[this.namespace];

	if (typeof(model) === 'undefined'){
		core.logging('could not get roation of model requested to change rotation of: ', this.namespace, 'Fatal');
		return;
	}

	model.rotation.z = palmNormal[0];
	//model.rotation.x = -palmNormal[2];

	core.models[this.namespace] = model;
};

/*
 * function to remove a model from the scene (hide it rather)
 * @param string name (name of the model in the appvars object)
 */
core.ModelInteraction.prototype.hideFromScene = function() {
	var model = core.models[this.namespace];

	if( typeof(model) !== 'undefined'){
		model.visible = false;
		core.models[this.namespace] = model;
	}
};

