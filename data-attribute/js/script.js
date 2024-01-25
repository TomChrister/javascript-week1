const article = document.querySelector("#post");


const author = article.dataset.author;
const category = article.dataset.category;
console.log(author);
console.log(category);


const showPostBtn = document.querySelector("#show-post-details");
console.log(showPostBtn);


const postImg = document.querySelector("img");
console.log(postImg);

postImg.addEventListener("click", function (){
   window.open(postImg.dataset.fullsize);
});



showPostBtn.addEventListener("click", function () {
    alert(`The book author is : ${article.dataset.author} and the category of the book is
    ${article.dataset.category}`)

});

/*
showPostBtn.onclick = function () {
    showBookDetail(article.dataset.author, article.dataset.category);
}

function showBookDetail (author, category){
    alert(`The book author is : ${author} and the category of the book is
    ${category}`)
}*/
