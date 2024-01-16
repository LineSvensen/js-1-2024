// ::: setInterval :::

// the set interval method is similar to the setTimeout. but it
// executes a function at a certain interval until its cleared/stopped.

let count = 0;
const intervalId = setInterval (function () {
    console.log("hello internet!!!!");
    count++; // increment
    if(count === 5){
        clearInterval(intervalId);
    }
}, 1000); // every one second i will run this interval
// only show in console 


// CODE TO ADD 1 MORE ITEM EVERY SECOND:

const container = document.querySelector(".container");
let counter = 0;

const ulIntervalId = setInterval(function(){
    counter++;
    container.innerHTML += `<li>Item ${counter}</li>`;
    // i want to stop when reaching 5
    if(counter === 10){
        clearInterval(ulIntervalId);
    }
}, 1000);

// Create an empty user object.
// Add a name property with the value Jonas.
// Add a surname property with the value The Great.
// Change the value of name to Helene.
// Remove the name property from the object.

let user = {}

user.name = "Jonas";
user.surname = "The Great";
user.name = "Helene";

delete user.name;
console.log(user);

// Q.2

// Create a function isEmpty(obj)
// that returns true if the object
// has no properties and false if
// there is at least one property.


function isEmpty(obj){
    for(let key in obj){
        return false
    }
    return true;
}


const isMyObjectEmpty = isEmpty(user);
console.log("isMyObjectEmpty: ",isMyObjectEmpty)


// Q3

// Given an array of numbers: [1,2,31,24,-67,5,3,555,79,-4,21,33,89,-90].
// 1) Find the maximum and minimum value of the array.
// 2) Write all positive and even numbers into another array.
// Display the results on the screen.

// const points = [1,2,32,24,-67,5,3,555,79,-4,21,33,89,-90];
// points.sort(function(a, b){return a - b});  // a - b means we take a and compair to b.
// console.log(points);
//
// const minItemInTheArray = points[0];
// console.log("minItemInTheArray: ", minItemInTheArray);
//
// const minItemInTheArray = points[points.length - 1];
//
// console.log(minItemInTheArray);
//
// let positiveEvenArray = [];
// for (let i = 0; i < points.length; i++){
//     if (points[i] > 0) {
//         if (points[i] % 2 === 0) {
//             2/2 = 1.000
//         }
//         positiveEvenArray.push(points[i])
//         console.log("points[i]: ", points[i]);
//     }
// )};

const points = [1, 2, 32, 24, -67, 5, 3, 555, 79, -4, 21, 33, 89, -90];

// Sort the array in ascending order
points.sort(function (a, b) {
    return a - b;
});

console.log("Sorted points:", points);

// Find the minimum and maximum values
const minItemInTheArray = points[0];
const maxItemInTheArray = points[points.length - 1];

console.log("Min Item in the Array:", minItemInTheArray);
console.log("Max Item in the Array:", maxItemInTheArray);

// Create an array of positive even numbers
let positiveEvenArray = [];

for (let i = 0; i < points.length; i++) {
    if (points[i] > 0 && points[i] % 2 === 0) {
        positiveEvenArray.push(points[i]);
    }
}

console.log("Positive Even Numbers:", positiveEvenArray);