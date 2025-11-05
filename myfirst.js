// function myDisplayer(something) {
//   document.getElementById("demo").innerHTML = something;
// }

// function myCalculator(num1, num2, myCallback) {
//   let sum = num1 + num2;
//   const value = myCallback(sum);
//   return value;
// }

// const value = myCalculator(5, 5, (sum) => {
//   return sum * 2;
// });

// console.log(value);
// console.log('Start');
// setTimeout(myFunction, 1000);
// setInterval(() => {
//   console.log("interval set")
// }, 1000);

// function myFunction() {
//   console.log('lorem ipsum');
// }
// console.log('Hello World!');

let myArray = [1,2,3,4,5,6,7,8,9,0];

function array_map(func, arr){
  let myArray = arr;
  let emptyArray = [];
  for (let index = 0; index < myArray.length; index++) {
    emptyArray += [func(myArray[index])];    
  }

  return emptyArray;
};

const mappedArray = array_map((item)=>{
  return [item + item];
}, myArray);

console.log(mappedArray);
