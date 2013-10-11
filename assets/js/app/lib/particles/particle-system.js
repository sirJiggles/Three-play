// this is where we manage particles

core.ParticleSystem = function(params){

	// attempt to merge all the params in here
	this.particles 		= new THREE.Geometry();
	this.particles.dynamic = true;
	this.namespace 		= (params.namespace) ? params.namespace : 'none';
	this.particleSystem = null;
	this.pMat 			= new THREE.ParticleBasicMaterial({
						    	color: 		(params.color) ? params.color : '0x000000',
						    	size: 		(params.size) ? params.size : 20,
						    	//map: 		THREE.ImageUtils.loadTexture(params.texture),
								//blending: 	THREE.AdditiveBlending,
						    	//transparent:true
							});

	this.iterator 		= 1;
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
	//core.particlesystems[this.namespace] = this;

	for(var i = 0; i < this.amount; i ++){
		this.addParticle();
	}
	
}


// function to apply a force to the particle system (this trickles down to a particles location)
core.ParticleSystem.prototype.applyForce = function(force) {

	var pCount = this.particleSystem.geometry.vertices.length;

	// loop through particles and add force
  	while(pCount--) {
  		this.particleSystem.geometry.vertices[pCount].applyForce(force);
	}

};


// the draw function for the particle system
core.ParticleSystem.prototype.draw = function(){

	//var gravity = new THREE.Vector3(0,0.5,0);
	//this.applyForce(gravity);

	if(this.iterator < 5){
		this.addParticle();
	}

	/*if(this.iterator == 1){
		for(i = 0; i < 200; i ++){
			this.addParticle();
		}
	}*/

	this.iterator ++;

	if(this.iterator == 100){
		//alert('done');
	}

	this.run();
}

// function to add a particle to the particle system
core.ParticleSystem.prototype.addParticle = function() {

	var particle = new core.Particle(this.iterator);

	this.particleSystem.geometry.vertices.push(particle);
	
};


// this will run while we have particles in the system
core.ParticleSystem.prototype.run = function() {
	
	var pCount = this.particleSystem.geometry.vertices.length;

	// loop through particles and add force
  	while(pCount--) {
  		if(this.particleSystem.geometry.vertices[pCount].lifespan < 0.0){
			//this.particles.vertices.splice(pCount,1);
			this.particleSystem.geometry.vertices[pCount].reset();
			
  		}else{
  			//this.particles.vertices[pCount].update();
  			this.particleSystem.geometry.vertices[pCount].update();
  			//console.log(this.particles.vertices[pCount].ref);

  		}

	}

	this.particleSystem.geometry.verticesNeedUpdate = true;

	//core.particlesystems[this.namespace] = this;
	

};

