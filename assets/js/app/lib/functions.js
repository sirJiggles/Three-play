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



function start(){


	// move the cam on the controls
	addControls(moveCam);

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

		objects.sphere.rotation.y += angleChange;

		lastTime = time;

		appVars.renderer.render(appVars.scene, appVars.camera);
	})();

}