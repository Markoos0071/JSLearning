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

const getTodos = (resource, callback) => {

    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            // console.log(request, request.readyState);
            if(request.readyState === 4 && request.status === 200){
                const data = JSON.parse(request.responseText);
                resolve(data)
            }
            else if(request.readyState === 4){
                reject('Error getting resource')
            }
        });
        
        //request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
        request.open('GET', resource);
        request.send();
    });

};

getTodos('todos/todos.json').then(data => {
    console.log('promise resolved', data);
}).catch(err => {
    console.log('promise rejected', err)
})

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

