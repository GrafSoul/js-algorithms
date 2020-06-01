'use strict';
/**
 * The Algorithm - "Binary Search"
 */

// Binary Search is one of the most popular algorithms used in information technology.

// Binary Search: Search a sorted array by repeatedly dividing the search interval in half. 
// Begin with an interval covering the whole array. If the value of the search key is less than 
// the item in the middle of the interval, narrow the interval to the lower half. 
// Otherwise narrow it to the upper half. Repeatedly check until the value is found or 
// the interval is empty. (https://www.geeksforgeeks.org/binary-search/)

// Pass an array with a set of "numArray" elements 
// and the desired "key" value to the function.
// If the "key" value is in the array, 
// returns true if not false.
function binarySearch(numArray, key) {

    // Find out the index of the element in the middle of the array
    let middleIdx = Math.floor(numArray.length / 2);
    // We write in the variable the values ​​of the element which is in the middle
    let middleElem = numArray[middleIdx];


    if (middleElem === key) {
        // If the middle element is equal to the value of "key" return true
        return true;
    } else if (middleElem < key && numArray.length > 1) {
        // If the value of the middle element is less than the "key" and the length
        // array is greater than 1, we perform a recursive start
        // function that passes half the array from its middle
        // and to the end and the "key"
        return binarySearch(numArray.splice(middleIdx, numArray.length), key);
    } else if (middleElem > key && numArray.length > 1) {
        // If the value of the middle element is greater than the "key" and the length
        // array is greater than 1, we perform a recursive start
        // function to which we pass half the array from its beginning
        // to the middle and the "key"
        return binarySearch(numArray.splice(0, middleIdx), key);
    } else {
        // If there are no matching values, return false
        return false;
    }
}

let resultOne = binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 56);
console.log("resultOne", resultOne);

let resultTwo = binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 7);
console.log("resultTwo", resultTwo);

let resultThree = binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 57);
console.log("resultThree", resultThree);

// resultOne true
// resultTwo true
// resultThree false