// Arrays

const fruits = ["Apple", "Blueberry", "Watermelon", "Oranges"];
console.log(fruits.length);

fruits.push("Mango"); // adding new item to the array
console.log(fruits);

fruits.unshift("Grapes") // adding new item in the beginning
console.log(fruits);

// remove the last item in the array
fruits.pop();
console.log(fruits);

fruits.shift();
console.log(fruits);

const numbers = [3, 4, 99, 88, 54, 5];
numbers.sort();
console.log(numbers);

let animal = "dog";
console.log(animal.length);


const cars = ["bmw", "toyota", "volvo"];
console.log(cars.indexOf("toyota"));

const user = {
    name: "Monde",
    age: 30,
    job: "Software Engineer",
    wealth: 123213
}

console.log(user);

const books = [
    {
        title: "The hobbit",
        author: "Tolkien",
        pages: 200
    },
    {   title: "Fellowship of the ring",
        author: "Tolkien",
        pages: 400
    },
    {
        title: "The two towers",
        author: "Tolkien",
        pages: 500
    }
]

console.log(books[0]);

const searchBook = books.find(function (book) {
    return book.title === "Fellowship of the ring";
})
console.log(searchBook)