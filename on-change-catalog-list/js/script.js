
// 1. select my dropdown

const dropdown = document.querySelector("#circles");
const circlesContainer = document.querySelector(".circles-container");

dropdown.onchange = function (){
    let value = dropdown.value;
    circlesContainer.innerHTML = "";
    for(let x = 1; x<= this.value; x++){
        circlesContainer.innerHTML += `
        <div class="circle">${x}</div>`        // += means keep adding
    }
}
