const ageInput = document.querySelector("#age");
const enterBTN = document.querySelector(".enter-BTN");

enterBTN.addEventListener("click",function() {
    console.log("BTN is clicked");
    const age = ageInput.value;
    console.log("age: ", age);
    const isAgeOk = isOldEnough(age);
    console.log("isAgeOk: ",isAgeOk);
    if(isAgeOk){
        document.location.href = "welcome.html";
    } else {
        //ERROR MESSAGE
    }
});

function isOldEnough(ageToCheck) {
    if (ageToCheck >= 13) {
        return true;
    }
    return false;
};

