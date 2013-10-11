// Class for all the particles

core.Particle = function(id) {

	// construct the particle
	this.lifespan 		= 255;
	this.velocity 		= new THREE.Vector3(
		this.getRandom(-0.5, 0.5), 
		this.getRandom(-0.5, 0.5), 
		this.getRandom(-0.5, 0.5)
	);
	this.acceleration 	= new THREE.Vector3(0,0,0);
	this.mass			= 10.0;
	this.set(0,0,0);
	this.ref 			= id;

	//console.log('creating particle: '+this.ref);
}

// this is also a vector 3 (polymorphism)
core.Particle.prototype = Object.create(THREE.Vector3.prototype);

core.Particle.prototype.update = function(){
	// let the force flow down the system

	this.velocity.add(this.acceleration);
	this.add(this.velocity);

	// reset acceleration
	this.acceleration.multiplyScalar(0);
	// decrease the lifespan
	this.lifespan -= 2.0;

	if(this.ref == 1 || this.ref == 2){
		//console.log(this.y + ' ref: '+this.ref);
	}
}

// reset the particle
core.Particle.prototype.reset = function() {
	this.lifespan 		= 255;
	this.velocity 		= new THREE.Vector3(
		this.getRandom(-0.5, 0.5), 
		this.getRandom(-0.5, 0.5), 
		this.getRandom(-0.5, 0.5)
	);
	this.acceleration.multiplyScalar(0);
	this.mass			= 20.0;
	this.set(0,0,0);
};

// this is where we apply any forces to the particle which in turn drives the acceleration
core.Particle.prototype.applyForce = function(force) {
	force.divideScalar(this.mass);
	this.acceleration.add(force);
};

// utils funciton to get a random number
core.Particle.prototype.getRandom = function(from, to){
	return Math.random() * (from - to) + to; 
}