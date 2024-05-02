// //Function Declaration
// // Can use hoisting (can call greet above this function code)
// function greet(){
//   console.log('hello there');
// }

// //Function Expression
// // Cannot use hoisting (cannot call speak above this function code)
// const speak = function(){
//     console.log('good day');
// };

// const speak = function(name = 'value', time = 'default'){
//     console.log(`Good ${time} ${name}`);
// };

// speak();
// speak('Bob');
// speak('Bob', 'Night');

// const calcArea = function(radius){
//     return 3.14 * radius**2;
// };

// const area = calcArea(10);
// console.log(area);


//Arrow functions (i hate these)

// //When there is one parameter you dont need the () around the parameter (radius)
// const calcArea = radius => {
//     return 3.14 * radius**2;
// };

// //IF it only ONE line of code this can be simplified even further
// const calcArea2 = radius => 3.14 * radius**2;

// //This
// const greet = function(){
//     return 'hello, world';
// };
// //Becomes this
// const greet2 = () => 'hello, world';

// //This
// const bill = function(products, tax){
//     let total = 0;
//     for(let i = 0; i < products.length; i++){
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// };
// //Becomes this
// const bill2 = (products, tax) => {
//     let total = 0;
//     for(let i = 0; i < products.length; i++){
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// };

//Methods vs Functions
//Methods use dot notation while functions get assigned to a parameter or just called
//Methods are functions that work with objects/data types

//Callbacks
// const func = (callbackFunc) => {
//     let value = 50;
//     callbackFunc(value);
// };

// func (value => {
//  console.log(value)
// });

//Foreach
let people = ['Person1', 'Person2', 'Person3', 'Person4' ]

// const logPerson = (person, index) => {
//     console.log(`${index} - hello ${person}`)
// };

// people.forEach(logPerson);

//Output to HTML
const ul = document.querySelector('.people');
let html = ``;

people.forEach(person => {
    //Create html template
    html += `<li style="color: purple">${person}</li>`
});

ul.innerHTML = html;