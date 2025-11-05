const myArray = [1, 2, { body: "some body", about: "some about" }];
// let result = [];
// myArray.forEach((arr, index) => {
//   result.push(arr);
// });

// console.log(result);

function ForEach(callback, array) {
  for (let index = 0; index < array.length; index++) {
    callback(index, array[index]);
  }
}

ForEach((index, indexValue) => {
  console.log(indexValue)
}, myArray);
