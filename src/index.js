// function divides(num1, num2) {
//   return num1 % num2 === 0;
// }

// Convert the above function to arrow function
const divides = (num1, num2) => num1 % num2 === 0;
console.log(divides(33, 3));

// Write a function that converts Fahrenheit to Celsius
const convertFToC = (FTemp) => ((FTemp - 32) * 5) / 9;
console.log(convertFToC(10));

// Convert the python function below to a javascript function

// def pairs_with_given_sum(numbers, target):
//     total = 0
//     for i in range(len(numbers)-1):
//         for j in range(i+1, len(numbers)):
//             if numbers[i]+numbers[j] == target:
//                 total += 1
//     return total

const pairsWithGivenSum = (numbers, target) => {
  let total = 0;

  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        total += 1;
      }
    }
  }
  return total;
};

console.log(pairsWithGivenSum([1, 2, 3, 4, 5, 6], 7));

// Using the setInterval function (described below), register a callback function to be called every second.
// Consider printing some output so that you can see that the callback is running.
// setInterval is very similar to the setTimeout function described in Learn, taking the form
//
// setInterval(callBackFunction, intervalInMs)
//   callBackFunction is a reference to the function to be run periodically
//   intervalInMs is how much time should pass between calls to callBackFunction (in millisecond units)
//
// Check out the MDN documentation for setInterval (and setTimeout) for additional details

// add your call here
const callBackFunction = () => console.log('Hello!');
setInterval(callBackFunction, 1000);
