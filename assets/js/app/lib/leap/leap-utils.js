// Leap utils class
Core.prototype.LeapUtils = function(){}

Core.prototype.LeapUtils.prototype.fingerInteraction = function(frame){

	var interaction = new core.ObjectInteraction('globes');

	interaction.hideFromScene('all');

	for (var i = 0; i < frame.pointables.length; i++) {
		interaction.setPosition(i + 1, frame.pointables[i].tipPosition);
	}

}

Core.prototype.LeapUtils.prototype.palmInteraction = function(frame){

	var interaction = new core.ModelInteraction('plane');

	interaction.hideFromScene();

	for (var i = 0; i < frame.hands.length; i ++){
		interaction.setPosition(frame.hands[i].palmPosition);
		interaction.setRotation(frame.hands[i].palmNormal);
	}
}

Core.prototype.LeapUtils.prototype.gestureInteraction = function(frame){
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