// This is where we store all of our leap motion functions


function fingerInteraction(frame){
	// clear the globes from the scene
	hideFromSceneObject('globes', 'all');

	for (var i = 0; i < frame.pointables.length; i++) {
		setObjectPosition('globes', i + 1, frame.pointables[i].tipPosition);
	}
}

function palmInteraction(frame){

	hideFromSceneModel('plane');

	for (var i = 0; i < frame.hands.length; i ++){
		setModelPosition('plane', frame.hands[i].palmPosition);
		setModelRotation('plane', frame.hands[i].palmNormal);
	}

}

function gestureInteraction(frame){
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
		    	//console.log(gesture.leap.convert(gesture.position));
		      	//simulateClick(gesture.position);
		      break;

	  	}
	}
}