


class Book {
    constructor(title, author, pages, readStatus) {
      this.title = title;
      this.author = author;
      this.pages = pages;
      this.readStatus = readStatus;
    }

    toggleReadStatus() {
        if (this.readStatus === 'Not Read Yet') {
          this.readStatus = 'In Process';
        } else if (this.readStatus === 'In Process') {
          this.readStatus = 'Finished';
        } else if (this.readStatus === 'Finished') {
          this.readStatus = 'Not Read Yet';
        }
      }

}

const myLibrary = [
    new Book ('The Seven Husbands of Evelyn Hugo', 'Taylor Jenkins Reid', 320, 'Finished'),
    new Book ('To Kill a Mockingbird', 'Harper Lee',421, 'Not Read Yet'),
    new Book ('The Alchemist', 'Paulo Coelho', 288, 'Not Read Yet'),
];

function displayBooks(myLibrary) {
    let booksContainer = document.getElementById('books-collection');
  
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
      readStatus.setAttribute("data-color", bookIndex);
    //   readStatus.classList.add('color-toggle');

      const removeButton = document.createElement("button");
      removeButton.innerHTML = "Remove";
      removeButton.setAttribute("data-remove", bookIndex); // Set data-attribute with the index
      removeButton.addEventListener("click", removeBook);

      const editBtn = document.createElement("button");
      editBtn.innerHTML = "Edit Status";
      editBtn.setAttribute("data-edit", bookIndex);
      editBtn.addEventListener("click", toggleReadStatus);
      


      const btnDiv = document.createElement('div');
      btnDiv.classList.add('btnDiv')
      

      // Append book information to the card
      card.appendChild(title);
      card.appendChild(author);
      card.appendChild(pages);
      card.appendChild(readStatus);
      card.appendChild(btnDiv);
      btnDiv.appendChild(editBtn);
      btnDiv.appendChild(removeButton);
  
      // Append the card to the books container
      booksContainer.appendChild(card);
    }
}

// Function to toggle the read status of a book
function toggleReadStatus(event) {
    const index = event.target.getAttribute("data-edit"); // Get the index from the data-attribute
    const book = myLibrary[index]; // Get the book object from the library array
    book.toggleReadStatus();  // Toggle the read status using the Book prototype function
    displayBooks(myLibrary); // Redisplay the updated library
  }



// Function to remove a book from the library
function removeBook(event) {
    const index = event.target.getAttribute("data-remove"); // Get the index from the data-attribute
    myLibrary.splice(index, 1); // Remove the book from the library array
    displayBooks(myLibrary); // Redisplay the updated library
}

document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let newTitle = document.getElementById('title').value;
    let newAuthor = document.getElementById('author').value;
    let newPages = document.getElementById('pages').value;
    let haveRead = document.querySelector('input[name="have-read"]:checked').value;

    myLibrary.push(new Book (newTitle, newAuthor, newPages, haveRead));
    displayBooks(myLibrary);

    document.getElementById('myForm').reset();
});

displayBooks(myLibrary);

