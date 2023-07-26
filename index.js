import AwesomeBookApp from './modules/awesomeBookApp.js';

const lists = document.getElementById('lists');
const addBooks = document.getElementById('add-books');
const contact = document.getElementById('contact');
const bookLists = document.getElementById('book-lists');
const books = document.getElementById('books');
const contactInformation = document.getElementById('contact-info');
const titleInput = document.getElementById('titleInput');
const authorInput = document.getElementById('authorInput');

const showContent = (contentToShow) => {
  bookLists.classList.remove('show');
  books.classList.remove('show');
  contactInformation.classList.remove('show');

  contentToShow.classList.add('show');
};

const app = new AwesomeBookApp();
const addBookButton = document.getElementById('addBookBtn');

addBookButton.addEventListener('click', (e) => {
  e.preventDefault();
  app.addBook(titleInput.value.trim(), authorInput.value.trim());

  titleInput.value = '';
  authorInput.value = '';
});

(() => {
  lists.addEventListener('click', (event) => {
    event.preventDefault();
    showContent(bookLists);
  });

  addBooks.addEventListener('click', (event) => {
    event.preventDefault();
    showContent(books);
  });

  contact.addEventListener('click', (event) => {
    event.preventDefault();
    showContent(contactInformation);
  });
})();
