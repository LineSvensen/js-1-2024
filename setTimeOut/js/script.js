// setTimeout

// a method executes a function after a specific period of time

// 1.
//
// setTimeout(function () {
//     console.log("Hello Jack");
// }, 5000); // 5000 = 5 seconds
//
// // 1. select loader element with class .loader
//
// const loading = document.querySelector(".loader");
// console.log("loader element", loading);
//
// // 2. use the setTimeout
//
// setTimeout(function () {
//     // 3. change the inner HTML of the loading
//     loading.innerHTML = "Finished loading! :-) ";
// }, 5000);

// const counterContainer = document.querySelector(".counter");
// let timeLeft = 10;
//
// if

// condition : if the time left is > 0

// 1. every one second
// 2. change inner html
// 3. reduce the time left by 1  timeleft--1
// 4. else counterContainer innerhtml to be counter finished



const someAd = document.querySelector(".ad");
console.log("loading ad...", someAd);


setTimeout(function () {
    someAd.style.display ="block";
}, 5000);