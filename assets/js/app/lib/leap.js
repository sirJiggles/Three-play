// All leap motion code in here for now

$(window).ready(function(){
	
	var controller = new Leap.Controller({ enableGestures: true });

	//controller.enable_gesture(Leap.Gesture.Type.KeyTapGesture);

	controller.on('connect', function(){

		
	});

	/*
	 * This is the core function for the leap controller here we detect whats going on and act on it
	 */
	controller.on( 'animationFrame' , function( frame ) {

		//fingerInteraction(frame);
		palmInteraction(frame);
		//gestureInteraction(frame);

  	});


	// start the leap motion!!!! :D
	controller.connect();

})