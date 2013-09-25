/*
 * This is the core class all clases come of this class, this is where global objects and so on are stored
 * all classes inherit the core
 */
function Core(){

	// These are the global vars that are acceable from every class
	this.width				= $(window).width();
	this.height 			= $(window).height();
	this.viewAngle			= 45;
	this.near				= 0.1;
	this.far				= 10000;
	this.container			= $('#three');
	this.renderer			= new THREE.WebGLRenderer();
	this.camera				= null;
	this.scene 				= new THREE.Scene();
	this.objects 			= {};
	this.models 			= new Array();
	this.particlesystems 	= new Array();
	this.stats 				= new Stats();
	this.threexSparks 		= null;

	this.aspect = this.width / this.height;

	this.camera = new THREE.PerspectiveCamera(	
		this.viewAngle,
	    this.aspect,
	    this.near,
	   	this.far
	);

}

/*
 * Logging function
 * @param string msg
 * @param mixed data
 * @param string lvl
 */
Core.prototype.logging = function(msg, data, lvl) {
	console.log('There was a system error: '+msg);
	console.log('Data that fired the error: ');
	console.log(data);
	console.log('Lvl of error message: '+lvl);
};

Core.prototype.flameOn = function() {

	// create an object that will hold all the params about our particle system 
	// we want to create
	var params = {
		amount:600,
		color:0xFFFFFF,
		size:1,
		flux:100000,
		rangeParams:{
			x:100,
			y:20,
			z:30,
			initialRad:20
		},
		startPosition: new THREE.Vector3(0, 0, 0),
		namespace:'black-flames'
	}
	// use this object to setup our particle system
	//createParticleSystem(blackFlames);

	// create a new particle system
	var blackFlames = new core.ParticleSystem(params);
	blackFlames.initSystem();
};

/* set up the stats */
Core.prototype.setupStats = function(){
	this.stats.setMode(0); // 0: fps, 1: ms

	// Align top-left
	this.stats.domElement.style.position = 'absolute';
	this.stats.domElement.style.left = '0px';
	this.stats.domElement.style.top = '0px';

	document.body.appendChild( this.stats.domElement );
}


/*
 * init function for the core,
 * this will pull things together and start the render loop
 */
Core.prototype.init = function(){

	// load the models first as this will take a while
	var fileutils = new this.fileUtils();
	fileutils.loadModel('/assets/models/x-wing.dae', 0.3, 0, 'plane');


	// add the camera to the scene
	this.scene.add(this.camera);

	// the camera starts at 0,0,0
	// so pull it back
	this.camera.position.z = 300;

	// start the renderer
	this.renderer.setSize(this.width, this.height);

	// attach the render-supplied DOM element
	this.container.append(this.renderer.domElement);

	// create a point light
	var lightUtils = new this.LightUtils();
	lightUtils.addPointLight(0xFFFFFF, 10, 50, 130);


	this.flameOn();

	// settup the stats plugin (for performance checking)
	this.setupStats();
	this.stats.begin();

	this.startRenderer();

}

Core.prototype.startRenderer = function(){
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

		// this is now window so use core instance here
		requestAnimFrame(animloop);


		core.stats.update();

		//threexSparks && threexSparks.update();

		core.particlesystems['black-flames'].updateParticles();

		// rotate the particle system
		//appVars.particlesystems['black-flames'].rotation.y += 0.01;
		//moveParticles('black-flames');

		// FIXME this should be INSIDE webgl renderer... bug
		//appVars.renderer.context.depthMask( true );

		core.renderer.render(core.scene, core.camera);
		//appVars.stats.end();
	})();
}





