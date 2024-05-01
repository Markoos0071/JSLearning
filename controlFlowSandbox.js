// For Loops

// for (let i = 0; i < 5; i++) {
//   console.log("Hey", i);
// }

//const names = ["John", "Sean", "Lawn", "Dawn"];

// for (let i = 0; i < names.length; i++) {
//   let html = `<div>${names[i]}</div>`;
//   console.log(html);
// }

// While Loops
// let i = 0;
// while (i < names.length) {
//   console.log(names[i]);
//   i++;
// }

// Do While Loops
// let i = 5;
// do {
//   console.log(i);
//   i++;
// } while (i < 5);

//If Statements

// let result;
// const password = "p@ss";

// if (password >= 8) {
//   result = "Long enough";
// } else if (password.includes("@")) {
//   result = "good enough";
// } else {
//   result = "not long enough";
// }
// console.log(result);

// if (password >= 8 && password.includes("@")) {
//   result = "Great job";
// } else if (password >= 8 || password.includes("@")) {
//   result = "good enough";
// }
// console.log(result);

//Break and Continue

// const scores = [10, 20, 30, 40, 0, 50, 60, 100, 70, 80, 90];

// for (let i = 0; i < scores.length; i++) {
//   if (scores[i] === 0) {
//     continue;
//   }

//   console.log("your score: ", scores[i]);

//   if (scores[i] === 100) {
//     console.log("Top Score!");
//     break;
//   }
// }

//Switches (use strict comparison, strings ("50") dont equal numbers (50))

// const grade = "D";

// switch (grade.toUpperCase()) {
//   case "A":
//     console.log("Hey you're pretty smart");
//     break;
//   case "B":
//     console.log("Passing");
//     break;
//   case "C":
//     console.log("Barely Passing");
//     break;
//   case "D":
//     console.log("Fix your grade buddy");
//     break;
//   case "F":
//     console.log("Man why you failing?");
//     break;
//   default:
//     console.log("Invalid grade");
// }

//Scope
//Can redefine variables of the same name when they are in seperate code blocks
//When a variable is redefined anything that uses that defined variable inside that
//code block(scope) looks to that for a variable call.
