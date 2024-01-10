/*
let news = [
    {
        headline: "Watch Hesh landing on the moon",
        summary: "He landed with his super suit"
    },
    {
        headline: "Watch Tom fly",
        summary: "He flew faster than Superman"
    },
    {
        headline: "Watch Gru saying hello",
        summary: "He spoke for the first time"
    }
];

console.log(news);

const newsContainer = document.querySelector(".news");
console.log(newsContainer);

let html = "";

const allNewsArticle = news.length;
console.log(allNewsArticle);

for (let i = 0; i < allNewsArticle; i++) {
    console.log(news[i].headline);
    console.log(news[i].summary);

    html += `
    <div class="container">
        <h2>${news[i].headline}</h2>
        <p>${news[i].summary}</p>
    </div>
    `;
}

newsContainer.innerHTML = html*/




const cats = [
    {
        name: "Tom",
        age: 2
    },
    {
        name: "Jerry",
        age: 3
    },
    {
        name: "Marokk",
        age: 4
    }
];

function getName (list) {
    for (let i = 0; i < list.length; i++){
        console.log(list[i].name);
    }
}

/*
for (let i = 0; i < cats.length; i++) {
    console.log(cats[i].name);
}*/

getName(cats);

const dogs = [
    {
        name: "Matija",
        age: 2
    },
    {
        name: "Perry",
        age: 3
    },
    {
        name: "Cruise",
        age: 4
    }
];

getName(dogs);

function createShoppingList(shoppingList) {
    let myShoppingListItems = "";

    for (let i = 0; i < shoppingList.length; i++){
        myShoppingListItems += `
            <div>
            <h2>${shoppingList[i].name}</h2>
            <h2>${shoppingList[i].price}</h2>
</div
        `
    }
    return myShoppingListItems
}

let lineShoppingList = [
    {
        name: "orange juice",
        price: 10
    },
    {
        name: "chocolate",
        price: 15
    }
]

const lineShoppingListContainer = document.querySelector(".line-shopping-list");

lineShoppingListContainer.innerHTML = createShoppingList(lineShoppingList);