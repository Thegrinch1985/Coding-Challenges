

// Given an array of integers and a value, determine if
//  there are any two integers in the array whose sum is 
// equal to the given value. Return true if the sum exists and return false if it does not.

let findSumOfTwo = function(arrayOfNumbers, target) {
    let foundValues = new Set();
    for (let a in arrayOfNumbers) {
      if (foundValues.has(target - arrayOfNumbers[a])) {
        return true;
      }
  
      foundValues.add(arrayOfNumbers[a]);
    }
  
    return false;
  };
  
  let v = [5, 7, 1, 2, 8, 4, 3];
  let test = [3, 20, 1, 2, 7];
  
  for (i = 0; i < test.length; i++) {
    let output = findSumOfTwo(v, test[i]);
    console.log("findSumOfTwo(v, " + test[i] + ") = " + output);
  }