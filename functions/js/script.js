function addThreeNumbers (num1, num2, num3) {
    return num1 + num2 + num3;
}

let result = addThreeNumbers(10, 20, 30);
console.log("Result", result);


function multiplyThreeNumbers (num1, num2, num3) {
    return num1 + num2 + num3;
}

let productResult = multiplyThreeNumbers (13, 2432, 30);
console.log("Result", productResult);


// Change the text for the heading
// Change colors when i click the BTN



let heading = document.querySelector("h1");

let button = document.querySelector("button");

let buttonColors = document.querySelector(".colours");

let body = document.querySelector("body");

function changeHeading() {
    heading.innerHTML = "It's a good day";
    heading.style.color = "green";
    body.style.backgroundColor = "blue";
}

button.onclick = changeHeading;


function changeColors() {
    body.style.backgroundColor = "purple";
    heading.style.color = "black";
}

buttonColors.onclick = changeColors;


let catBTN = document.querySelector(".the-cat-btn");

const pet = {
    type: "cat",
    name: "titty",
    age: 10,
    isFriendly: false,
    MewMew : function () {
        console.log("Sound of the cat");
    }
};

console.dir(catBTN);
catBTN.onclick = pet.MewMew