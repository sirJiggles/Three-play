
/*
 * Main javascript file
 * 
 * require any libraries using juicer
 * 
 * @depends vendor/jquery-1.8.2.min.js
 * @depends vendor/three.js
 * @depends vendor/collada-loader.js
 * @depends vendor/leap-motion.js
 * @depends vendor/stats.js

 // Start including libs
 * @depends app/lib/core.js
 * @depends app/lib/objects/shapes.js
 * @depends app/lib/objects/interactions.js
 * @depends app/lib/models/file-loader.js
 * @depends app/lib/models/interactions.js
 * @depends app/lib/leap/leap-utils.js
 * @depends app/lib/leap/init.js
 * @depends app/lib/particles/particle.js
 * @depends app/lib/particles/particle-system.js
 * @depends app/lib/lights.js
 */

// Create a new instance of the core, all clases are members of core and all core props are global to the whole system
var core = new Core();
core.init();


// using dat gui
//https://code.google.com/p/dat-gui/
