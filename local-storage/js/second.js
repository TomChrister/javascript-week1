const myName = "name";

console.log(myName);

window.localStorage.getItem("Name");


const myCar = window.localStorage.getItem("myCar");
console.log(myCar);


const myCarParsed = JSON.parse(myCar);

console.log(myCarParsed);