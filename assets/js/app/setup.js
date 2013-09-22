// load the models first as this will take a while
var fileutils = new fileUtils();
fileutils.loadModel('/assets/models/x-wing.dae', 0.3, 0, 'plane');


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
var lightUtils = new LightUtils();
lightUtils.addPointLight(0xFFFFFF, 10, 50, 130);


flameOn();

// settup the stats plugin (for performance checking)
setupStats();
appVars.stats.begin();

function start(){

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

		appVars.stats.update();

		//threexSparks && threexSparks.update();

		appVars.particlesystems['black-flames'].updateParticles();

		// rotate the particle system
		//appVars.particlesystems['black-flames'].rotation.y += 0.01;
		//moveParticles('black-flames');

		// FIXME this should be INSIDE webgl renderer... bug
		//appVars.renderer.context.depthMask( true );

		appVars.renderer.render(appVars.scene, appVars.camera);
		//appVars.stats.end();
	})();

}


