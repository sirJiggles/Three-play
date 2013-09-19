// all of the object operations

/*
 * this is a function for updating an objects position on the scene
 * the namespace is the object type the index is the index of that type we want to move
 * and the position is the new position on the scene we want 
 */
function setObjectPosition(namespace, index, position){
	var objects = appVars.objects[namespace];

	if ( typeof(objects[index]) == 'undefined'){
		logging('could not get position of object requested to change position of', appVars.objects[namespace], 'Fatal');
		return;
	}

	objects[index].visible = true;
	objects[index].position.x = position[0];
	objects[index].position.y = position[1] - (appVars.height / 4);
	objects[index].position.z = position[2];

	appVars.objects[namespace] = objects;
}

// hide objects from the three scene
function hideFromSceneObject(namespace, index){

	var objects = appVars.objects[namespace];

	if(index == 'all'){
		for(var i = 1; i < objects.length; i ++){
			objects[i].visible = false;
		}
	}else{

		if(typeof(objects[index]) !== 'undefined'){
			objects[index].visible = false;
		}else{
			logging('Could not find object to remove at requested inex', 'index requested: '+index+', object namespace: '+namespace, 'Fatal');
			return;
		}
	}

	appVars.objects[namespace] = objects;
}