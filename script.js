let myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary() {
    const book = new Book(title, author, pages);
    return myLibrary.push(book)
}

