/*
// variables //

var myName = "Tom";
console.log(myName); // Output : Tom

let age = 28;
console.log(age); // Output : 28

const MAKE = "BMW";
console.log(MAKE); // Output : BMW

// Data Types

let greetings = "Hello, World!";
console.log(typeof greetings);

let isHappy = true;
console.log(isHappy);
console.log(typeof isHappy); // Output : boolean

let someVar;
console.log(typeof someVar); // Output : Undefined

let emptyValue = null;
console.log(typeof emptyValue); //Output : null

// Object

let person = {
    firstName: "Tom Christer",
    lastName: "Schoon",
    age: 28
}

console.log(person);
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);

let car = {
    carType: "Volvo",
    year: "1992",
    condition: "used",
    price: 10000
};

console.log(car);
console.log(car.carType);
console.log(car.year);
console.log(car.condition);
console.log(car.price);

console.log(car.carType);
console.log("I have a "
    + car.carType + " and its "
    + car.condition + " and so on");
console.log(`I have a ${car.carType} and its ${car.condition} and the price is ${car.price}`);

console.log(car["carType"])

// Array

let colors = ["Red", "Green", "Blue"];

let random = [
    55656,
    "Green",
    { name: "Tom", age: 28},
    ["Boy", "Girl", "Etc"]
];

console.log(random[0]); // first item in the array

console.log(random[1]); // second item in the array


// 3. Type Conversion

let year = "1992"; // String
console.log(year);

// from string to number

let convertedYear = parseInt(year);
console.log(convertedYear);

// Convert from number to string

/!*let num = 123;
console.log(num.toString())

let convertedNumber = num.toString();
console.log(convertedNumber)*!/

var city = "Oslo";
console.log(city)

let myAge = 28;
console.log(myAge)

const birthYear = 1995;
console.log(birthYear)

let greeting = "This is a greeting";
console.log(greeting)

let quantity = 1995;
console.log(quantity)

let isJavaScriptFun = true;
console.log(isJavaScriptFun);
console.log(typeof isJavaScriptFun);

let thisIsUndefined;
console.log(typeof thisIsUndefined);

let emptyValueSecond = null;
console.log(typeof emptyValueSecond);

let num = 25;
console.log(num.toString())

let convertedNumber = num.toString();
console.log(convertedNumber)

let num2 = 50;
console.log(num2)

let convertedNumber2 = num2.toString();
console.log(convertedNumber2)

let numString = num + num2;
console.log(numString.toString())*/














// Example array
let originalArray = ["Book1", "Book2", "Book3", "Book4", "Book5", "Book6"];

// Function to split array into chunks
function splitArray(array, chunkSize) {
    let result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        result.push(array.slice(i, i + chunkSize));
    }
    return result;
}

// Split the original array into chunks of size 2
let splitArrays = splitArray(originalArray, 2);

console.log(splitArrays);





























const games = ["MW1", "MW2", "MW3", "MW4", "MW5", "MW6"];

function splitGames (games, chunks) {
    let result = [];
    for (let i = 0; i < games.length; i += chunks) {
        result.push(games.slice(i, i, chunks));
    }
    return result;
}

let splittedGames = splitGames(games, 2);
console.log(splittedGames);