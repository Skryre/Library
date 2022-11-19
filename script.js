const button = document.querySelector(".add");
const checkbox = document.querySelector("input[type='checkbox']");
const container = document.querySelector(".container")

let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    return myLibrary.push(book);
}

checkbox.addEventListener("change",function(){
  this.value = this.checked ? "finished" : "unfinished";
})

button.addEventListener(`click`, (e)=> {
  e.preventDefault();
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let read = document.getElementById("read").value;
  if (title === "" || author === "") {return};
  if (pages === ""){ pages === 0}
  addBookToLibrary(title, author, pages, read);
  showLibrary ()
})

function showLibrary () {
  container.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i += 1){

    const newbook = document.createElement("div");
    const bookButton = document.createElement("button");
    const changeStatus = document.createElement("button");

    bookButton.classList.add("delete");
    bookButton.dataset.library = i;

    changeStatus.classList.add("change");
    changeStatus.dataset.library = i;

    newbook.classList.add("books");
    container.appendChild(newbook);
    newbook.innerHTML = "Book title : "+myLibrary[i].title+"<br />"+"Author name : "+myLibrary[i].author+"<br />"+"Number of pages : "+myLibrary[i].pages+"<br />"+myLibrary[i].read;

    newbook.appendChild(changeStatus);
    changeStatus.innerHTML = "Change status";
    changeStatus.addEventListener(`click`, (e)=> {
      let index = e.target.dataset.library;
      myLibrary[index].read = "finished" ? "unfinished" : "finished";
      console.log(e.target.dataset.library);
      console.log(myLibrary);
      showLibrary ()
    })

    newbook.appendChild(bookButton);
    bookButton.innerHTML = "Delete book";
    bookButton.addEventListener(`click`, (e)=> {
      let index = e.target.dataset.library;
      myLibrary.splice(index, 1);
      console.log(e.target.dataset.library);
      console.log(myLibrary);
      showLibrary ()
    })    
  }
}