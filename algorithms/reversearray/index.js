'use strict';
/**
 * The Algorithm - "Reverse Array In Place"
 */

// The algorithm mirrors the position of elements in the array.

function reverseArrayInPlace(arr) {
    // In the loop, change the value in each element of the array
    for (let i = 0; i < arr.length / 2; i++) {

        // Variable with the value of the current element
        let tempVar = arr[i];

        // Change the value in the current element to the value
        // in the mirror element        
        arr[i] = arr[arr.length - i - 1];

        // Change the value in the mirror-standing element
        // on the value in the current element
        arr[arr.length - i - 1] = tempVar;
    }
    // Return result
    return arr;
}

let resultOne = reverseArrayInPlace([1, 2, 3, 4, 5, 6, 7, 8]);
console.log("resultOne -", resultOne);

let resultTwo = reverseArrayInPlace(['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight']);
console.log("resultTwo -", resultTwo);

let resultThree = reverseArrayInPlace(['one', 2, 'three', 'four', 5, 'six', 6, 'eight']);
console.log("resultThree -", resultThree);

// resultOne - [ 8, 7, 6, 5, 4, 3, 2, 1 ]
// resultTwo - ['eight', 'seven', 'six', 'five', 'four', 'three', 'two', 'one' ]
// resultThree - ['eight', 6, 'six', 5, 'four', 'three', 2, 'one' ]