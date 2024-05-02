//Async/Await = Async - Makes a function return a promise
//                    - Start something now and finish it later
//                    - Async allows for cod eto not be blocked
//              Await - Makes an async function wait for a promise
//
//Allows asynchronous code to be written in a synchronous manner
//Async does not have to resolve or reject parameters
//Everything after Await is placed in and event queue

//Code from Net Ninja
//Example of what async does
// setTimeout(() => {
//     console.log('Callback fired')
// }, 2000);

//HTTP Requests

// const getTodos = (resource, callback) => {

//     return new Promise((resolve, reject) => {
//         const request = new XMLHttpRequest();

//         request.addEventListener('readystatechange', () => {
//             // console.log(request, request.readyState);
//             if(request.readyState === 4 && request.status === 200){
//                 const data = JSON.parse(request.responseText);
//                 resolve(data)
//             }
//             else if(request.readyState === 4){
//                 reject('Error getting resource')
//             }
//         });
        
//         //request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
//         request.open('GET', resource);
//         request.send();
//     });

// };

//Promise chaining
// getTodos('todos/todos.json').then(data => {
//     console.log('promise resolved', data);
//     return getTodos('todos/todonts.json');
// }).then (data => {
//     console.log('promise 2 resolved', data)
//     return getTodos('todos/tos.json');
// }).then(data => {
//     console.log('promise 3 resolved', data);
// }).catch(err => {
//     console.log('promise rejected', err)
// })

//Callback Hell
// getTodos('todos/todos.json', (err, data) => {
//     console.log(data);
//     getTodos('todos/todonts.json', (err, data) => {
//         console.log(data)
//         getTodos('todos/tos.json', (err, data) => {
//             console.log(data)
//         })
//     })
// });

// //Promises Example
// const getSomething = () => {

//     return new Promise((resolve, reject) => {
//         //Fetch data
//         //No error = resolve
//         //Error = reject
//         //resolve('some data');
//         //reject('some error');
//     });
//}

//First callback resolves and the second one rejects
// getSomething().then((data) =>{
//     console.log(data)
// }, (err) => {
//     console.log(err)
// })

// //Easier version of above
// getSomething().then(data => {
//     console.log(data)
// }).catch(err => {
//     console.log(err)
// })


//FETCH THANK YOU GOD WHY WAS XMLHTTP IN THAT TUTORIAL

// fetch('todos/todos.json').then((response) =>{
//     console.log('Resolved', response)
//     return response.json();
// }).then(data => {
//     console.log(data)
// }).catch((reject) =>{
//     console.log('Rejected', err)
// });


//ASYNC AND AWAIT FINALLY

const getTodos = async () => {

    const response = await fetch('todos/todos.json');

    if(response.status !== 200){
        throw new Error('Cannot fetch data');
    }

    const data = await response.json();
    return data;

};

getTodos()
    .then(data => console.log('Resolved', data))
    .catch(err => console.log('Rejected', err.message));