// All leap motion code in here for now

$(window).ready(function(){
	
	var controller = new Leap.Controller();

	controller.on('connect', function(){

		
	});

	/*
	 * This is the core function for the leap controller here we detect whats going on and act on it
	 */
	controller.on( 'animationFrame' , function( frame ) {

		// clear the globes from the scene
		hideFromScene('globes', 'all');

	 	for (var i = 0; i < frame.pointables.length; i++) {
			setObjectPosition('globes', i + 1, frame.pointables[i].tipPosition);
		}
  	});


	// start the leap motion!!!! :D
	controller.connect();

})