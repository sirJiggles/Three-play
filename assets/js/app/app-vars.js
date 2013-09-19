
// Create our app vars here
var appVars = {
	width: $(window).width(),
	height:$(window).height(),
	viewAngle:45,
	near: 0.1,
	far:1000,
	container: $('#three'),
	renderer: new THREE.WebGLRenderer(),
	camera: null,
	scene: new THREE.Scene(),
	objects: {}
};

appVars.aspect = appVars.width / appVars.height;

appVars.camera = new THREE.PerspectiveCamera(	
	appVars.viewAngle,
    appVars.aspect,
    appVars.near,
   	appVars.far
);

