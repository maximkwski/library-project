class Book {
    constructor(title, author, pages, readStatus) {
      this.title = title;
      this.author = author;
      this.pages = pages;
      this.readStatus = readStatus;
    }

}

const myLibrary = [
    new Book ('The Seven Husbands of Evelyn Hugo', 'Taylor Jenkins Reid', 320, 'Finished'),
    new Book ('To Kill a Mockingbird', 'Harper Lee',421, 'Not Read Yet'),
    new Book ('The Alchemist', 'Paulo Coelho', 288, 'Not Read Yet'),
];

let books = JSON.parse(localStorage.getItem('books')) || myLibrary;


function saveBooks() {
  localStorage.setItem('books', JSON.stringify(books));
}

function getBooks() {
  return books;
}

function addBook(book) {
  books.push(book);
  saveBooks();
}

function deleteBook(book) {
  books = books.filter(t => t != book);
  saveBooks();
}



function displayBooks() {
      let booksContainer = document.getElementById('books-collection');

      const burgerMenu = document.createElement('div');
      burgerMenu.classList.add('burger-menu');
      burgerMenu.id = 'burger';
      for (let i = 0; i < 3; i++) {
          const bar = document.createElement('span');
          bar.classList.add('bar');
          burgerMenu.appendChild(bar);
      }
      const header = document.querySelector('.header')
      header.appendChild(burgerMenu);

    
      // Clear any existing content in the container
      booksContainer.innerHTML = '';
      // Loop through the array of book objects
      books.forEach(book => {
        let bookIndex = books.indexOf(book);
        
    
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
        removeButton.id = 'remove';
        removeButton.setAttribute("data-remove", bookIndex); // Set data-attribute with the index
  
        const editBtn = document.createElement("button");
        editBtn.innerHTML = "Edit Status";
        editBtn.setAttribute("data-edit", bookIndex);
      
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

        
        removeButton.addEventListener('click', e => {
          deleteBook(book);
          console.log(books);
          displayBooks();
        })

        editBtn.addEventListener('click', e => {
          if (book.readStatus === 'Not Read Yet') {
            book.readStatus = 'In Process';
          } else if (book.readStatus === 'In Process') {
            book.readStatus = 'Finished';
          } else if (book.readStatus === 'Finished') {
            book.readStatus = 'Not Read Yet';
          }
          saveBooks();
          displayBooks();
        });


      });

      burgerMenu.addEventListener("click", () => {
        const formDiv = document.querySelector('.form-container');
        formDiv.classList.toggle("active");
        burgerMenu.classList.toggle("burg-active");
        console.log('click');

      });
      
      
    return  booksContainer;
}


document.getElementById("myForm").addEventListener("submit", e => {
  e.preventDefault();

 
  let newTitle = document.getElementById('title').value;
  let newAuthor = document.getElementById('author').value;
  let newPages = document.getElementById('pages').value;
  let haveRead = document.querySelector('input[name="have-read"]:checked').value;

  books.push(new Book (newTitle, newAuthor, newPages, haveRead));
  saveBooks();
  displayBooks();

  e.target.reset();

});
 
displayBooks();

