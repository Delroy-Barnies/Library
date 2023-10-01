const dialog = document.getElementById("dialog");
const grid = document.querySelector('.grid');

const myLibrary = [];


// add books, remove books, and change status of books

function Book(title, author, pages, isRead, index) {

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.index = index;
}

function addBookToDisplay(book) {

    const item = document.createElement("div");
    item.className = "item";

    const title = document.createElement("h2");
    title.textContent = `"${book.title}"`;
    title.className = "item_h2";

    const author = document.createElement("h3");
    author.textContent = book.author;
    author.className = "item_h3";

    const pages = document.createElement("h3");
    pages.textContent = book.pages;
    pages.className = "item_h3";

    const isRead_btn = document.createElement("button");

    if (book.isRead) {
        isRead_btn.textContent = "Read";
        isRead_btn.setAttribute('style', 'background-color: rgb(111, 241, 99);');
    }
    else {
        isRead_btn.textContent = "Not Read";
        isRead_btn.setAttribute('style', 'background-color: rgb(245, 79, 79);');
    }

    isRead_btn.className = "isRead_btn";

    isRead_btn.addEventListener('click', function (event) {

        if (event.target.textContent == "Not Read") {
            event.target.textContent = "Read";
            event.target.setAttribute('style', 'background-color: rgb(111, 241, 99);');
        }
        else {
            event.target.textContent = "Not Read";
            event.target.setAttribute('style', 'background-color: rgb(245, 79, 79);');
        }
    });

    const remove_btn = document.createElement("button");
    remove_btn.textContent = "Remove";
    remove_btn.className = "remove_btn";

    remove_btn.addEventListener('click', function (event) {
        let book = event.target.parentElement;
        grid.removeChild(book);
    });

    // add new book to the DOM, by appending the child elements to a new item and then to the grid.
    item.append(title);
    item.append(author);
    item.append(pages);
    item.append(isRead_btn);
    item.append(remove_btn);

    grid.append(item);

}

// handle form fields when calling the dialect.

document.getElementById("form").addEventListener("submit", function (event) {

    event.preventDefault();

    let formData = new FormData(form);

    let isRead = false;

    if (document.getElementById("read").checked) {
        isRead = true;
    }

    let book = Object.fromEntries(formData);
    book.isRead = isRead;

    book.index = myLibrary.length;
    myLibrary.push(book);
    addBookToDisplay(book);
    console.log(myLibrary);

});

document.querySelector(".add_button").onclick = function () {
    dialog.style.removeProperty('display');
}

document.querySelector('.close_btn').addEventListener('click', function (event) {
    dialog.style.display = 'none';
});




