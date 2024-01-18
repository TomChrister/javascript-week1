const someFunction = function () {
    console.log("Hello Tom");
}

saySomethingFunction();

function saySomethingFunction () {
    console.log("Hello Hesh");
}

saySomethingFunction();


const button = document.querySelector(".btn");

console.log(button);

// Way 1

button.addEventListener("click", function () {
    console.log("You clicked me")
});

button.addEventListener("Click", handleClick);

function handleClick () {
    console.log("You clicked me");
}

// Way 2

button.onclick = function () {
    console.log("You clicked me")
}

button.onclick = function (event) {
    console.log(event.target.value);
    console.log(this.value)
}



const myFirstNameInput = document.querySelector("#firstName");

console.log("myFirstNameInput", myFirstNameInput);

const handleKeyPress = function (event) {
    console.log("A key is pressed");
    console.log(this.value);
    console.log(event.target.value);
}

myFirstNameInput.addEventListener("Keydown", handleKeyPress);

const theHoverBtn = document.querySelector(".pet-btn");

const handleMouseOver = function (event) {
    console.log("event.target.dataset.animal", event.target.dataset.animal);
    event.target.style.backgroundColor = "red"
}

// Hover event (detecting hover)

theHoverBtn.addEventListener("mouseover", handleMouseOver);

const handleMouseOut = function (event) {
    console.log("event.target.dataset.animal", event.target.dataset.animal);
    event.target.style.backgroundColor = "white"
}

theHoverBtn.addEventListener("mouseout", handleMouseOut);



