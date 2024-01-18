// //.1 select the products container
import products from "./data/products.js";

console.log(products);

const productsContainer = document.querySelector(".products-container");

// i want to get the saved favourite products thats in local storage

const allMySavedFavs = JSON.parse(window.localStorage.getItem("favourites"));
console.log("allMySavedFavs: ", allMySavedFavs);

// i need to compare the saved array of fav products and the products data i have already


// // 2. fill the container of the products with products
for (let i = 0; i < products.length; i++) {
    let cssClass = "";
    const doesObjectExist = allMySavedFavs.find(function (fav){
        return parseInt (fav.id) === products[i].id
    });
    if(doesObjectExist){
        cssClass = "heart-active";
    }

    productsContainer.innerHTML += `<div class="product">
            <img alt="random photo" src="https://picsum.photos/200">
            <h3>${products[i].name}</h3>
            <h4>${products[i].price}</h4>
            <span class="heart-container">
                <svg class="heart ${cssClass}"
                    data-name="${products[i].name}"
                    data-id="${products[i].id}"
                    data-price="${products[i].price}"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
            </span>
        </div>`;
}

// 3. check if any of the FaV btns hearts clicked
const heart = document.querySelectorAll(".heart");

// loop on the dom elements i selected (hearts)
// All the elements with the class heart
let favsToSave = [];

for (let x = 0; x < heart.length; x++) {
    heart[x].addEventListener("click", function (){
        this.classList.toggle("heart-active");
        let productILikeToSave = {
            id: this.dataset.id,
            name: this.dataset.name,
            price: this.dataset.price
        }
        favsToSave.push(productILikeToSave);
        saveFavs(favsToSave);
    })

}

function saveFavs(favs){
    console.log("favs:",favs)
    window.localStorage.setItem("favourites", JSON.stringify(favs));
}

// 4. i want to make >>>this<<<<< heart to be red

