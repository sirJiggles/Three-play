

function addGlobes(amount){

	var globeTexture = new THREE.MeshBasicMaterial({    
	    map: THREE.ImageUtils.loadTexture( 'assets/img/globe.jpeg', new THREE.UVMapping(), function() {

	    } )
	});

	appVars.objects.globes = new Array();

	for(var i = 1; i <= amount; i ++){
		appVars.objects.globes[i] = addSphere(10, 30, 16, globeTexture, true);
		appVars.objects.globes[i].rotation.x = Math.PI * 0.1;
	}

}

// simulate dom clicks
function simulateClick(pos){
	//console.log('clicking at: '+pos[0]+' '+pos[1]);
	//console.log( pos );
	//console.log( $(document.elementFromPoint(pos[0], pos[1])) );
	//$(document.elementFromPoint(pos[0], pos[1])).click(); 
}

/* Generic system loggin function */
function logging(msg, data, lvl){
	console.log('There was a system error: '+msg);
	console.log('Data that fired the error: ');
	console.log(data);
	console.log('Lvl of error message: '+lvl);
}
	