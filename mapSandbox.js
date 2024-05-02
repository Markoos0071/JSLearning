//Difference between map and forEach
//The main difference between map and forEach is that map 
//returns a new array with the results of the function, 
//while forEach does not return anything and only modifies 
//the original array

//The map method receives a function as a parameter. 
//Then it applies it on each element and returns an entirely 
//new array populated with the results of calling the provided 
//function. 

//map() is chainable. This means that you can attach reduce(), 
//sort(), filter() and so on after performing a map() 
//method on an array. 

//If you don't use the return value of map(), use forEach() 
//or a for...of loop instead.


// const myAwesomeArray = [5, 4, 3, 2, 1]

// myAwesomeArray.map(x => x * x)

// >>>>>>>>>>>>>>>>> Output: [25, 16, 9, 4, 1]

// const myAwesomeArray = [1, 2, 3, 4, 5]
// myAwesomeArray.forEach(x => x * x)
// //>>>>>>>>>>>>>return value: undefined

// myAwesomeArray.map(x => x * x)
// //>>>>>>>>>>>>>return value: [1, 4, 9, 16, 25]


// const kvArray = [
//     { key: 1, value: 10 },
//     { key: 2, value: 20 },
//     { key: 3, value: 30 },
//   ];
  
//   const reformattedArray = kvArray.map(({ key, value }) => ({ [key]: value }));
  
//   console.log(reformattedArray); // [{ 1: 10 }, { 2: 20 }, { 3: 30 }]
//   console.log(kvArray);
  // [
  //   { key: 1, value: 10 },
  //   { key: 2, value: 20 },
  //   { key: 3, value: 30 }
  // ]
  