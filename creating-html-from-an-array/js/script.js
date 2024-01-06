const pets = [
    {
        type: null,
        colour: "brown",
        age: 10,
        friendly: true,
    },
    {
        colour: "orange",
        age: 7,
        friendly: false,
    },
    {
        type: "duck",
        colour: "#00ff00",
        age: 20,
        friendly: false,
    },
];
// Select the pet-container class
const petContainer = document.querySelector(".pet-container");
console.log("petContainer", petContainer)

// Create a html variable to hold our html in it when we use the loop
let html = "";

// Loop over the array
const totalItemsOfPet = pets.length;
console.log(totalItemsOfPet);

for (let i = 0; i < totalItemsOfPet; i++) {
    console.log(pets[i].colour);
    console.log(pets[i].age)

    html += `
                <div><p>Color: ${pets[i].colour}</p></div>
    `;
}



// change the innerHTML of the pet container