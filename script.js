













// Example array
let originalArray = ["Book1", "Book2", "Book3", "Book4", "Book5", "Book6"];

// Function to split array into chunks
function splitArray(array, chunkSize) {
    let result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        result.push(array.slice(i, i + chunkSize));
    }
    return result;
}

// Split the original array into chunks of size 2
let splitArrays = splitArray(originalArray, 2);

console.log(splitArrays);













let games = ["MW1", "MW2", "MW3", "MW4", "MW5", "MW6"];

function splitGames (games, chunks) {
    let result = [];
    for (let i = 0; i < games.length; i += chunks) {
        result.push(games.slice(i, i + chunks));
    }
    return result;
}

let splitGame = splitGames(games, 2);

console.log(splitGame);