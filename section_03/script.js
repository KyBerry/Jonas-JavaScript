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
function calcAge1(birthYear) {
  return 2037 - birthYear;
}
console.log(calcAge1(1995));
//Function Expression -> Cannot call function before assigned to variable
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

// Arrow functions
// non arrow function
const calcAge3 = function (birthYear) {
  return 2037 - birthYear;
};
// arrow function
const calcAge4 = (birthYear) => 2037 - birthYear;
console.log(calcAge4(1995));
// more complex arrow function
const yearsUntilRetirement = (birthYear, name) => {
  const age = 2037 - birthYear;
  const retirment = 65 - age;

  return `${name}, you are ${retirment} years from retirment`;
};
console.log(yearsUntilRetirement(1995, "Kyle Berry"));

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

console.log(fruitJuice(2, 3));

// Arrays -> index list that starts at 0.
// First way to write array
const friends = ["Michael", "Steven", "Peter"];
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

const calcAgeArr = function (birthYear) {};

// Array method basics
const friends2 = ["Michael", "Steven", "Peter"];

// Add array elements | array methods
// .push() method adds new element to end of the array and returns a new length.
const newLength = friends2.push("Jay");
console.log(friends2);
console.log(newLength);
// .unshift() method adds new element to front of array returns a new length.
friends2.unshift("John");
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
console.log(friends2.indexOf("Steven"));
// ES6 method .includes() will return true or false if element is in the array
console.log(friends2.includes("Steven"));
// We can use includes to write conditionals
if (friends2.includes("Peter")) {
  console.log("You have a friend called Peter!");
}

// Learning About Objects
// If we use an array we can only reference things by the order number
const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];
// Using objects allows us to add a name to an element | key: value pairs
// Object literal syntax is using '{}' | order does not matter with objects
// Use Array's for more ordered data | Use Object's for more unstructured data
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};
console.log(jonas);
// Accessing properties inside an object
console.log(jonas.lastName); // dot notation
console.log(jonas["lastName"]); // bracket notation
// Object  | adding functions to objects
const kyle = {
  firstName: "Kyle",
  lastName: "Berry",
  birthYear: 1995,
  job: "Software Developer",
  friends: ["Kody", "Tyler", "Victoria", "Max", "Justin", "Ethan"],
  hasDriversLicense: true,

  // calcAge: function(birthYear) {
  // 	return 2020 - birthYear;
  // }

  // calcAge: function () {
  // 	console.log(this);
  // 	return 2020 - this.birthYear;
  // }

  calcAge: function () {
    this.age = 2020 - this.birthYear; // creating a property when we run this method once
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} year old ${
      this.job
    }, and ${this.firstName} has ${
      this.hasDriversLicense ? "a" : "no"
    } drivers license.`;
  },
};
// accessing our methods inside an object
console.log(kyle.calcAge()); // We just use dot notation or bracket notation

// getting the summary of our person object
console.log(kyle.getSummary());

// Looping Arrays, Breaking and Continuing
const kyleArray = [
  "Kyle",
  "Berry",
  2020 - 1995,
  "Software Developer",
  ["Kody", "Tyler", "Justin"],
  true,
];

const types = [];
// Logging all elements in the above array
for (let i = 0; i < kyleArray.length; i++) {
  // Reading from kyleArray
  console.log(kyleArray[i], typeof kyleArray[i]);

  // Filling types array
  // types[i] = typeof kyleArray[i];
  types.push(typeof kyleArray[i]);
}
// Made an array of types within the for loop
console.log(types);


// Using continue and break
// continue -> exits the current iteration of the loop and starts the next one
console.log('--- ONLY STRINGS ---');
for (let i = 0; i < kyleArray.length; i++) {
  if (typeof kyleArray[i] !== "string") continue;
  console.log(kyleArray[i], typeof kyleArray[i]);
}

// break is used to completely terminate the whole loop
console.log('--- BREAK WITH NUMBER ---');
for (let i = 0; i < kyleArray.length; i++) {
    if (typeof kyleArray[i] === 'number') break;

    console.log(kyleArray[i], typeof kyleArray[i]);
}
