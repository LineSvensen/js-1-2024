const books = [
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        available: true
    },
    {
        title: "1984",
        author: "George Orwell",
        available: false
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        available: true
    }
];

const booksContainer = document.querySelector(".book-container");
console.log("booksContainer: ", booksContainer);

let html = "";

const totalItemsOfBooks = books.length;

console.log("totalItemsOfBooks: ", totalItemsOfBooks);

for (let i = 0; i < totalItemsOfBooks; i++) {
    console.log(books[i].title);
    console.log(books[i].author);
    console.log(books[i].available);

    html += `
                <div class="book book-detail">
                  <h2>${books[i].title}</h2>
                  <p>Author: ${books[i].author}</p>
                  <p>Available : ${books[i].available ? "Yes it is available" : "no it is not available"}</p>
                </div>
    `;
}

booksContainer.innerHTML = html;