# The Algorithm - "Mean Median Mode"

## Description of the algorithm

The algorithm takes an input array with numbers and, based
on the values ​​obtained from this array, an object with the average
number of all numbers in the received array, their median and mode
will be illuminated.

The algorithm is an example of functional programming.

## Example

```javascript
// The main function, inside which all other functions are called and
// a new object is formed as a result.
function meanMedianMode(array) {
  return {
    mean: getMean(array),
    median: getMedian(array),
    mode: getMode(array),
  };
}

// The function will return the average of all numbers in the array
function getMean(array) {
  // Initialize the variable of the sum of numbers
  let sum = 0;

  // Add all the numbers in the array
  array.forEach((num) => {
    sum += num;
  });

  // Divide the sum by the number of numbers in the array
  let mean = sum / array.length;
  return mean;
}

// The function will return the median of all numbers in the array
function getMedian(array) {
  // Sort an array in ascending order
  array.sort(function (a, b) {
    return a - b;
  });

  // Initialize the variable that will contain
  // the median value of all numbers
  let median;

  // Calculate the median value
  if (array.length % 2 !== 0) {
    median = array[Math.floor(array.length / 2)];
  } else {
    let mid1 = array[array.length / 2 - 1];
    let mid2 = array[array.length / 2];
    median = (mid1 + mid2) / 2;
  }
  // Return result
  return median;
}

// The function will return duplicate numbers in an array
function getMode(array) {
  let modeObj = {};

  // Create modeObj and find out how much each number is repeated
  array.forEach((num) => {
    if (!modeObj[num]) modeObj[num] = 0;
    modeObj[num]++;
  });

  let maxFrequency = 0;
  let modes = [];

  // In a loop we add to the array a value satisfying the requirements
  for (let num in modeObj) {
    if (modeObj[num] > maxFrequency) {
      modes = [num];
      maxFrequency = modeObj[num];
    } else if (modeObj[num] === maxFrequency) modes.push(num);
  }

  // if every value appears same amount of times
  if (modes.length === Object.keys(modeObj).length) modes = [];

  // Return result
  return modes;
}
```
