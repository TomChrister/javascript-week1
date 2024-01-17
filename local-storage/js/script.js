const myVariable = "Some text";

window.localStorage.setItem("Variable one", myVariable);

console.log(myVariable);

let car = {
    brand: "BMW",
    model: 1992,
    price: 2000
}
window.localStorage.setItem("myCar", JSON.stringify(car));

window.sessionStorage.setItem("fav","bmw");


let puddingFlavour = "Chocolate";
window.localStorage.setItem("Chocolate", JSON.stringify(puddingFlavour));



let coffee = {
    origin: "South Africa",
    intensity: "Medium 7"
}
window.localStorage.setItem("coffee",JSON.stringify(coffee));



let shoppingList = ["Coffee", "jam", "milk"];
window.localStorage.setItem("shoppingList", JSON.stringify(shoppingList));



