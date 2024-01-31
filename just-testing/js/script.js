// CALLBACKS

function doSomething() {
    console.log("just something");
}

//void. does not give you anything
doSomething();  // this makes it come up in console

function doSomethingWithData(someData) {
    console.log("something cool " + someData);
}
// void with some parameters.
doSomethingWithData("coooooool"); // returns: something cool coooooool

function doSomethingThatReturnsAsAString() {
    console.log("this is a test");
    return "this is what will be returned";
}

doSomethingThatReturnsAsAString(); // returns: this is a test

let result = doSomethingThatReturnsAsAString() + doSomethingThatReturnsAsAString();

console.log(result); // returns: this is what will be returnedthis is what will be returned


