// Class for all the particles

core.Particle = function() {

	// construct the particle
	this.lifespan 		= 255,
	this.velocity 		= new THREE.Vector3(
		this.getRandom(-1, 1), 
		this.getRandom(-1, 1),
		this.getRandom(-1, 1)
	);
	//this.location 		= new THREE.Vector3(0,0,0);
	this.acceleration 	= new THREE.Vector3(0,0,0);
	this.alive			= true;
	this.mass			= 1;

	this.setX(0);
	this.setY(0);
	this.setZ(0);

}

// this is also a vector 3 (polymorphism)
core.Particle.prototype = Object.create(THREE.Vector3.prototype);

core.Particle.prototype.update = function(dt){
	// let the force flow down the system

	this.velocity.add(this.acceleration);

	this.setX(this.velocity.x);
	this.setY(this.velocity.y);
	this.setZ(this.velocity.z);


	// reset acceleration
	this.acceleration.multiplyScalar(0);
	this.lifespan -= 2.0;
}

// run function for the particle
core.Particle.prototype.run = function(){
	this.update();
	//this.display();
}

// this is where we apply any forces to the particle which in turn drives the acceleration
core.Particle.prototype.applyForce = function(force) {
	//force.divide(this.mass);
	this.acceleration.add(force);
};

// utils funciton to get a random number
core.Particle.prototype.getRandom = function(from, to){
	return Math.random() * (from - to) + to; 
}