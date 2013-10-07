// this is where we manage particles

core.ParticleSystem = function(params){

	// attempt to merge all the params in here
	this.particles 		= new THREE.Geometry();
	this.namespace 		= (params.namespace) ? params.namespace : 'none';
	this.amount 		= (params.amount) ? params.amount : '300';
	this.rangeParams 	= (params.rangeParams) ? params.rangeParams : {x:50,y:50,z:50};
	this.particleSystem = null;
	this.pMat = new THREE.ParticleBasicMaterial({
    	color: 		(params.color) ? params.color : '0x000000',
    	size: 		(params.size) ? params.size : 20,
    	map: 		THREE.ImageUtils.loadTexture(params.texture),
		blending: 	THREE.AdditiveBlending,
    	transparent:true
  	});
  	this.probability 	= (params.probability) ? params.probability : 0.2;
  	this.multiplier 	= (params.multiplier) ? params.multiplier : 0.4;
  	this.direction 		= (params.direction) ? params.direction : 'y';
  	this.axises 		= ['x', 'y', 'z'];
  	this.speed 			= (params.speed) ? params.speed : 20;
  	this.params 		= params;

}


core.ParticleSystem.prototype.initSystem = function() {

	// create the particle system
	var particleSystem = new THREE.ParticleSystem(this.particles, this.pMat);

	particleSystem.sortParticles = true;

	// add to the scene and out global obj array 
	core.scene.add(particleSystem);

	this.particleSystem = particleSystem;

	// add the particle system to the array of possible particle systems
	core.particlesystems[this.namespace] = this;
}


// function to apply a force to the particle system (this trickles down to a particles location)
core.ParticleSystem.prototype.applyForce = function(force) {

	var pCount = this.particles.vertices.length;

	// loop through particles and add force
  	while(pCount--) {
  		var particle = this.particles.vertices[pCount];
  		particle.applyForce(force);
	}

};


// the draw function for the particle system
core.ParticleSystem.prototype.draw = function(){

	var gravity = new THREE.Vector3(0,0.5,0);
	this.applyForce(gravity);

	this.addParticle();
	this.run();

	this.particleSystem.geometry.__dirtyVertices = true;

}

// function to add a particle to the particle system
core.ParticleSystem.prototype.addParticle = function() {

	var particle = new core.Particle();
	this.particles.vertices.push(particle);

};


// this will run while we have particles in the system
core.ParticleSystem.prototype.run = function() {
	
	var pCount = this.particles.vertices.length;

	// loop through particles and add force
  	while(pCount--) {
  		var particle = this.particles.vertices[pCount];
  		if(particle.lifespan < 0.0){
			this.particles.vertices.splice(this.particles.vertices.indexOf(particle),1);
  		}else{
  			particle.run();
  		}
	}

};

