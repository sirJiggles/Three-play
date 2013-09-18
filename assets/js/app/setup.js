
// add the camera to the scene
appVars.scene.add(appVars.camera);

// the camera starts at 0,0,0
// so pull it back
appVars.camera.position.z = 300;

// start the renderer
appVars.renderer.setSize(appVars.width, appVars.height);

// attach the render-supplied DOM element
appVars.container.append(appVars.renderer.domElement);