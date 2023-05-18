let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read,
    this.info = function() {
        return (`${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`)
    }
}

let book1 = new Book ('In Da House', 'Player Stark', 123, 'not read yet');
console.log(book1.info());

function addBookToLibrary() {
    myLibrary.push({ title: prompt('Please enter the  title'), 
                     author: prompt('Please enter the author'), 
                     pages: prompt('Please enter the number of pages'), 
                     read: prompt('Have you read the book?')
                    })
}

addBookToLibrary();