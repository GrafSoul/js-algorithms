'use strict';
/**
 * The Algorithm - "Fibonacci"
 */

// Fibonacci numbers are used to create technical indicators using a mathematical 
// sequence developed by the Italian mathematician, commonly referred to as "Fibonacci," 
// in the 13th century. The sequence of numbers, starting with zero and one, is created 
// by adding the previous two numbers. For example, the early part of the sequence 
// is 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, and so on. 
// (https://www.investopedia.com/terms/f/fibonaccilines.asp)

function fibonacci(position) {
    // if the position in the row is less than 3, return 1
    if (position < 3) {
        return 1;
    } else {
        // If the number is more than 3, we call the function twice recursively
        // passing the values ​​reduced by 1 and 2 to it and add the values ​​obtained 
        // as a result of the function
        return fibonacci(position - 1) + fibonacci(position - 2);
    }
}

let resultOne = fibonacci(6);
console.log("resultOne", resultOne);

let resultTwo = fibonacci(21);
console.log("resultTwo", resultTwo);

let resultThree = fibonacci(83);
console.log("resultThree", resultThree);