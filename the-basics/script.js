// Variables

var myName = "Line";

console.log(myName); // Output : Line - this is a comment

// let age = 31;
// console.log(age); // Output : 31   ------

const MAKE = "BMW";
console.log(MAKE); // Output : BMW

// Data types

// let greeting = "hello, world!";
// console.log(typeof greeting); --------

let isHappy = true;
console.log(isHappy);
console.log(typeof isHappy); // Output: boolean

let someVar;
console.log(typeof someVar); // Outfput : Undentified

// let emptyValue = null;
// console.log(typeof emptyValue); // Output : Null ---------

// Object

let person = {
    firstName: "Hesham",
    lastName: "El Masry",
    age: 31
};

console.log(person);
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);

// Please create an object for a car and the car
// Details are, my car is made by volvo and it is a
// year of 1992. condition: used. price 10k.

let car = {
    make: "Volvo", //key : value
    year: "1992", //key : value
    condition: "Used", //key : value
    price: 10000
};

console.log(car.make); // Output : Volvo

console.log(car["make"]); // Output : Volvo

console.log(car.condition); // Output : Used

console.log("i have a "
    + car.make + " and it is "
    + car.year + " and it is used and the price is 10000");

// i have a volvo car and it is 1992 model. its used. price 10k.

console.log(`i have a ${car.make} and it is ${car.year} and it is used and the price is 10000`);


// Array

let colors = ["Red", "Green", "Blue"];

let random = [
    3433, // the position here is 0. not starting with 1.
    "Green", // 1
    {name: "Line", age: 31}, // 2
    ["boy", "girl", "whatever"] // 3
];

console.log(random[0]);

// Type conversion

let year = "1992"; // String
console.log(year);

// from string to number

// let convertedYear = parseInt(year);  // ParseInt will make it happen
// console.log(convertedYear);

// convert from number to string

// let num = 123;
//
// console.log(num.toString());

// let convertedNumber = num.toString();

// console.log(covertedNumber);

// from string to number


// HOMEWORK

// Task 1

var favoriteCity = "Madrid";
console.log(favoriteCity); // Output : Madrid

let age = 28;
console.log(age); // Output : 28

const birthYear = 1995;
console.log(birthYear); // Output : 1995

// Task 2

var greeting = "Hello and welcome to this website";
console.log(typeof greeting); // Output : String

let quantity = 1500;
console.log(quantity); // Output : 1500

let isJavaScriptFun = true;
console.log(isJavaScriptFun); // Output : True

let thisIsUndefined;
console.log(typeof thisIsUndefined); // Output : Empty value

let emptyValue = null;
console.log(typeof emptyValue); // Output : Object

// Task 3

let numString = "25";
console.log(numString);

let num = parseInt(numString);  // ParseInt will make it happen
console.log(num);

let num2 = 50;
console.log(numString);

let text = num.toString();



