
$(window).load(function(){
	
	var controller = new Leap.Controller({ enableGestures: true });
	var utils = new LeapUtils();

	controller.on('connect', function(){
		// on connect...
	});

	/*
	 * This is the core function for the leap controller here we detect whats going on and act on it
	 */
	controller.on( 'animationFrame' , function( frame ) {

		//utils.fingerInteraction(frame);
		utils.palmInteraction(frame);
		//utils.gestureInteraction(frame);

  	});


	// start the leap motion!!!! :D
	controller.connect();

})