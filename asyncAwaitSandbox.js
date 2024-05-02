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
setTimeout(() => {
    console.log('Callback fired')
}, 2000);


