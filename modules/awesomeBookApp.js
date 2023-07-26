import Book from './book.js';

class AwesomeBookApp {
  constructor() {
    this.booksCollection = [];
    this.addBookButton = document.getElementById('addBookBtn');
    this.titleInput = document.getElementById('titleInput');
    this.authorInput = document.getElementById('authorInput');
    this.bookListDiv = document.getElementById('bookList');

    this.addBookButton.addEventListener('click', this.addBook.bind(this));

    this.displayBooks();
  }

  addBook() {
    const title = this.titleInput.value.trim();
    const author = this.authorInput.value.trim();

    if (title !== '' && author !== '') {
      const newBook = new Book(title, author);
      this.booksCollection.push(newBook);

      this.titleInput.value = '';
      this.authorInput.value = '';

      this.displayBooks();
    }
  }

  removeBook(bookIndex) {
    this.booksCollection.splice(bookIndex, 1);
    this.displayBooks();
  }

  displayBooks() {
    this.bookListDiv.innerHTML = '';

    this.booksCollection.forEach((book) => {
      const listItem = document.createElement('li');
      const bookElement = document.createElement('p');
      bookElement.classList.add('para');
      bookElement.textContent = `"${book.title}" by ${book.author}`;

      const removeButton = document.createElement('button');
      removeButton.classList.add('remove-btn');
      removeButton.textContent = 'Remove';
      removeButton.addEventListener('click', () => {
        this.removeBook(this.booksCollection.indexOf(book));
      });

      listItem.appendChild(bookElement);
      listItem.appendChild(removeButton);
      this.bookListDiv.appendChild(listItem);
    });
  }
}

export default AwesomeBookApp;
