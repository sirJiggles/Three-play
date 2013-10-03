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


	// add all the particles 
	for(var i = 0; i < this.amount; i++) {

		var particle = new core.Particle(this.params);

      	/*particle.acceleration = new THREE.Vector3(
      		this.getRandom(0, this.speed),
      		this.getRandom(0, this.speed),
      		this.getRandom(0, this.speed)
  		);*/
		this.particles.vertices.push(particle);

	}

	// create the particle system
	var particleSystem = new THREE.ParticleSystem(this.particles, this.pMat);

	particleSystem.sortParticles = true;

	// add to the scene and out global obj array 
	core.scene.add(particleSystem);

	this.particleSystem = particleSystem;

	// remove the axis we do not want to deviate on from the axis array
	switch(this.direction){
		case 'x':
			delete this.axises[0];
			break;
		case 'y':
			delete this.axises[1];
			break;
		case 'z':
			delete this.axises[2];
			break;
	}

	// add the particle system to the array of possible particle systems
	core.particlesystems[this.namespace] = this;
}

core.ParticleSystem.prototype.updateParticles = function() {
	
	var pCount = this.amount;

  	while(pCount--) {

		// get the particle
		var particle = this.particles.vertices[pCount];

		// if we are at the end of the stream, reset the particle to the start
		if( particle[this.direction] > this.rangeParams[this.direction] -2){

			// reset to start
			particle[this.direction] = 0;
			
			// the velocity is what we will use to detect the particles direction during its life time
			particle.velocity = new THREE.Vector3(
					this.getRandom(1, -1), 
					this.getRandom(1, -1), 
					this.getRandom(1, -1));

			// set the axisis we are not moving in a direction to have an inital starting position
			for(var j = 0; j < this.axises.length; j ++){
				particle[this.axises[j]] = this.getRandom(0, this.rangeParams.initialRad);
			}

		}else{
			particle[this.direction] ++;

			// detect, using the deviation the value the probability of moving up or down / in or out
			if(this.getRandom(1, 0) < this.probability){
				// stay on track
			}
			else{
				for(var j = 0; j < this.axises.length; j ++){
					if(particle.velocity[this.axises[j]] > 0){
						particle[this.axises[j]] += Math.random() * this.multiplier
					}else{
						particle[this.axises[j]] -= Math.random() * this.multiplier
					}
				}
				
			}
			
		}

	}

	this.particleSystem.geometry.__dirtyVertices = true;
};

core.ParticleSystem.prototype.getRandom = function(from, to){
	return Math.random() * (from - to) + to; 
}