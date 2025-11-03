function myDisplayer(something) {
  document.getElementById("demo").innerHTML = something;
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  const value = myCallback(sum);
  return value;
}

const value = myCalculator(5, 5, (sum) => {
  return sum * 2;
});

console.log(value);
