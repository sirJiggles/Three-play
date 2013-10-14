// This is a type of particle system.. a flame so using polymorphism we will extend partile system

core.FlameParticles = function(){

	this.pMat 			= new THREE.ParticleBasicMaterial({
						color: 		'0xE8AF10',
				    	size: 		20,
				    	//map: 		THREE.ImageUtils.loadTexture('/assets/img/fire-small.png'),
						//blending: 	THREE.AdditiveBlending,
				    	//transparent:true
	});

	this.amount 		= 300;
	this.namespace 		= 'flames';
	this.particles 		= new THREE.Geometry();
	this.particleSystem = null;
}

// use polymorphism so this is a fame particle system AND a paricle system
core.FlameParticles.prototype = Object.create(core.ParticleSystem.prototype);

// Own custom behaviour for this partcile systems run function
core.FlameParticles.prototype.run = function(){

	//var gravity = new THREE.Vector3(0,0.5,0);
	//this.applyForce(gravity);


	// run draw (in main particle system)
	this.draw();
}