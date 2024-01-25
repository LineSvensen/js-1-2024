console.log("hey"); // first check if everything is working

const article = document.querySelector("#post");
// console.log("article: ",article);
// console.dir(article);
// console.log(article.dataset);
// console.log(article.dataset.author);
const button = document.querySelector("#btn");
const postImg = document.querySelector("img");
// console.log(postImg);

postImg.addEventListener("click", function(){
    window.open(postImg.dataset.fullsize, "_self");
})

button.addEventListener("click", function(){
    alert(`Hello! The author of the book is: ${article.dataset.author} And surprise surprise, the category iiiiisss....: ${article.dataset.category}`)
});

// ^ or :: button.onclick = function () {
// ^ or :: function showBookDetails(author, category) {