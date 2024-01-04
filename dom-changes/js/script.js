// Select the heading h2

// querySelector
// querySelectorAll
// getElementById

const heading2 = document.querySelector("h2");
console.log(heading2);

// 2. select element with class .heading2

const headingByClass = document.querySelector(".heading2");
console.log(headingByClass);

// 3. select element with id #using querySelector

const list = document.querySelector("#list");
console.log(list);

// 4. select element with id #list using getElementById

const list2 = document.getElementById("list");
console.log(list2);

const listItem = document.querySelector("li");
console.log(listItem);

// 5. select multiple li

const listItems = document.querySelectorAll("li");
console.log(listItem);

// 6. select the h1 and change the color to be red

const heading1 = document.querySelector("h1");
console.log("first heading: ",heading1);
heading1.style.color = "red";
heading1.style.border = "5px solid green";
heading1.style.padding = "1rem";
heading1.style.backgroundColor = "blue";

// select the div and add a class .container to it

const myDiv = document.querySelector("div");
console.dir(myDiv);

myDiv.classList.add("container");

// change the heading text

heading1.innerHTML = "Hello Tom";

                      //  0       1       2
const myArrayOfNames = ["hesh", "tom", "marius", "matija"];
/*console.log(myArrayOfNames[0]);
console.log(myArrayOfNames[1]);
console.log(myArrayOfNames[2]);
console.log(myArrayOfNames[3]);*/

for(let i = 0; i < myArrayOfNames.length; i++){
    console.log(myArrayOfNames[i]);
}

// Arithmetic Operators

// = + ++

// Addition

// 10 + 5 = 15

let sum = 10 + 5;
console.log(sum)

// Subtraction ( - )
// 10 - 5 = 5

let difference = 10 - 5;
console.log(difference);

// Multiplication
// 10 * 5 = 50

let product = 10 * 5;
console.log(product);

// division
// 10 / 5 = 2

let result = 10 / 5;
console.log(result);

// modulus

let remainder = 10 % 4;
console.log(remainder);

// simple operators

// simple assigment

let a = 5;

// addition assignment (+=)

let b = 10;

b += 5 // b is now 15
b = b + 5;

// subtraction assignment (-=)

let  c = 15;
c -= 5; // 10
c = c -5; //10

//comparison operators
// equal to (==)

let isEqual = (5 == "5");
// true
console.log(isEqual);

// strict equal (===)
let isStrictEqual = (5 === "5");
console.log(isStrictEqual);

// not equal (!=)
// 5! = 6 / true

let isNotEqual = (5 != "6"); // true
console.log(isNotEqual);

// greater than (>)
// 10 > 5 // true

let isGreaterThan = (10 > 5);
console.log(isGreaterThan);

// <
// >=
// <=

// AND // ||

(true && true) // false
    (true && false) // false
    (true && false) // false
    (true || false || false) // true
