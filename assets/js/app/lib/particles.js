// this is where we manage particles

function createParticleSystem(amount, color, size, rangeFrom, rangeTo, namespace){

	var counter    = new SPARKS.SteadyCounter( amount );
	var emitter   = new SPARKS.Emitter( counter );

	// set up the vars
	var particles = new THREE.Geometry(),
    	pMaterial = new THREE.ParticleBasicMaterial({
        	color: color,
        	size: size
      	});

	// now create the individual particles
	for(var i = 0; i < amount; i++) {

	  // create a particle with random
	  var pX = Math.random() * rangeFrom - rangeTo,
	      pY = Math.random() * rangeFrom - rangeTo,
	      pZ = Math.random() * rangeFrom - rangeTo,
	      particle = new THREE.Vector3(pX, pY, pZ);

      // set volocity for particle
      particle.velocity = new THREE.Vector3(0,-Math.random(), 0);

      particles.vertices.push(particle);

	}

	// create the particle system
	var particleSystem = new THREE.ParticleSystem(particles, pMaterial);

	particleSystem.sortParticles = true;


	appVars.scene.add(particleSystem);
	appVars.particlesystems[namespace] = particleSystem;

}

function moveParticles(namespace){
	

	var pCount = appVars.particlesystems[namespace].geometry.vertices.length;

  	while(pCount--) {

		// get the particle
		var particle = particles.vertices[pCount];

		// check if we need to reset
		if(particle.position.y < -200) {
			particle.position.y = 200;
		  	particle.velocity.y = 0;
		}
		// update the velocity with
		// a splat of randomniz
		particle.velocity.y -= Math.random() * .1;

		// and the position
		particle.position.addSelf(particle.velocity);
	}

	// flag to the particle system
	// that we've changed its vertices.
	particleSystem.geometry.__dirtyVertices = true;

}

