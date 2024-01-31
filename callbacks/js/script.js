function doSomething(someParameter) {
    console.log("i do something");

    someParameter();

};


doSomething(function() {
    console.log("im a callback")
});


// we will get in console:
// i do something
// im a callback

