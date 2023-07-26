const lists = document.getElementById('lists');
const addBooks = document.getElementById('add-books');
const contact = document.getElementById('contact');
const bookLists = document.getElementById('book-lists');
const books = document.getElementById('books');
const contactInformation = document.getElementById('contact-info');

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class AwesomeBookApp {
  constructor() {
    this.booksCollection = [];
    this.addBookButton = document.querySelector("#addBookBtn");
    this.titleInput = document.getElementById("titleInput");
    this.authorInput = document.getElementById("authorInput");
    this.bookListDiv = document.getElementById("bookList");

    this.addBookButton.addEventListener("click", this.addBook.bind(this));
    this.displayBooks();
  }

  addBook = () => {
    const title = this.titleInput.value.trim();
    const author = this.authorInput.value.trim();

    if (title !== "" && author !== "") {
      const newBook = new Book(title, author);
      this.booksCollection.push(newBook);

      this.titleInput.value = "";
      this.authorInput.value = "";

      this.displayBooks();
    }
  }

  removeBook = (bookIndex) => {
    this.booksCollection.splice(bookIndex, 1);
    this.displayBooks();
  }

  displayBooks = () => {
    this.bookListDiv.innerHTML = ""; // Clear the existing list

    for (const book of this.booksCollection) {
      const listItem = document.createElement("li"); // Create a new <li> element

      const bookElement = document.createElement("p");
      bookElement.classList.add('para');
      bookElement.textContent = `"${book.title}" by ${book.author}`;

      const removeButton = document.createElement("button");
      removeButton.classList.add('remove-btn');
      removeButton.textContent = "Remove";
      removeButton.addEventListener("click", () => {
        this.removeBook(this.booksCollection.indexOf(book));
      });

      listItem.appendChild(bookElement); // Append the <p> element to the <li> element
      listItem.appendChild(removeButton); // Append the <button> element to the <li> element

      this.bookListDiv.appendChild(listItem); // Finally, append the <li> element to the bookListDiv
    }

    const now = new Date();
    const formattedDateTime = now.toLocaleString();

    // Update the content of the "currentDateTime" element
    const currentDateTimeElement = document.getElementById("currentDateTime");
    currentDateTimeElement.classList.add('date-time');
    currentDateTimeElement.textContent = formattedDateTime;
  }
}

// Initialize the app
const app = new AwesomeBookApp();

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

// Arrow function for showing content
const showContent = (contentToShow) => {
  // Hide all content sections first
  bookLists.classList.remove('show');
  books.classList.remove('show');
  contactInformation.classList.remove('show');

  // Show the content section that was passed as an argument
  contentToShow.classList.add('show');
};
