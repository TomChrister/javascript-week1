// addEventListener
// onClick

// 1. select the body

const body = document.querySelector("body");

// 2. select the dark mode button

const darkModeBtn = document.querySelector(".mode-btn");

console.log(body);
console.log(darkModeBtn);

function init(){
    const darkMode = window.localStorage.getItem("darkMode");
    console.log("current mode", darkMode);
    if (darkMode){
        body.style.backgroundColor = "#0A0A0A";
    } else {
        body.style.backgroundColor = "#FFFFFF";
    }
}

init();

let isDarkMode = false;
console.log("isDarkMode Before", isDarkMode)
function toggleMode (){
    isDarkMode = !isDarkMode;
    // localstorage to save my isDarkMode
    window.localStorage.setItem("darkMode", isDarkMode);

    if (isDarkMode){
        body.style.backgroundColor = "#0A0A0A";
    } else {
        body.style.backgroundColor = "#FFFFFF";
    }
    body.style.backgroundColor;
    console.log("I clicked on dark mode btn", isDarkMode);
}

darkModeBtn.addEventListener("click", toggleMode);
