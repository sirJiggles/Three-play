
/*
 * Main javascript file
 * 
 * require any libraries using juicer
 * 
 * @depends vendor/jquery-1.8.2.min.js
 * @depends vendor/three.js
 * @depends vendor/collada-loader.js
 * @depends vendor/leap-motion.js
 * @depends vendor/tween.js
 * @depends vendor/sparks.js
 * @depends vendor/stats.js
 * @depends app/app-vars.js

 // Start including libs
 * @depends app/lib/functions.js
 * @depends app/lib/objects/shapes.js
 * @depends app/lib/objects/interactions.js
 * @depends app/lib/models/file-loader.js
 * @depends app/lib/models/interactions.js
 * @depends app/lib/leap/leap-utils.js
 * @depends app/lib/leap/init.js
 * @depends app/lib/particles/particle.js
 * @depends app/lib/particles/particle-system.js
 * @depends app/lib/lights.js
 * @depends app/setup.js
 */



$(window).load(function () {

	// Of we go then ...
    start();

});

// using dat gui
//https://code.google.com/p/dat-gui/
