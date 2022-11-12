function book(title, author, pages, status) {
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
    this.sayTitle = function() {
      console.log(title, author, pages, status)
    }
  }

const book1 = new book('the hobbit', 'tolkien', '230', 'not finished')
book1.sayTitle()