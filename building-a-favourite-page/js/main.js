import products from "./data/products.js";
console.log(products);

// 1. step select the products container
const  productContainer = document.querySelector(".products-container");

// 2. fill the container of the products

for (let i = 0; i < products.length; i++) {
    console.log("Products", products[i]);
    productContainer.innerHTML += `
    <div class="product">
            <img src="https://picsum.photos/180" alt="random photo">
            <h3>${products[i].name}</h3>
            <h4>${products[i].price}</h4>
            <span class="heart-container">
                <svg class="heart active-heart" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="purple"
                    stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
            </span>
        </div>
    `;
}

// 3. check if any of the fav btn clicked
const favourites = document.querySelectorAll("svg");
console.log("favourites", favourites);




function handleClick(event) {
    console.log("You clicked me", event.target);
    event.target.classList.toggle("active-heart");
}

for (let x = 0; x  < favourites.length; x++) {
    console.log(favourites[x]);
    favourites[x].addEventListener("click", function (){
        console.log("You clicked me", favourites[x]);
        this.classList.toggle("active-heart");
    });
}



// 4. i want to make this

// TODO I want to move my clicking event of the fav btn
//  to its own function instead of anonymous function