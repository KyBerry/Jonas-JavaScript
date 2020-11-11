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



// Arrays -> index list that starts at 0.
// First way to write array
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);
// Second way to write array
const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

// Returns length of array | how many items are present
console.log(friends.length); // output> 3

// Get last element in the array 
console.log(friends[friends.length - 1]); // output> 'Peter'

// Calculate age with array | Exercise
const years = [1990, 1967, 2002, 2010, 2018];

const calcAgeArr = function(birthYear) {

}



// Array method basics
const friends2 = ['Michael', 'Steven', 'Peter'];

// Add array elements | array methods
// .push() method adds new element to end of the array and returns a new length.
const newLength = friends2.push('Jay');
console.log(friends2);
console.log(newLength);
// .unshift() method adds new element to front of array returns a new length.
friends2.unshift('John');
console.log(friends2);

// Remove array elements | array methods
// .pop() removes the last element of the array | returns removed item
const el = friends2.pop();
console.log(el);
console.log(friends2);
// .shift() removes first element in the array | returns removed item
const shiftEl = friends2.shift();
console.log(shiftEl);
console.log(friends2);

// Locate and return index of element if present in the array
// .indexOf() returns position of element in the array | returns -1 if not present
console.log(friends2.indexOf('Steven'));
// ES6 method .includes() will return true or false if element is in the array
console.log(friends2.includes('Steven'));
// We can use includes to write conditionals
if (friends2.includes('Peter')) {
	console.log('You have a friend called Peter!');
}










