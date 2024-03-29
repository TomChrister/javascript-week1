import products from "./data/products.js";

const  productContainer = document.querySelector(".products-container");

/*
getExistingFavs()
*/

for (let i = 0; i < products.length; i++) {
    productContainer.innerHTML += `
    <div class="product">
            <img src="https://picsum.photos/180" alt="random photo">
            <h3>${products[i].name}</h3>
            <h4>${products[i].price}</h4>
            <span class="heart-container">
                <svg class="heart"
                    data-name="${products[i].name}"
                    data-id="${products[i].id}"
                    data-price="${products[i].price}"
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
            </span>
        </div>
    `;
}

// 3. check if any of the fav btn clicked
const favourites = document.querySelectorAll(".heart");

/*function handleClick(event) {
    event.target.classList.toggle("active-heart");
}*/

/*
const mySavedFavs = getExistingFavs();
*/

let favs = [];
for (let x = 0; x < favourites.length; x++) {
    favourites[x].addEventListener("click", function () {
        this.classList.toggle("active-heart");

        let fav = {
            name: this.dataset.name,
            id: this.dataset.id,
            price: this.dataset.price
        };

        if (!favs.some(item => item.id === fav.id)) {
            favs.push(fav);
            window.localStorage.setItem("favourites", JSON.stringify(favs));
        } else {
            favs = favs.filter(item => item.id !== fav.id);
            window.localStorage.setItem("favourites", JSON.stringify(favs));
        }

    });
}

/*
function getExistingFavs (){
    const savedFavs = window.localStorage.getItem("favourites");
    if (!savedFavs){
        return []
    } else {
        return JSON.parse(savedFavs);
    }
}*/
