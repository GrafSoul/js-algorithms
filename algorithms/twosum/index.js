'use strict';
/**
 * The Algorithm - "Two Sum"
 */

// The algorithm after performing its work returns an array
// in the cat there are arrays containing pairs of numbers the sum of which
// will be equal to the value specified earlier. At the beginning of the input algorithm
// An array of numbers and a given sum number are supplied.

function twoSum(numArray, sum) {
    // Create two empty arrays
    let pairs = [];
    let hashTable = [];

    // In a loop, iterate over the array values
    for (var i = 0; i < numArray.length; i++) {

        // Assign to the variable the value of the current element
        let currNum = numArray[i];
        // Calculate the difference between the given amount
        // and the value of the current element
        let counterpart = sum - currNum;

        // If the hashTable array contains a value equal to counterpart
        // add a pair to the pairs array from the value of the variables
        // currNum and counterpart
        if (hashTable.indexOf(counterpart) !== -1) {
            // Add an array with a pair of values
            pairs.push([currNum, counterpart]);
        }
        // Add the value of currNum to the hashTable array
        hashTable.push(currNum);
    }

    // Return result
    return pairs;
}

let resultOne = twoSum([1, 6, 4, 5, 3, 3], 7);
console.log("resultOne", resultOne)

let resultTwo = twoSum([2, 7, 8, 1, 2, 3], 4);
console.log("resultTwo", resultTwo)

let resultThree = twoSum([6, 2, 20, 15, 2, 18], 43);
console.log("resultThree", resultThree)

// resultOne [ [ 6, 1 ], [ 3, 4 ], [ 3, 4 ] ]
// resultTwo [ [ 2, 2 ] ]
// resultThree []