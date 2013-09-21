// Class for object interactions
function ObjectInteraction(namespace){
	this.namespace = namespace;
}

ObjectInteraction.prototype.setPosition = function(index, position) {
	
	var objects = appVars.objects[this.namespace];

	if ( typeof(objects[index]) == 'undefined'){
		logging('could not get position of object requested to change position of', appVars.objects[this.namespace], 'Fatal');
		return;
	}

	objects[index].visible = true;
	objects[index].position.x = position[0];
	objects[index].position.y = position[1] - (appVars.height / 4);
	objects[index].position.z = position[2];

	appVars.objects[this.namespace] = objects;

};

ObjectInteraction.prototype.hideFromScene = function(index) {

	var objects = appVars.objects[this.namespace];

	if(index == 'all'){
		for(var i = 1; i < objects.length; i ++){
			objects[i].visible = false;
		}
	}else{

		if(typeof(objects[index]) !== 'undefined'){
			objects[index].visible = false;
		}else{
			logging('Could not find object to remove at requested inex', 'index requested: '+index+', object namespace: '+this.namespace, 'Fatal');
			return;
		}
	}

	appVars.objects[this.namespace] = objects;
};
