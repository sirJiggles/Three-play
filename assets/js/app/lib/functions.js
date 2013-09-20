
/* Generic system loggin function */
function logging(msg, data, lvl){
	console.log('There was a system error: '+msg);
	console.log('Data that fired the error: ');
	console.log(data);
	console.log('Lvl of error message: '+lvl);
}


function flameOn(){
	createParticleSystem(200, 0x000000, 5, 50, 200, 'black-flames');
}