// This is a type of particle system.. a flame so using polymorphism we will extend partile system

core.StarParticles = function(images){

	this.pMat 			= new THREE.ParticleBasicMaterial({
				    	size: 		10,
				    	map: 		THREE.ImageUtils.loadTexture('/assets/img/star.gif'),
						blending: 	THREE.AdditiveBlending,
				    	transparent:true
	});

	this.amount 		= 600;
	this.namespace 		= 'stars-one';
	this.particles 		= new THREE.Geometry();
	this.particleSystem = null;
	this.speed			= 2.5;
}

// use polymorphism so this is a fame particle system AND a paricle system
core.StarParticles.prototype = Object.create(core.ParticleSystem.prototype);

// Own custom behaviour for this partcile systems run function
core.StarParticles.prototype.run = function(){

	// have the stars being pulled toward the viewer
	var puller = new THREE.Vector3(0,0,2.5);
	this.applyForce(puller);

	// run draw (in main particle system)
	this.draw();
}

core.ParticleSystem.prototype.setPosition = function(){
	this.particleSystem.position = new THREE.Vector3(0,0,-300);
}