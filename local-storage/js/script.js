// local storage
// session storage

const myVariable = "some text";

window.localStorage.setItem("variableOne", myVariable);

window.localStorage.setItem("name", "mimi");

// save objects
// save arrays

// let = car {
//     make: "bmw",
//     model: 1992,
//     price: 2000
// }
//
// window.localStorage.setItem("myCar")

//------

// use local storage
// create three items there
// first is a variable string one
// second is a object
// third is an array


let puddingFlavour = "Chocolate";

window.localStorage.setItem("puddingFlavour", "Chocolate");

let coffee = {
    origin: "South Africa",
    intensity : "medium 7"
}

let coffeeString = JSON.stringify(coffee);

console.log(coffeeString);

let shoppingList = ["coffee", "jam", "milk"];

localStorage.setItem('shoppingList', JSON.stringify(shoppingList));



//
//
// store the data in the localstorage
//
// adn then get the items from the local storage
//
// please use JSON.stringify and JSON.parse



