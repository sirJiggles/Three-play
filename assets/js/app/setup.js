// load the models first as this will take a while
loadModel('/assets/models/x-wing.dae', 0.3, 'plane', setupPlane);


// add the camera to the scene
appVars.scene.add(appVars.camera);

// the camera starts at 0,0,0
// so pull it back
appVars.camera.position.z = 300;

// start the renderer
appVars.renderer.setSize(appVars.width, appVars.height);

// attach the render-supplied DOM element
appVars.container.append(appVars.renderer.domElement);

// create a point light
addPointLight(0xFFFFFF, 10, 50, 130);

// add ten globes to the scene for the fingers and palms
//addGlobes(12);

function setupPlane(){
	// set the position of the plane
	appVars.models['plane'].rotation.y -= 4.6;
}


function start(){

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

		/*var time = (new Date()).getTime(),
			timeDiff = time - lastTime,
			angleChange = angularSpeed * timeDiff * 2 * Math.PI / 1000;

		// rotate all the globes on the anmation loop
		for(var i = 1; i <= appVars.objects.globes.length -1; i ++){
			appVars.objects.globes[i].rotation.y += angleChange;
		}

		//appVars.models[0].rotation.y += angleChange;

		lastTime = time;
*/
		appVars.renderer.render(appVars.scene, appVars.camera);
	})();

}


