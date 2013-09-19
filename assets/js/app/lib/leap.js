// All leap motion code in here for now

$(window).ready(function(){
	
	/*var canvas = document.getElementById('leap'),
		c = canvas.getContext('2d'),
		controller = new Leap.Controller();
	*/

	var controller = new Leap.Controller();


	controller.on('connect', function(){

		
	});

	/*
	 * This is the core function for the leap controller here we detect whats going on and act on it
	 */
	controller.on( 'animationFrame' , function( frame ) {

		// for every hand picked up
		var fingNum = 1;
		for( var i = 0; i < frame.hands.length; i++ ){

			var hand = frame.hands[i];

			if(hand.palmPosition){
				var palmPos = getLeapPosition(frame, hand.palmPosition, 100);
				setObjectPosition('globes', fingNum, palmPos);
				fingNum ++;
			}
			
			// for every finger on that hand
			for( var j = 0; j < hand.fingers.length; j++ ){

			  	var finger = hand.fingers[j];

			  	if(finger.tipPosition){
			  		var fingerPos = getLeapPosition(frame, finger.tipPosition, 30);
			  		setObjectPosition('globes', fingNum, fingerPos);
			  		fingNum ++;
		  		}

			}
		}
    
  	});


	// start the leap motion!!!! :D
	controller.connect();

})