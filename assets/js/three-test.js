

var tutorial = 'http://www.aerotwist.com/tutorials/getting-started-with-three-js/';

// create a new material
var mat = new THREE.MeshLambertMaterial({color: 0xCC0000});

// create and add a spehere to the scene
objects.sphere = addSphere(50, 16, 16, mat);

// create a point light
var pointLight = addPointLight(0xFFFFFF, 10, 50, 130);

start();