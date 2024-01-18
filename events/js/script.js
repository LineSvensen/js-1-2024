// addEventListener
// select the button

const button = document.querySelector(".btn");

console.log(button);

// way 1

// button.addEventListener("click", function()) {
//     console.log("you clicked on me omg");
// }

/// way 2

button.onclick = function () {
    console.log("omg stopppp");
}

// 3

// onKeyDown , the event will be triggered when you press on (noone use this)
// onKeyUp will trigger when you release (noone use this)
// onKeyPress (noone use this)

const myFirstKeyInput = document.querySelector("#firstName");
console.log("a key is pressed");

const handleKeyPress = function(event){
    console.log("handleKeyPress: ", handleKeyPress);
}

const theHoverBtn = document.querySelector(".pet-btn");

const handleMouseOver = function (event) {
    event.target.style.backgroundColor = "pink";
    console.log("event.target.dataset.animal: ", event.target.dataset.animal);
}

const handleMouseOut = function (event) {
    event.target.style.backgroundColor = "White"; // Set it to the default value or another desired color
}

theHoverBtn.addEventListener("mouseover", handleMouseOver);
theHoverBtn.addEventListener("mouseout", handleMouseOut);