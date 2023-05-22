const myLibrary = [
    {title: 'The Seven Husbands of Evelyn Hugo', author: 'Taylor Jenkins Reid', pages: 320, read: 'Finished'},
    {title: 'To Kill a Mockingbird', author: 'Harper Lee', pages: 421, read: 'Not Read Yet'},
    {title: 'The Alchemist', author: 'Paulo Coelho', pages: 288, read: 'Not Read Yet'},
    {title: 'Zuchi Zuck', author: 'James Newman', pages: 321, read: 'In Process'},
    {title: 'The Alco', author: 'Paul Coal', pages: 281, read: 'Finished'},
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

function addBookToLibrary() {
    myLibrary.push()
}

function displayBooks(myLibrary) {
    let booksContainer = document.getElementById('books-collection'); // Assuming there's a container element with id 'books-container'
  
    // Clear any existing content in the container
    booksContainer.innerHTML = '';
  
    // Loop through the array of book objects
    for (let i = 0; i < myLibrary.length; i++) {
      let book = myLibrary[i];
  
      // Create a card element for each book
      let card = document.createElement('div');
      card.classList.add('card');
  
      // Create elements for book information
      let title = document.createElement('h3');
      title.textContent = book.title;
  
      let author = document.createElement('p');
      author.textContent = 'By ' + book.author;
  
      let pages = document.createElement('p');
      pages.textContent = book.pages + ' pages';

      let read = document.createElement('p');
      read.textContent = book.read;
  
      // Append book information to the card
      card.appendChild(title);
      card.appendChild(author);
      card.appendChild(pages);
      card.appendChild(read);
  
      // Append the card to the books container
      booksContainer.appendChild(card);
    }
  }

displayBooks(myLibrary);

document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let newTitle = document.getElementById('title').value;
    let newAuthor = document.getElementById('author').value;
    let newPages = document.getElementById('pages').value;
    let haveRead = document.querySelector('input[name="have-read"]:checked').value;

    const newBook = {title: newTitle, author: newAuthor, pages: newPages, read: haveRead};

    myLibrary.push(newBook);
    displayBooks(myLibrary);

    document.getElementById('myForm').reset();
});
