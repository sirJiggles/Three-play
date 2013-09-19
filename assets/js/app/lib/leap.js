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

		// clear the globes from the scene
		hideFromScene('globes', 'all');


	 	for (var i = 0; i < frame.pointables.length; i++) {
			setObjectPosition('globes', i + 1, frame.pointables[i].tipPosition);
		}

		for (var i = 0; i < frame.hands.length; i ++){
			setModelPosition('x-wing', frame.hands[i].palmPosition);
		}


		// handle gestures 
		for( var i =  0; i < frame.gestures.length; i++){
	    	var gesture  = frame.gestures[0];

		    var type = gesture.type;
          
		  	switch( type ){

			    case "circle":
			     
			      break;
			      
			    case "swipe":
			      
			      break;

			    case "screenTap":
			      
			      break;

			    case "keyTap":
			    	console.log(gesture);
			    	//console.log(gesture.leap.convert(gesture.position));
			      	//simulateClick(gesture.position);
			      break;

		  	}
		}
  	});


	// start the leap motion!!!! :D
	controller.connect();

})