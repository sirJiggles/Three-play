loadModel('assets/models/x-wing.dae', 0.3, 'x-wing');

// add the camera to the scene
appVars.scene.add(appVars.camera);

// the camera starts at 0,0,0
// so pull it back
appVars.camera.position.z = 300;

// start the renderer
appVars.renderer.setSize(appVars.width, appVars.height);

// attach the render-supplied DOM element
appVars.container.append(appVars.renderer.domElement);

// create a point light
addPointLight(0xFFFFFF, 10, 50, 130);

// add ten globes to the scene for the fingers and palms
addGlobes(12);
