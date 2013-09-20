// load the models first as this will take a while
loadModel('/assets/models/x-wing.dae', 0.3, 0, 'plane');


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


flameOn();


function start(){

	var stats = new Stats();
	stats.setMode(1); // 0: fps, 1: ms

	// Align top-left
	stats.domElement.style.position = 'absolute';
	stats.domElement.style.left = '0px';
	stats.domElement.style.top = '0px';

	document.body.appendChild( stats.domElement );


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

		stats.begin();

		// rotate the particle system
		//appVars.particlesystems['black-flames'].rotation.y += 0.01;
		moveParticles('black-flames');

		appVars.renderer.render(appVars.scene, appVars.camera);
		stats.end();
	})();

}


