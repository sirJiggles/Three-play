
/* Generic system loggin function */
function logging(msg, data, lvl){
	console.log('There was a system error: '+msg);
	console.log('Data that fired the error: ');
	console.log(data);
	console.log('Lvl of error message: '+lvl);
}


function flameOn(){

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
	var blackFlames = new ParticleSystem(params);
	blackFlames.initSystem();

}


// used for logging performance
function setupStats(){

	appVars.stats.setMode(0); // 0: fps, 1: ms

	// Align top-left
	appVars.stats.domElement.style.position = 'absolute';
	appVars.stats.domElement.style.left = '0px';
	appVars.stats.domElement.style.top = '0px';

	document.body.appendChild( appVars.stats.domElement );
}