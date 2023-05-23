const myLibrary = [
    // {title: 'The Seven Husbands of Evelyn Hugo', author: 'Taylor Jenkins Reid', pages: 320, read: 'Finished'},
    // {title: 'To Kill a Mockingbird', author: 'Harper Lee', pages: 421, read: 'Not Read Yet'},
    // {title: 'The Alchemist', author: 'Paulo Coelho', pages: 288, read: 'Not Read Yet'},
    // {title: 'Zuchi Zuck', author: 'James Newman', pages: 321, read: 'In Process'},
    new Book ('The Alco','Paul Coal', 281 ,'Finished'),
];

function Book(title, author, pages, readStatus) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.readStatus = readStatus
}

// Prototype function to toggle the read status
Book.prototype.toggleReadStatus = function() {
    if (this.readStatus === "Not Read Yet") {
        this.readStatus = "In Process";
    } else if (this.readStatus === "In Process") {
        this.readStatus = "Finished";
    } else if (this.readStatus === "Finished") {
        this.readStatus = "Not Read Yet";
    }
};

// function addBookToLibrary() {
//     myLibrary.push()
// }

function displayBooks(myLibrary) {
    let booksContainer = document.getElementById('books-collection'); // Assuming there's a container element with id 'books-container'
  
    // Clear any existing content in the container
    booksContainer.innerHTML = '';
  
    // Loop through the array of book objects
    for (let i = 0; i < myLibrary.length; i++) {
      let book = myLibrary[i];
      let bookIndex = myLibrary.indexOf(book);
      
  
      // Create a card element for each book
      const card = document.createElement('div');
      card.classList.add('card');
  
      // Create elements for book information
      const title = document.createElement('h3');
      title.textContent = book.title;
  
      const author = document.createElement('p');
      author.textContent = 'By ' + book.author;
  
      const pages = document.createElement('p');
      pages.textContent = book.pages + ' pages';

      const readStatus = document.createElement('p');
      readStatus.textContent = book.readStatus;

      const removeButton = document.createElement("button");
      removeButton.innerHTML = "Remove";
      removeButton.setAttribute("data-remove", bookIndex); // Set data-attribute with the index
      removeButton.addEventListener("click", removeBook);

      const editBtn = document.createElement("button");
      editBtn.innerHTML = "Edit Status";
      editBtn.setAttribute("data-edit", bookIndex);
      editBtn.addEventListener("click", toggleReadStatus);
      
  
      // Append book information to the card
      card.appendChild(title);
      card.appendChild(author);
      card.appendChild(pages);
      card.appendChild(readStatus);
      card.appendChild(removeButton);
      card.appendChild(editBtn);
  
      // Append the card to the books container
      booksContainer.appendChild(card);
    }
}

// Function to toggle the read status of a book
function toggleReadStatus(event) {
    const index = event.target.getAttribute("data-edit"); // Get the index from the data-attribute
    const book = myLibrary[index]; // Get the book object from the library array
    console.log(event);
    book.toggleReadStatus();  // Toggle the read status using the Book prototype function
    displayBooks(myLibrary); // Redisplay the updated library
  }

// Function to remove a book from the library
function removeBook(event) {
    const index = event.target.getAttribute("data-index"); // Get the index from the data-attribute
    myLibrary.splice(index, 1); // Remove the book from the library array
    displayBooks(myLibrary); // Redisplay the updated library
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
