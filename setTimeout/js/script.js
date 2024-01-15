/*
// setTimeout

// Is a method ( function )
// that is used to execute a function
// after a specific period of time


// 1.

setTimeout(function () {
    console.log("Hello Jack");
}, 5000);


function logHello () {
    console.log("Hello Jack two");
}
setTimeout(logHello, 5000);

// 1.

const loading = document.querySelector(".loader");
console.log("loader element", loading);

// 2.

setTimeout(function () {
    loading.innerHTML = "Finished loading";
}, 5000);


const counterContainer = document.querySelector(".counter");
*/


const ad = document.querySelector(".ad");
console.log("ad", ad);

setTimeout(function () {
    ad.style.display = "flex";
}, 2000);
