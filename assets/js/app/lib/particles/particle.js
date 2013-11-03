// Class for all the particles

core.Particle = function(amount, speed, index) {

	this.speed = speed;

	// construct the particle
	this.velocity 		= new THREE.Vector3(
		this.getRandom(-this.speed / 2, this.speed), 
		this.getRandom(-this.speed / 2, this.speed), 
		this.getRandom(-this.speed / 2, this.speed)
	);
	this.acceleration 	= new THREE.Vector3(0,0,0);
	this.mass			= this.getRandom(10.0, 50.0);
	if(index != 1){
		// hide of the screen
		this.set(999999999999999999, 0, 0);
	}else{
		this.set(0,0,0);
	}
	this.amount			= amount;

	// when particles are created we want to 'emit' them in the first run so the first time they are created we will
	// offset the lifespan and the position (hide them, untill all emited)
	this.lifespan = (amount - index);
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
	this.lifespan -= 1.0;

}

// reset the particle
core.Particle.prototype.reset = function() {
	this.lifespan 		= this.amount;
	this.velocity 		= new THREE.Vector3(
		this.getRandom(-this.speed / 2, this.speed), 
		this.getRandom(-this.speed / 2, this.speed), 
		this.getRandom(-this.speed / 2, this.speed)
	);
	this.acceleration.multiplyScalar(0);
	//this.mass			= 20.0;
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