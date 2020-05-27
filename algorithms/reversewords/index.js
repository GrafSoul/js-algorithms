'use strict';
/**
 * The Algorithm - "Reverse Words"
 */

// The algorithm allows you to mirror letters in words 
// without changing the position of words in the sentence.

function reverseWords(str) {

    // Create an array of words in a sentence
    let wordsArr = str.split(' ');

    // Create an empty array of for inverted words
    let reversedWordsArr = [];

    // Using a loop in each element of the array containing the word
    // mix the letters from the sentence in the reverse order 
    wordsArr.forEach(word => {

        // Variable for the current inverted word
        let reversedWord = '';

        // The cycle moves the letters
        for (let i = word.length - 1; i >= 0; i--) {
            reversedWord += word[i];
        };

        // Add inverted words to the array
        reversedWordsArr.push(reversedWord);
    });

    // Return result as a string
    return reversedWordsArr.join(' ');
}

let resultOne = reverseWords('I love javascript');
console.log("resultOne -", resultOne);

let resultTwo = reverseWords('Algorithms are very cool');
console.log("resultTwo -", resultTwo);

let resultThree = reverseWords('Hello World');
console.log("resultThree -", resultThree);

// resultOne - I evol tpircsavaj
// resultTwo - smhtiroglA era yrev looc
// resultThree - olleH dlroW