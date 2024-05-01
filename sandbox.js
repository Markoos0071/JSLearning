// //can change
// let age = 25;
// var score = 75;

// //cannot change
// const points = 100;

// console.log(age);
// console.log(score);
// console.log(points);

// //NUMBERS
// let radius = 10;
// const pi = 3.14;

//Math operators + - * /, **, %
//let result = radius % 3;
//let result = pi * radius ** 2;
//console.log(result);

// let likes = 10;
// likes++;
// likes--;
// likes += 10;
// likes -= 5;
// likes *= 2;
// likes /= 2;
// console.log(likes);

// let result = "the blog has " + likes + " likes.";
// console.log(result);

// //STRINGS
// console.log("points");
// let email = "email@email.email";
// console.log(email);

// //string concatenation
// let firstName = "First";
// let lastName = "Last";
// let fullName = firstName + " " + lastName;
// console.log(fullName);

// //getting characters
// console.log(fullName[0]);

// //string length
// console.log(fullName.length);

// //string methods
// console.log(fullName.toUpperCase());
// let result = fullName.toLowerCase();
// console.log(result, fullName);

// let index = email.indexOf("@");
// console.log(index);

// //Common String Methods
// let email = "email@email.email";
//let result = email.lastIndexOf("l");
//let result = email.slice(0, 5);
//let result = email.substring(10, 15);
//let result = email.replace("e", "H");
//let result = email.replace('@', 'k');
//console.log(result);

// //Template Strings
// const title = "Title";
// const author = "Author";
// const likes = 30;

// //Concatenations Way
// let result =
//   "The blog called " + title + " by " + author + " has " + likes + " likes. ";
// console.log(result);

// //Template String Way
// let result = `The blog called ${title} by ${author} has ${likes} likes`;
// console.log(result);

// //Making HTML Templates
// let html = `
//  <h2>${title}</h2>
//  <p>${author}</p>
//  <span>This blog has ${likes} likes.</span>
// `;
// console.log(html);

// //ARRAYS
// //Array Methods
// .join Joins array together with a character
// .indexOf Finds index of array item
// .concat Concatenates values together
// .push Adds a value to the array
// .pop Removes a value from the array

// //Undefined is strict
//let age;

// //Null can take on the value of 0
// let age = null;

// console.log(age, age + 3, `the age is ${age}`);

//Type Conversion
// let score = "100";

// score = Number(score);
// console.log(score + 1);
// console.log(typeof score);

// let result = Number("hello");
// let stringResult = String(50);
// let booleanResult = Boolean(100); //<- same with strings
// let falseBooleanResult = Boolean(0); //<- same with empty strings
// console.log(result);
// console.log(stringResult, typeof stringResult);
// console.log(booleanResult, typeof booleanResult);
// console.log(falseBooleanResult, typeof falseBooleanResult);
