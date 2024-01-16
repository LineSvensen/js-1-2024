import productsData from "./data/products.js";
console.log("products: ", productsData);
//.1 select the products container

const productsContainer = document.querySelector(".products-container");

// 2. fill the container of the products with products

for (let i = 0; productsData.length; i++) {
    console.log(productsData[i]);
    productsContainer.innerHTML += `
            <div class="product">
                <img src="https://picsum.photos/200/300">
                <h3>${productsData[i].name}</h3>
                <h4>${productsData[i].price}</h4>
                <span class="heart-container">
                    <svg class="heart-active"
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                </span>
            </div>
    `;
};

// 3. check if any of the FaV btns hearts clicked
document.querySelectorAll("svg");
console.log("favourites: ", favourites);
// loop on the dom elements i selected hearts all the elements with class heart
for(let x = 0; x < favourites.lenght; x++) {
    console.log(favourites[x]);
    favourites[x].addEventListener("click", function()) {
        console.log("hey you clicked", favourites[x]);

        this.classList.toggle(".heart-active");
        console.log("this.classList: ", this.classList);
    }
}

// 4. i want to make >>>this<<<<< heart to be red