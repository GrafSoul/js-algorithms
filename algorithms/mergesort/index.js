'use strict';
/**
 * The Algorithm - "Merge Sort"
 */

// Merge Sort is a Divide and Conquer algorithm. It divides input array in two halves,
// calls itself for the two halves and then merges the two sorted halves. The merge() function
// is used for merging two halves. The merge(arr, l, m, r) is key process that assumes
// that arr[l..m] and arr[m+1..r] are sorted and merges the two sorted sub-arrays into one.

// In this sorting method, the array is divided into two until the arrays remain
// with one element, then the elements are compared and the array is reassembled in the correct order
// from the smallest to the largest.

// (https://www.geeksforgeeks.org/merge-sort/)
// (https://en.wikipedia.org/wiki/File:Merge_sort_algorithm_diagram.svg)

function mergeSort(arr) {
    // If the array contains more than 1 element, divide it in half
    // and assign the resulting arrays to variables
    if (arr.length < 2) return arr;
    let middleIndex = Math.floor(arr.length / 2);
    let firstHalf = arr.slice(0, middleIndex);
    let secondHalf = arr.slice(middleIndex);

    // Return the value treated after the merge function,
    // where we passed both halves of the array
    return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}

function merge(array1, array2) {
    let result = [];

    // In the loop, compare the values ​​of the arrays, gradually removing them from the halves
    // sorted array, if the value is less, we write them to a new array
    // one after another when passing arrays through a loop. The resulting array
    // add result to the array
    while (array1.length && array2.length) {
        let minElem;
        if (array1[0] < array2[0]) {
            minElem = array1.shift();
        } else {
            minElem = array2.shift();
        }
        result.push(minElem);
    }

    // After the loop works, we determine in which array there is another element
    // and add it to the end of the resulting array
    if (array1.length) {
        result = result.concat(array1);
    } else {
        result = result.concat(array2);
    }
    // Return result
    return result;
}

let resultOne = mergeSort([6000, 34, 203, 3, 746, 200, 984, 198, 764, 9, 1]);
console.log('resultOne', resultOne);

let resultTwo = mergeSort([960, 83, 21, 0, 1567, 12, 800, 38, 54, 89, 22]);
console.log('resultTwo', resultTwo);

let resultThree = mergeSort([1234, 1, 456, 6, 23, 6758, 2180, 2, 3, 1, 26]);
console.log('resultThree', resultThree);

// resultOne [
//     1,   3,    9,  34,
//   198, 200,  203, 746,
//   764, 984, 6000
// ]
// resultTwo [
//     0,  12,   21, 22,
//    38,  54,   83, 89,
//   800, 960, 1567
// ]
// resultThree [
//      1,    1,    2,   3,
//      6,   23,   26, 456,
//   1234, 2180, 6758
// ]