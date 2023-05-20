const myLibrary = [
    {title: 'The Seven Husbands of Evelyn Hugo', author: 'Taylor Jenkins Reid', pages: 320, read: 'yes'},
    {title: 'To Kill a Mockingbird', author: 'Harper Lee', pages: 421, read: 'not read yet'},
    {title: 'The Alchemist', author: 'Paulo Coelho', pages: 288, read: 'not read yet'},
    {title: 'To Kill a Mockingbird', author: 'Harper Lee', pages: 421, read: 'not read yet'},
    {title: 'The Alchemist', author: 'Paulo Coelho', pages: 288, read: 'not read yet'},
    {title: 'To Kill a Mockingbird', author: 'Harper Lee', pages: 421, read: 'not read yet'},
    {title: 'The Alchemist', author: 'Paulo Coelho', pages: 288, read: 'not read yet'},
    {title: 'To Kill a Mockingbird', author: 'Harper Lee', pages: 421, read: 'not read yet'},
    {title: 'The Alchemist', author: 'Paulo Coelho', pages: 288, read: 'not read yet'}
];

// function Book(title, author, pages, read) {
//     this.title = title,
//     this.author = author,
//     this.pages = pages,
//     this.read = read,
//     this.info = function() {
//         return (`${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`)
//     }
// }

// let book1 = new Book ('In Da House', 'Player Stark', 123, 'not read yet');

function addBookToLibrary() {
    myLibrary.push({ title: prompt('Please enter the  title'), 
                     author: prompt('Please enter the author'), 
                     pages: prompt('Please enter the number of pages'), 
                     read: prompt('Have you read the book?')
                    })
}


function displayBooks(myLibrary) {
    let booksContainer = document.getElementById('books-collection'); // Assuming there's a container element with id 'books-container'
  
    // Clear any existing content in the container
    // booksContainer.innerHTML = '';
  
    // Loop through the array of book objects
    for (let i = 0; i < myLibrary.length; i++) {
      let book = myLibrary[i];
  
      // Create a card element for each book
      let card = document.createElement('div');
      card.classList.add('card');
  
      // Create elements for book information
      let title = document.createElement('h2');
      title.textContent = book.title;
  
      let author = document.createElement('p');
      author.textContent = 'Author: ' + book.author;
  
      let pages = document.createElement('p');
      pages.textContent = 'Pages: ' + book.pages;
  
      // Append book information to the card
      card.appendChild(title);
      card.appendChild(author);
      card.appendChild(pages);
  
      // Append the card to the books container
      booksContainer.appendChild(card);
    }
  }

displayBooks(myLibrary);
  
// addBookToLibrary();