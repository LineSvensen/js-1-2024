// 1. Select the heading h2

// querySelector
// querySelectorAll
// getElementById

const heading2 = document.querySelector("h2");
console.log(heading2);

// 2. Select element with class .heading2

const headingByClass = document.querySelector(".heading2");
console.log(headingByClass);

// 3. Select element with an id #list using querySelector

const list = document.querySelector("#list");  // when using querySelector we use the #
console.log(list);

// 4. Select element with is #list using getElementById

const list2 = document.getElementById("list");
console.log(list2);

const listItem = document.querySelector("li"); //will select first item in list
console.log(listItem);

// 6. select all items in the list - li

const listItems = document.querySelectorAll("li");
console.log(listItems);

// 7. Select the h1 and change the color to be red

// const heading1 = document.querySelector("h1");
// // console.log("before i do my change");
// console.dir(heading1); // dir if you want to see different options in the inspect tool
// heading1.style.color = "red";
// heading1.style.border = "5px solid green";
// heading1.style.padding = "1rem";

// Task : please change the background of the heading1 variable

// heading1.style.backgroundColor = "lightGrey";

// Select the empty div and add the class .container to it

const myDiv = document.querySelector("div");
console.log(myDiv);

// change the heading text

// heading1.innerHTML = "Hei Ingrid og Hei Line"; // can also use `<p> </p>`
// innerText cant give you <p> <span> etc.

                        // 0       1        2         3
const myArrayOfNames = ["hesh", "kjetil", "jonas", "johnny"];

console.log(myArrayOfNames[0]);
console.log(myArrayOfNames[1]);
console.log(myArrayOfNames[2]);
console.log(myArrayOfNames[3]);

for(let i = 0; i < myArrayOfNames.lenght; i++){    // i = index
    console.log(myArrayOfNames[i]);
}

// i = 0
// 0 < 4
// i = 0 + 1 = 1

let sum = 10 + 5;
console.log(sum);

let difference = 10 - 5;
console.log("difference: ",difference);

// multiplication

// 10 * 5 // 50

let product = 10 * 5;
console.log(product);

// division

// 10 / 5 = 2

let result = 10 / 5;
console.log(result); // 2

// modulus

let remainder = 10 % 4; // remainder is 2
console.log(remainder);

// simple operators

// simple assignment

let a = 5; // a is 5

// addition assignment (+=)

let b = 10;
b += 5 // b is now 15  because b+5

// subtraction assigment (-=)

let c = 15;

c-= 5; // 10

c = c -5; // 10

// comparison operators

// equal to (==)

// let isEqual = (5 == "5");
// //true
// console.log("isEqual: ",isEqual);

// strict equal (===)

// let isStrictEqual = (5 === "5"); // false

// === will compare datatype. == will not.

// not equal (!=)

// 5!= 6 // true
// let isNotEqual = 5 != "6"); // true
// console.log(isNotEqual);

// IN LOGICAL COMPARISON WE ONLY GET TRUE OR FALSE

// greater than (>)

let isGreaterThan = (10 > 5); // true
console.log("isGreaterThan: ",isGreaterThan);

// AND // OR
// && // ||

// let (5 > 4 && 10 > 5);

// 10 > 5 //


// HOMEWORK TASK

const heading1 = document.querySelector("h1");
console.log(heading1);
heading1.style.color = "blue";
heading1.style.fontSize = "40px";
heading1.innerHTML = "Welcome to JavaScript Class";

// const heading1 = document.querySelector("h1");
// // console.log("before i do my change");
// console.dir(heading1); // dir if you want to see different options in the inspect tool
// heading1.style.color = "red";
// heading1.style.border = "5px solid green";
// heading1.style.padding = "1rem";

// select the button

const myBtn = document.querySelector("button");

// new

myBtn.addEventListener("click", function (){
    let someRandomNumber = getRandomInt(10);

    list.innerHTML += `<li>New Item</li>`
    // list.innerHTML = list.innerHTML + `<li>new item</li>`
});