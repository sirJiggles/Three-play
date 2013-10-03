// Class for all the particles

core.Particle = function(params) {

	// construct the particle
	this.age 		= 0,
	this.position 	= new THREE.Vector3(
		this.getRandom(0, params.rangeParams.x), 
		this.getRandom(0, params.rangeParams.y), 
		this.getRandom(0, params.rangeParams.z)
	);
	this.velocity 	= new THREE.Vector3(0,0,0);
	this.acceleration = new THREE.Vector3(0,0,0);
	this.alive		= true;

}

core.Particle.prototype.update = function(dt){

	this.position.add( this.velocity.clone().multiplyScalar(dt) );
	this.velocity.add( this.acceleration.clone().multiplyScalar(dt) );

	// convert from degrees to radians: 0.01745329251 = Math.PI/180
	this.angle         += this.angleVelocity     * 0.01745329251 * dt;
	this.angleVelocity += this.angleAcceleration * 0.01745329251 * dt;

	this.age += dt;

	// if the tween for a given attribute is nonempty,
	//  then use it to update the attribute's value

	if ( this.sizeTween.times.length > 0 )
		this.size = this.sizeTween.lerp( this.age );

	if ( this.colorTween.times.length > 0 )
	{
		var colorHSL = this.colorTween.lerp( this.age );
		this.color = new THREE.Color().setHSL( colorHSL.x, colorHSL.y, colorHSL.z );
	}

	if ( this.opacityTween.times.length > 0 )
		this.opacity = this.opacityTween.lerp( this.age );
}