

var tutorial = 'http://www.aerotwist.com/tutorials/getting-started-with-three-js/';

// create a new material
var mat = new THREE.MeshLambertMaterial({color: 0xCC0000});

var materialNew = new THREE.MeshBasicMaterial({    
    map: THREE.ImageUtils.loadTexture( 'assets/img/globe.jpeg', new THREE.UVMapping(), function() {

    } )
});

//texture.needsUpdate = true;

// create and add a spehere to the scene
objects.sphere = addSphere(50, 30, 16, materialNew);

// create a point light
var pointLight = addPointLight(0xFFFFFF, 10, 50, 130);

start();