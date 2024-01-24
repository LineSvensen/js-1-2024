// let name = " hesham ";
//
// name = name.trim();
//
// console.log("name: ",name);


const firstNameInput = document.querySelector("#firstname"); // you can use getElementById but no # !
const formSignupBTN = document.querySelector("#signup-btn");
const firstNameErrorMessage = document.querySelector("#first-name-error-message");

const passwordInput = document.querySelector("#password");
const passwordError = document.querySelector("#password-error-message");

// 1. i want to trigger an onkeyup event when i write something in the input of first name

firstNameInput.onkeyup = function (event) {
    let firstNameInputValue = event.target.value;
    let totalNumberOfCharsFirstName = firstNameInputValue.length;
    // console.log("firstNameInputValue",firstNameInputValue);
    // console.log(firstNameInputValue.length);  // when you put length it reads it as array - how many caracters are there
    // let totalNumberOfCharsFirstName = firstNameInputValue.length;
    // condition. if the totalNumberOfCharsFirstName > 5
    // formSignupBTN disabled will be false
    if (totalNumberOfCharsFirstName >= 5){
        formSignupBTN.disabled = false;
        firstNameErrorMessage.innerHTML = "Great success!";
        firstNameErrorMessage.classList = "success";
    }else {
        formSignupBTN.disabled = true;
        firstNameErrorMessage.innerHTML = "Your name is too short";
        firstNameErrorMessage.classList = "error";
    }
    // firstNameInputValue.length > 5 ? formSignupBTN.disabled = false : formSignupBTN.disabled = true;
    // formSignupBTN.disabled = (firstNameInputValue.length > 5)  -- false or true
}

passwordInput.onkeyup = function (event){
    let passwordValue = event.target.value;
    let totalNumberOfCharsInPassword = passwordValue.length;

    if (passwordValue === "123456") {
        passwordError.innerHTML = "🥶 You will need to think about all your passwords";
    } else if (totalNumberOfCharsInPassword >= 8) {
        passwordError.innerHTML = "😍 Your password is good";
    } else if (totalNumberOfCharsInPassword >= 5) {
        passwordError.innerHTML = "🙂 Your password is average";
    } else if (totalNumberOfCharsInPassword >= 3) {
        passwordError.innerHTML = "🥺 Your password is weak";
    }
};