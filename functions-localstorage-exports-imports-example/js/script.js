let name = "Elivs";
let secondName = "Madonna";
let thirdName = "Brad Pitt";

const myParagraph = " Hello " + name + " and hello " + secondName + " and also hello to " + thirdName;

console.log(myParagraph);

function logWord() {
    console.log("Hello everyone! How are you?");
}

logWord();  //makes logged word appear.


function logWord(name) {
    console.log("hello " + name + " my friend");
}

logWord("Line");

logWord("Princess");

logWord("Queen Liney");