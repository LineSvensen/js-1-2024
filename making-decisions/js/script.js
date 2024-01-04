console.log("here");

// if and else statements

let temp = 28;

if (temp > 30) {
    console.log("it is very hot man!");  // if the temperature is over 30, it will show this in in inspect/console log
} else if (temp > 20) {
    console.log("the weather is very nice")  // if the temp is over 20, its this

} else {
    console.log("the weather is cold")
}

// At school my students had an exam. some students
// got score high and low. i want to write an
// if else statement to check if the score is high
// or low.
// of the score is less than 50 then the students
// fails
// the score is more than or equal 50 then the student
// passed

// please use the variable score to do your condition

let score = 20;

if (score >= 50) {
    console.log("passed");

} else if (score >= 50) {
    console.log("passed");

} else {
    console.log("fail");
}


// traffic lights

let color = "yellow";

switch (color) {
    case "red":
        console.log("Stop!");
        break;
    case "yellow":
        console.log("Get ready!");
        break;
    case "green":
        console.log("Go!");
        break;
    default: console.log("No traffic lights right now");
}

// task 3

let grade = "B";

switch (grade) {
    case "A":
        console.log("Great work!");
        break;
    case "B":
        console.log("Good job");
        break;
    case "C":
        console.log("Ok work");
        break;
    case "D":
        console.log("Bare minimum");
        break;
    case "E":
        console.log("You need to work harder");
        break;
    case "F":
        console.log("Fail");
        break;
    default: console.log("No grades are ready for you");
}

// 3. scope

// var can be changed outside the { . but not the let. so dont use var, because var can cause issues.

// const

// once you declare it you can not redeclare or change it.

// use upper case - const GRADE =

// let GRADE = "A";
// grade = "b";
// console.log(grade); --- not possible

// but you can with let:

// let grade = "A";
// grade = "b";
// console.log(grade)

