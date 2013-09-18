
// Create our app vars here
var appVars = {
	width: 400,
	height:300,
	viewAngle:45,
	near: 0.1,
	far:1000,
	container: $('#three'),
	renderer: new THREE.WebGLRenderer(),
	camera: null,
	scene: new THREE.Scene()
};

appVars.aspect = appVars.width / appVars.height;

appVars.camera = new THREE.PerspectiveCamera(	
	appVars.viewAngle,
    appVars.aspect,
    appVars.near,
   	appVars.far
);

// this is where we will stor all objects in the scene
var objects = {

}
