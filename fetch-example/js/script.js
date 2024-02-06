// fetch the books data

const bookListDiv = document.getElementById("book-list");
let bookData = []


fetch("http://...")
    .then((response) => response.json())
    .then((bookResultData) => {
        bookData = bookResultData;
        console.log(bookData);

        for (const book of bookData) {
            displayBook(book)
        }

        // displayBook(bookData[0])
        // displayBook(bookData[1])

        // const bookDiv = document.createElement('div');
        // const bookTitlePara = document.createElement('p');
        // bookTitlePara.innerText = bookData[0].title;
        // bookDiv.appendChild(bookTitlePara);
        // bookListDiv.appendChild(bookDiv);

    });

// console.log(bookData);


// document.createElement

function displayBook(book){
    const bookDiv = document.createElement("div");
    const bookTitlePara = document.createElement("p");
    bookTitlePara.innerText = book.title;
    bookImg.src = book.coverImg;
    bookImg.alt = "a picture of a book";
    bookDiv.appendChild(bookImg);
    bookDiv.appendChild(bookTitlePara);
    bookListDiv.appendChild(bookDiv);
}


// The provided code appears to be correct for fetching book data from a specified URL, parsing the JSON response, and then displaying the book titles in a div element with the id "book-list."
//
// Here is a brief breakdown of the code:
//
//     The fetch function is used to make a network request to a specified URL (replace "http://..." with the actual URL).
// The response is converted to JSON using the response.json() method.
//     The resulting book data is stored in the bookData variable.
//     The displayBook function is defined to create a new div element for each book and append it to the "book-list" div with the book title displayed.
//     The for...of loop iterates over each book in bookData and calls the displayBook function for each book.
//     The commented-out code at the end of the first then block seems to be an alternative way to display the first and second books. You can either use the loop or the commented-out code, but not both.