// addEventListener - listens to every event user does. like hoovering (mouseover/mouseout).

// onclick

//1. select the body

const body = document.querySelector("body");

// 2. select the dark mode button

const darkModeButton = document.querySelector(".mode-button");

console.log(body);
console.log(darkModeButton);

function init() {
    // it will give me the darkMode status. it will change background color.
    const currentMode = window.localStorage.getItem("mode");
    if (currentMode) {
        console.log("current mode: ", currentMode);
        if (currentMode === "dark") {
            isDarkMode = true;
            body.style.backgroundColor = "black";
        } else {
            isDarkMode = false;
            body.style.backgroundColor = "white";
        }
    } else {
        console.log("no mode yet");
    }
}

init();

let isDarkMode = false;
console.log("isDarkMode Before: ", isDarkMode);

function toggleMode() {
    isDarkMode = !isDarkMode; // will be true, false
    // localStorage to save my isDarkMode .. for when i open it next time
    window.localStorage.setItem("darkMode", isDarkMode);

    if (isDarkMode) {
        body.style.backgroundColor = "#0A0A0A";
    } else {
        body.style.backgroundColor = "#FFFFFF";
    }
    console.log("isDarkMode after i clicked: ", isDarkMode);
}

darkModeButton.addEventListener("click", toggleMode);

