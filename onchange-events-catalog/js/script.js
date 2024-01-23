const dropdown = document.querySelector("#circles");
const circlesContainer = document.querySelector(".circles-container");

dropdown.onchange = function (event) {
    circlesContainer.innerHTML = "";
    for (let i = 1; i <= this.value; i++) {
        circlesContainer.innerHTML +=
            `
            <div class="circle">${i}</div>
            `
    }
}
