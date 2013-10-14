// this is where we manage particles

core.ParticleSystem = function(params){

	// attempt to merge all the params in here
	this.particles 		= new THREE.Geometry();
	this.namespace 		= (params.namespace) ? params.namespace : 'none';
	this.particleSystem = null;
	this.pMat 			= new THREE.ParticleBasicMaterial({
						    	color: 		(params.color) ? params.color : '0x000000',
						    	size: 		(params.size) ? params.size : 20,
						    	map: 		THREE.ImageUtils.loadTexture(params.texture),
								blending: 	THREE.AdditiveBlending,
						    	transparent:true
							});
	this.amount			= params.amount;

}


core.ParticleSystem.prototype.initSystem = function() {

	// create the particle system
	var particleSystem = new THREE.ParticleSystem(this.particles, this.pMat);

	particleSystem.sortParticles = true;

	this.particleSystem = particleSystem;

	// add to the scene and out global obj array 
	core.scene.add(this.particleSystem);

	// add the particle system to the array of possible particle systems
	core.particlesystems[this.namespace] = this;

	for(var i = 0; i < this.amount; i ++){
		// the param is the initial lifespan
		this.addParticle(this.amount, i);
	}
	
}

// the draw function for the particle system (resets particles that have expired and updates others)
core.ParticleSystem.prototype.draw = function(){

	var pCount = this.particles.vertices.length;

	while(pCount--) {

		if(this.particles.vertices[pCount].lifespan < 0.0){
			this.particles.vertices[pCount].reset();
		}else{
			this.particles.vertices[pCount].update();
		}
  		
	}

}

// The raason we have this run function is so other types of particle systems can add some customlogic in here
// without having to re-create the whole draw function
core.ParticleSystem.prototype.run = function(){
	// vanilla just call draw for the base particle system
	this.draw();
}

// This is to apply forces to a particle system
core.ParticleSystem.prototype.applyForce = function(force){
	var pCount = this.particles.vertices.length;
	while(pCount--) {
		var forceCopy = new THREE.Vector3(force.x, force.y, force.z);
		this.particles.vertices[pCount].applyForce(forceCopy);
	}
}

// function to add a particle to the particle system
core.ParticleSystem.prototype.addParticle = function(amount, index) {

	var particle = new core.Particle(amount, index);
	this.particles.vertices.push(particle);
	
};
