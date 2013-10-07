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
								//blending: 	THREE.AdditiveBlending,
						    	transparent:true
							});

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
  		this.particles.vertices[pCount].applyForce(force);;	
	}

};


// the draw function for the particle system
core.ParticleSystem.prototype.draw = function(){

	//var gravity = new THREE.Vector3(0,0.1,0);
	//this.applyForce(gravity);

	this.addParticle();
	this.run();
}

// function to add a particle to the particle system
core.ParticleSystem.prototype.addParticle = function() {

	var particle = new core.Particle();
	console.log(particle.x);
	console.log(particle.y);
	console.log(particle.z);
	this.particles.vertices.push(particle);

	this.particleSystem.geometry.__dirtyVertices = true;
	//core.scene.add(this.particleSystem);

};


// this will run while we have particles in the system
core.ParticleSystem.prototype.run = function() {
	
	var pCount = this.particles.vertices.length;

	// loop through particles and add force
  	while(pCount--) {
  		if(this.particles.vertices[pCount].lifespan < 0.0){
			this.particles.vertices.splice(pCount,1);
  		}else{
  			this.particles.vertices[pCount].run();
  		}
	}

};

