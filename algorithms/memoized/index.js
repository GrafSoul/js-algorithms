'use strict';
/**
 * The Algorithm - "Memoized Fibonacci"
 */

// "Memoized Fibonacci" algorithm that allows you to calculate the number 
// in a series of Fibonacci numbers by specifying its index. Unlike the Fibonacci 
// algorithm itself, which is in the list of algorithms, it works much faster since 
// it saves already calculated values ​​in the cache.

// Initially, pass in the function only the index of the number,
// cache is formed during the operation of the algorithm.
function fibMemo(index, cache) {
    // Assign to the cache variable an empty array in the first
    // turn or an already filled array  
    cache = cache || [];
    // If there is a value, return it
    if (cache[index]) {
        return cache[index];
    } else {
        // If the index of the number is 
        // less than 3, return 1
        if (index < 3) {
            return 1;
        } else {
            // Get the new value from the sum of the recursively launched function
            // with different arguments and write the result to the cache
            cache[index] = fibMemo(index - 1, cache) + fibMemo(index - 2, cache);
        }
    }
    // Return result 
    return cache[index];
}

let resultOne = fibMemo(25);
console.log("resultOne -", resultOne);

let resultTwo = fibMemo(120);
console.log("resultTwo -", resultTwo);

let resultThree = fibMemo(500);
console.log("resultThree -", resultThree);

// resultOne - 75025
// resultTwo - 5.358359254990968e+24
// resultThree - 1.394232245616977e+104