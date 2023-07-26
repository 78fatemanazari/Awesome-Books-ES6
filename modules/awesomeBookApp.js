import { DateTime } from '../node_modules/luxon/src/luxon.js';
import Book from './book.js';

class AwesomeBookApp {
  constructor() {
    this.booksCollection = AwesomeBookApp.getBooksFromLocalStorage();

    this.addBookButton = document.getElementById('addBookBtn');
    this.addBookButton.addEventListener('click', this.handleAddBook.bind(this));

    this.bookListDiv = document.getElementById('bookList');
    this.displayBooks();
  }

  storeBooksInLocalStorage() {
    const booksJSON = JSON.stringify(this.booksCollection);

    localStorage.setItem('books', booksJSON);
  }

  static getBooksFromLocalStorage() {
    const booksJSON = localStorage.getItem('books');

    return booksJSON ? JSON.parse(booksJSON) : [];
  }

  addBook(title, author) {
    if (title !== '' && author !== '') {
      const newBook = new Book(title, author);
      this.booksCollection.push(newBook);

      this.storeBooksInLocalStorage();

      this.displayBooks();
    }
  }

  removeBook(bookIndex) {
    this.booksCollection.splice(bookIndex, 1);

    this.storeBooksInLocalStorage();

    this.displayBooks();
  }

  handleAddBook() {
    const titleInput = document.getElementById('titleInput');
    const authorInput = document.getElementById('authorInput');
    const title = titleInput.value;
    const author = authorInput.value;

    this.addBook(title, author);

    titleInput.value = '';
    authorInput.value = '';
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
    const now = DateTime.now();
    const formattedDateTime = now.toLocaleString(DateTime.DATETIME_MED);

    const currentDateTimeElement = document.getElementById('currentDateTime');
    currentDateTimeElement.textContent = `Current Date and Time: ${formattedDateTime}`;
  }
}

export default AwesomeBookApp;
