// This is for all generic functions like render
function moveCam(direction){

	var moveAmount = 5;

	if(direction.left){
		appVars.camera.position.x  = appVars.camera.position.x - moveAmount;
		appVars.camera.position.z  = appVars.camera.position.z - moveAmount;
	}else if(direction.right){
		appVars.camera.position.x  = appVars.camera.position.x + moveAmount;
		appVars.camera.position.z  = appVars.camera.position.z + moveAmount;
	}else if(direction.down){

	}else if(direction.up){

	}else{
		// do nothing here
	}

}

function addGlobes(amount){

	var globeTexture = new THREE.MeshBasicMaterial({    
	    map: THREE.ImageUtils.loadTexture( 'assets/img/globe.jpeg', new THREE.UVMapping(), function() {

	    } )
	});

	appVars.objects.globes = new Array();

	for(var i = 1; i <= amount; i ++){
		appVars.objects.globes[i] = addSphere(10, 30, 16, globeTexture, true);
		appVars.objects.globes[i].rotation.x = Math.PI * 0.1;
	}

}

/*
 * this is a function for updating an objects position on the scene
 * the namespace is the object type the index is the index of that type we want to move
 * and the position is the new position on the scene we want 
 */
function setObjectPosition(namespace, index, position){
	var objects = appVars.objects[namespace];
	console.log(index);
	if (typeof(objects[index].position) !== undefined){

		objects[index].position.x = position.x;
		objects[index].position.y = position.y;
		objects[index].position.z = position.z;

		appVars.objects[namespace] = objects;

	}else{
		logging('could not get array index of object', appVars.objects[namespace], 'Fatal');
	}
}

/* Generic system loggin function */
function logging(msg, data, lvl){
	console.log('There was a system error: '+msg);
	console.log('Data that fired the error: ');
	console.log(data);
	console.log('Lvl of error message: '+lvl);
}
	


function start(){


	// move the cam on the controls
	//addControls(moveCam);

	var angularSpeed = 0.2; 
	var lastTime = 0;

	// shim layer with setTimeout fallback
	window.requestAnimFrame = (function(){
	  return  window.requestAnimationFrame       ||
	          window.webkitRequestAnimationFrame ||
	          window.mozRequestAnimationFrame    ||
	          function(callback){
	            window.setTimeout(callback, 1000 / 60);
	          };
	})();

	(function animloop(){
		requestAnimFrame(animloop);

		var time = (new Date()).getTime(),
			timeDiff = time - lastTime,
			angleChange = angularSpeed * timeDiff * 2 * Math.PI / 1000;

		// rotate all the globes on the anmation loop
		for(var i = 1; i <= appVars.objects.globes.length -1; i ++){
			appVars.objects.globes[i].rotation.y += angleChange;
		}

		lastTime = time;

		appVars.renderer.render(appVars.scene, appVars.camera);
	})();

}