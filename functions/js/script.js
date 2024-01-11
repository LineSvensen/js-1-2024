// i want to create a function in my calculator app
// to sum three numbers
// please write this function for me

function addThreeNumbers(num1, num2, num3) {   // a function will always return
    return num1 + num2 + num3;
}

let result = addThreeNumbers(10, 20, 50);

console.log("result: ",result);

// change heading h1. when pressed, change to "god i dag".
// when click change colors, background turn PINK and heading h1 to be green

let heading = document.querySelector("h1");
console.log("heading: ",heading);
let button = document.querySelector("button");
let buttonColours = document.querySelector(".colours");
console.log("buttonColours: ",buttonColours);
let body = document.querySelector("body");

function changeHeading() {
    heading.innerHTML = "god i dag";
}

button.onclick = changeHeading;

function changeBackground() {
    body.style.backgroundColor = "pink";
    heading.style.color = "green";
}

buttonColours.onclick = changeBackground;

const pet = {
    type: "cat",
    name: "Titty",
    age: 10,
    isFriendly: false,
    meawMeaw: function() {                      //function inside variable
        console.log("meeeeeaaaaaw 🐱");
    }
}

console.log("type :",pet.type);
console.log("is the cat friendly: ", pet.isFriendly);

pet.meawMeaw();

// create a button called Meaw Meaw .
// when clicked , run the function

let buttonCat = document.querySelector(".cat-btn");
console.log(buttonCat);

buttonCat.onclick = pet.meawMeaw;