/* 
 * core is an object as we only need one but the functions we later add are members of the object while being proto classes
 */
var core = {

	// These are the global vars that are acceable from every class
	width			: $(window).width(),
	height 			: $(window).height(),
	viewAngle		: 45,
	near			: 0.1,
	far				: 10000,
	container		: $('#three'),
	renderer		: new THREE.WebGLRenderer(),
	camera			: null,
	scene 			: new THREE.Scene(),
	objects 		: {},
	models 			: new Array(),
	particlesystems : new Array(),
	stats 			: new Stats(),
	threexSparks 	: null,

	init : function(){

		core.aspect = core.width / core.height;

		core.camera = new THREE.PerspectiveCamera(	
			core.viewAngle,
		    core.aspect,
		    core.near,
		   	core.far
		);

		// load the models first as this will take a while
		//var fileutils = new core.fileUtils();
		//fileutils.loadModel('/assets/models/x-wing.dae', 0.3, 0, 'plane');


		// add the camera to the scene
		core.scene.add(core.camera);

		// the camera starts at 0,0,0
		// so pull it back
		core.camera.position.z = 300;

		// start the renderer
		core.renderer.setSize(core.width, core.height);

		// attach the render-supplied DOM element
		core.container.append(core.renderer.domElement);

		// create a point light
		var lightUtils = new core.LightUtils();
		lightUtils.addPointLight(0xFFFFFF, 10, 50, 130);


		core.flameOn();

		// settup the stats plugin (for performance checking)
		core.setupStats();
		core.stats.begin();

		core.startRenderer();

	},

	logging : function(msg, data, lvl) {
		console.log('There was a system error: '+msg);
		console.log('Data that fired the error: ');
		console.log(data);
		console.log('Lvl of error message: '+lvl);
	},

	flameOn : function() {

		// create an object that will hold all the params about our particle system 
		// we want to create
		var params = {
			amount:600,
			color:0xE8AF10,
			size:10,
			probability:0.3,
			direction:'y',
			speed:100,
			rangeParams:{
				x:50,
				y:20,
				z:30,
				initialRad:5
			},
			texture: '/assets/img/fire-small.png',
			namespace:'flames',
			multiplier: .5
		}
		// use this object to setup our particle system
		//createParticleSystem(blackFlames);

		// create a new particle system
		var blackFlames = new core.ParticleSystem(params);
		blackFlames.initSystem();
	}, 

	setupStats : function(){
		core.stats.setMode(0); // 0: fps, 1: ms

		// Align top-left
		core.stats.domElement.style.position = 'absolute';
		core.stats.domElement.style.left = '0px';
		core.stats.domElement.style.top = '0px';

		document.body.appendChild( core.stats.domElement );
	},

	startRenderer : function(){

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

			//core.particlesystems['flames'].updateParticles();

			// rotate the particle system
			//appVars.particlesystems['black-flames'].rotation.y += 0.01;
			//moveParticles('black-flames');

			// FIXME this should be INSIDE webgl renderer... bug
			//appVars.renderer.context.depthMask( true );

			core.renderer.render(core.scene, core.camera);
			//appVars.stats.end();
		})();
	}
}



