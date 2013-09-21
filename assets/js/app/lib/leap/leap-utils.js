// Leap utils class
function LeapUtils(){


}

LeapUtils.prototype.fingerInteraction = function(frame){

	var interaction = new ObjectInteraction('globes');

	interaction.hideFromScene('all');

	for (var i = 0; i < frame.pointables.length; i++) {
		interaction.setPosition(i + 1, frame.pointables[i].tipPosition);
	}

}

LeapUtils.prototype.palmInteraction = function(frame){

	var interaction = new ModelInteraction('plane');

	interaction.hideFromScene();

	for (var i = 0; i < frame.hands.length; i ++){
		interaction.setPosition(frame.hands[i].palmPosition);
		interaction.setRotation(frame.hands[i].palmNormal);
	}
}

LeapUtils.prototype.gestureInteraction = function(frame){
	// handle gestures 
	for( var i =  0; i < frame.gestures.length; i++){

	  	switch( frame.gestures[0].type ){

		    case "circle":
		     
		      break;
		      
		    case "swipe":
		      
		      break;

		    case "screenTap":
		      
		      break;

		    case "keyTap":
		    	console.log(gesture);
		      break;

	  	}
	}
}