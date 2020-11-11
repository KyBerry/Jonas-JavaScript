// Using Strict Mode
"use strict";
let hasDriversLicense = false;
const passTest = true;
if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");
// const interface = "Audio"; -> prevents using future keywords of JavaScript
// const private = 535; <interface> and <private>

// Functions -> a piece of code to reuse
function logger() {
  console.log("My name is Kyle");
}
// calling | running | invoking function
logger();
logger();
logger();
// using function parameters <apples> and <oranges>
function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}
// using our <fruitProcessor> function and adding arguments
fruitProcessor(5, 0);
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);




// Function Declarations vs.Expressions
// Function Declaration -> Can be called before the function declaration because of hoisting
function calcAge1 (birthYear) {
	return 2037 - birthYear;
}
console.log(calcAge1(1995));
//Function Expression -> Cannot call function before assigned to variable
const calcAge2 = function (birthYear) {
	return 2037 - birthYear;
}



// Arrow functions
// non arrow function
const calcAge3 = function (birthYear) {
	return 2037 - birthYear;
}  
// arrow function
const calcAge4 = birthYear => 2037 - birthYear;
console.log(calcAge4(1995));
// more complex arrow function
const yearsUntilRetirement = (birthYear, name) => {
	const age = 2037 - birthYear;
	const retirment = 65 - age;

	return `${name}, you are ${retirment} years from retirment`;
}
console.log(yearsUntilRetirement(1995, 'Kyle Berry'));

// functions calling with other functions
function cutFruitPieces(fruits) {
	return fruits * 4;
}

function fruitJuice(apples, oranges) {
	// calling function inside other function
	const applePieces = cutFruitPieces(apples);
	const orangePieces = cutFruitPieces(oranges);

	const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
	return juice;
}

console.log(fruitJuice(2,3));











