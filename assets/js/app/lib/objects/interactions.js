// Class for object interactions
Core.prototype.ObjectInteraction = function(namespace){
	this.namespace = namespace;
}

Core.prototype.ObjectInteraction.prototype.setPosition = function(index, position) {
	
	var objects = core.objects[this.namespace];

	if ( typeof(objects[index]) == 'undefined'){
		core.logging('could not get position of object requested to change position of', core.objects[this.namespace], 'Fatal');
		return;
	}

	objects[index].visible = true;
	objects[index].position.x = position[0];
	objects[index].position.y = position[1] - (core.height / 4);
	objects[index].position.z = position[2];

	core.objects[this.namespace] = objects;

};

Core.prototype.ObjectInteraction.prototype.hideFromScene = function(index) {

	var objects = core.objects[this.namespace];

	if(index == 'all'){
		for(var i = 1; i < objects.length; i ++){
			objects[i].visible = false;
		}
	}else{

		if(typeof(objects[index]) !== 'undefined'){
			objects[index].visible = false;
		}else{
			core.logging('Could not find object to remove at requested inex', 'index requested: '+index+', object namespace: '+this.namespace, 'Fatal');
			return;
		}
	}

	core.objects[this.namespace] = objects;
};
