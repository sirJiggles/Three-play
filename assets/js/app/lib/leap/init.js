
$(window).load(function(){
	
	var controller = new Leap.Controller({ enableGestures: true });
	var utils = new LeapUtils();

	controller.on('connect', function(){
		// on connect...
	});


	controller.on( 'animationFrame' , function( frame ) {

		//utils.fingerInteraction(frame);
		utils.palmInteraction(frame);
		//utils.gestureInteraction(frame);

  	});


	// start the leap motion!!!! :D
	controller.connect();
	
})