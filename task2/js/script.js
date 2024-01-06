const books = [
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        available: true
    },
    {
        title: "1984",
        author: "George Orwell",
        available: false
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        available: true
    }
];

const bookContainer = document.querySelector(".book-container");
console.log(bookContainer)

let html = "";

const totalItemsOfBooks = books.length;
console.log(totalItemsOfBooks);

for (let i = 0; i < totalItemsOfBooks; i++) {
    console.log(books[i].title);
    console.log(books[i].author);
    console.log(books[i].available);

    html += `
    <div class="book">
        <h2>Title: ${books[i].title}</h2>
        <p>Author: ${books[i].author}</p>
        <p>Available: ${books[i].available}</p>
        
    </div>
`;
}

bookContainer.innerHTML = html;