// This is where we store all of our leap motion functions


// used to get the position using the interaction box
function getLeapPosition(frame, leapPos, z){

	/* 
	 * Interaction box will scale to wherever the uses interactions are and will contain the interaction
	 * inside a box so we can convert the positions easier
	 */

	var iBox = frame.interactionBox,
	 	top = iBox.center[1] + iBox.size[1]/2,
  		left = iBox.center[0] - iBox.size[0]/2,
  		position = {};

  	position.x = leapPos[0] - left,
  	position.y = leapPos[1] - top;


	//position.x /= iBox.size[0];
  	//position.y /= iBox.size[1];

  	//position.x *= appVars.width;
  	//position.y *= appVars.height;

  	// invert y
  	//position.y = -position.y;

  	position.z = z;
  	return position;
}