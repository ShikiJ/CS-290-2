function zeroPad(number, width){
	let numberString = String(number);
	while(numberString.length < width)
	{
		numberString = "0" + numberString; 
	}
	return numberString;
} 

function printFarmInventory (cows, chickens, pigs){

	console.log(`${zeroPad(cows, 3)} Cows`);	
	console.log(`${zeroPad(chickens, 3)} Chickens`);
	console.log(`${zeroPad(pigs, 3)} Pigs`);
printFarmInventory(7,11,12);
