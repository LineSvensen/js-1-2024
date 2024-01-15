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