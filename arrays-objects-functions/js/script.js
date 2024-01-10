// Arrays

// is like a tray to keep multiple cups of coffee in.
// array can hold multiple variables (let,var,const) in it.
//  array have this: []

               // 0          1            2    positions in the array
// const fruits = ["Apple", "blueberry", "oranges"];
// console.log(fruits.length); // total is 3. show how many items in the array
// fruits.push("Mango"); // adding more more item
// console.log(fruits); // it will now show 4 items.
// fruits.unshift("Grapes"); // add 1 more item to the start of the array (0)
// console.log(fruits);
// fruits.pop(); // removes last item in the array
// console.log(fruits); // mango is gone
// fruits.shift(); // removes the first item
// console.log(fruits); //grapes removed
//
// const numbers = [32, 25, 19, 55];
// numbers.sort();
// console.log(numbers);
//
// let animal = "dog"; //javascript sees " string as an array

// const cars = ["bmw", "volkswagen", "toyota", "volkswagen"];
// console.log("The index of volkswagen: is "), cars.indexOf ("volkswagen");
//CHECK THIS ONE...not showing number

//.find

// const user = {   //this is an object
//     name: "Monde",
//     age: 30,
//     job: "Software Engineer",
//     wealth: 3433224
// }
//
// console.log(user);
//
// console.log(user.age);
// console.log(user.name);
// console.log(user.wealth);


// const someText = "Hello my name is " + user.name;
// console.log(someText);

// ^v these two will do the same thing. use the method below

// const someTextTwo = `Hello my name is ${user.name}`;
// console.log(someTextTwo);
// const someTextThree = `I am ${user.age} years old`;
// console.log(someTextThree);
// const someTextFour = `I own ${user.wealth} dollars`;
// console.log(someTextFour);
// const someTextFive = `I work as a ${user.job}`;
// console.log(someTextFive);


// const books = [   // this is an array of books
//     {
//         title: "Dreams",  // title, author, pages - small letters!!
//         author: "Line Svensen",
//         pages: 300
//     },
//     {
//         title: "Sapiens",
//         author: "Cant remember sorry",
//         pages: 100
//     },
//     {
//         title: "Cool title",
//         author: "Awesome book title",
//         pages: 200
//     }
// ]



// a function is a set of action or code run when we call this function name

// function doorRing(withCamera) {
//     console.log("i will go open the door for: " + withCamera);
// }
//
// doorRing("Monde is outside");

function logWord(theWord) {
    console.log(theWord);
}

logWord("Line");

const sum = addTwoNumbers(10, 20);
console.log()

// to access the first item in the array:

// we dont want to do this... :

// console.log("Dreams ", books[0]);
// console.log("Sapiens ", books[1]);
// console.log("Cool title ", books[2]);

// we want to search for a spesific book:

// const searchBook = books.find(function (book) {
//     return book.title === "Dreams";
// });
// console.log("searchBook: ",searchBook);

// let name = "Kenneth";
// let teacherName = "Hesh";
// let teacherFriendName = "Monde";
//
// name = "Erica";
// console.log(name);
// name = "Jonas";
// console.log(name);

// in console log the name Erica and Jonas will appear.
// But it really should be Jonas.

// const PORT = 8080;
// const MAX_CONNECTIONS = 4;
// we write in large letters to show
// other devs that this cannot be changed. its constant


