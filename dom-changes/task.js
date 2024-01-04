let addItemButton = document.getElementById('addItemButton');
let itemList = document.getElementById('itemList');

addItemButton.addEventListener('click', function () {
    // Create a new list item
    let newItem = document.createElement('li');

    // Set the text content of the new item
    newItem.textContent = 'New Item ' + getRandomInt(100);

    // Append the new item to the list
    itemList.appendChild(newItem);
});

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

console.log(getRandomInt(3));
// Expected output: 0, 1 or 2

console.log(getRandomInt(1));
// Expected output: 0

console.log(Math.random());
// Expected output: a number from 0 to <1