fetch(`https://api.noroff.dev/api/v1/square-eyes`)
.then((Response) => Response.json())
.then((json) => console.log(json));

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => response.json())
    .then((json) => console.log(json));
// Logs:
// {
// 	"userId": 1,
// 	"id": 1,
// 	"title": "delectus aut autem",
// 	"completed": false
// }

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then((response) => response.json())
    .then((json) => console.log(json));