// This is for all generic functions like render

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

		var time = (new Date()).getTime(),
			timeDiff = time - lastTime,
			angleChange = angularSpeed * timeDiff * 2 * Math.PI / 1000;

		objects.sphere.rotation.y += angleChange;

		lastTime = time;

		appVars.renderer.render(appVars.scene, appVars.camera);
	})();

}