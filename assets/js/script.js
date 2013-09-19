
/*
 * Main javascript file
 * 
 * require any libraries using juicer
 * 
 * @depends vendor/jquery-1.8.2.min.js
 * @depends vendor/three.js
 * @depends vendor/collada-loader.js
 * @depends vendor/leap-motion.js
 * @depends app/app-vars.js
 * @depends app/lib/shape.js
 * @depends app/lib/lights.js
 * @depends app/lib/functions.js
 * @depends app/lib/controls.js
 * @depends app/lib/leap-functions.js
 * @depends app/lib/leap.js
 * @depends app/lib/file-loader.js
 * @depends app/setup.js
 * @depends three-app.js
 */


$(window).ready(function () {
    
     // Generic resize function
    /*$(window).resize(function(){
        clearTimeout(appVars.resizeTimer);
        appVars.resizeTimer = setTimeout(resizeWindowCallback, 500);
    });*/

    // CUSTOM APP CODE HERE

    // fliping the cards
    $('.flip').click(function(e){
		e.preventDefault();
		$(this).toggleClass('over');
	});
    
});

$(window).load(function(){

    // External link class JS
    //externalLinks();
})