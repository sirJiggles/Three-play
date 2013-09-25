// Particle class (based on https://github.com/stemkoski/stemkoski.github.com/blob/master/Three.js/js/ParticleEngine.js)

Core.prototype.Particle = function(params) {
	this.position     = new THREE.Vector3(Math.random()*.5, Math.random()*.5, Math.random()*.5);
	this.velocity     = new THREE.Vector3(-Math.random(),-Math.random(), -Math.random());
	this.acceleration = new THREE.Vector3();

	this.angle             = 0;
	this.angleVelocity     = 0; // degrees per second
	this.angleAcceleration = 0; // degrees per second, per second

	this.size = params.size;

	this.color   = params.color;
	this.opacity = 1.0;

	this.age   = 0;
	this.alive = 0; 
}

Core.prototype.Particle.prototype.update = function(dt){

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