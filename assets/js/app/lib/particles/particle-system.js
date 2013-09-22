// this is where we manage particles

function ParticleSystem(params){

	this.particles 		= new THREE.Geometry();
	this.namespace 		= params.namespace;
	this.amount 		= params.amount;
	this.rangeParams 	= params.rangeParams;
	this.particleSystem = null;
	this.pMat = new THREE.ParticleBasicMaterial({
    	color: params.color,
    	size: params.size
  	});
  	this.flux = params.flux;

}

ParticleSystem.prototype.initSystem = function() {

	// add all the particles 
	for(var i = 0; i < this.amount; i++) {

		var particle = new THREE.Vector3(
			Math.random() * this.rangeParams.x - 0, 
			Math.random() * this.rangeParams.initialRad - (-Math.abs(this.rangeParams.initialRad)), 
			Math.random() * this.rangeParams.initialRad - (-Math.abs(this.rangeParams.initialRad))
		);
      	particle.velocity = new THREE.Vector3(Math.random()*i, Math.random()*i,0);
		this.particles.vertices.push(particle);
	}

	// create the particle system
	var particleSystem = new THREE.ParticleSystem(this.particles, this.pMat);

	particleSystem.sortParticles = true;

	// add to the scene and out global obj array 
	appVars.scene.add(particleSystem);

	this.particleSystem = particleSystem;

	// add the particle system to the array of possible particle systems
	appVars.particlesystems[this.namespace] = this;
}

ParticleSystem.prototype.updateParticles = function() {
	
	var pCount = this.amount;

  	while(pCount--) {

		// get the particle
		var particle = this.particles.vertices[pCount];

		if( particle.x > this.rangeParams.x){
			// are at the end
			particle.x = 0;
			particle.y = this.rangeParams.initialRad - (-Math.abs(this.rangeParams.initialRad))
			// give x a new random speed and accellaration

		}else{
			particle.x ++;

			//fan out
			if(pCount % 4 === 1){
				particle.y += Math.random() * .1;
			}
			if(pCount % 6 === 1){
				particle.y -= Math.random() * .1;
			}
			
		}

		


		/*	
		if( particle.z > this.rangeParams.zMax){
			particle.z = 0;
		}else{
			// (always come at me bro)
			particle.z ++;
		}*/

		// update the velocity with
		// a splat of randomniz
		particle.velocity.x -= Math.random() * .1;

	}

	this.particleSystem.geometry.__dirtyVertices = true;
};

/*


function createParticleSystem(systemParams){

	//var counter    = new SPARKS.SteadyCounter( amount );
	//var emitter   = new SPARKS.Emitter( counter );

	// set up the vars
	var particles = new THREE.Geometry(),
    	pMaterial = new THREE.ParticleBasicMaterial({
        	color: systemParams.color,
        	size: systemParams.size
      	});

	// now create the individual particles
	for(var i = 0; i < systemParams.amount; i++) {

	  // create a particle with random positioning within the constraints passed


      // set volocity for particle
      //particle = systemParams.startPosition;
      particle = new THREE.Vector3(Math.random()*.1, Math.random()*.1, Math.random()*.1);
      particle.velocity = new THREE.Vector3(-Math.random(),-Math.random(), -Math.random());
      particles.vertices.push(particle);
	}

	

}

function moveParticles(namespace){
	

	// get data we will need from the particle system in the global vars
	var particlesInSystem = appVars.particlesystems[namespace].system.geometry.vertices.length,
		particles = appVars.particlesystems[namespace].system.geometry,
		params = appVars.particlesystems[namespace].params;


  	while(particlesInSystem--) {

		// get the particle
		var particle = particles.vertices[particlesInSystem];

		if( particle.x > params.rangeParams.xMax || particle.x < params.rangeParams.xMin){
			particle.x = 0;
		}else{
			if(particlesInSystem % 2 == 1){
				particle.x ++;
			}else{
				particle.x --;
			}
		}

		if( particle.y > params.rangeParams.yMax || particle.y < params.rangeParams.yMin){
			particle.y = 0;
		}else{
			if(particlesInSystem % 2 == 1){
				particle.y ++;
			}else{
				particle.y --;
			}
		}


		if( particle.z > params.rangeParams.zMax){
			particle.z = 0;
		}else{
			// (always come at me bro)
			particle.z ++;
		}

		// update the velocity with
		// a splat of randomniz
		//particle.velocity.y -= Math.random() * .1;

	}

	// update the actual particles after we have worked on the copy
	appVars.particlesystems[namespace].system.geometry = particles;


	// flag to the particle system that we've changed its vertices.
	appVars.particlesystems[namespace].system.geometry__dirtyVertices = true;

}

*/