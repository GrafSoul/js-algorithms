'use strict';
/**
 * The Algorithm - "Is Palindrome"
 */
// The algorithm allows you to check whether the string passed 
// as an argument is a palindrome or not.

// Palindrome, werewolf - a number, a combination of letters, 
// a word or text that is equally readable in both directions. 
// For example, the number 101; the phrase "race car" in English 
// and (Fin.) saippuakivikauppias - the longest word-palindrome 
// in the world; the text (Rus.) “а роза упала на лапу Азора”, etc.

function isPalindrome(string) {
    // Convert the string to lowercase
    string = string.toLowerCase();

    // Convert string to array
    let charactersArr = string.split('');

    // Prepare an array containing the alphabet
    let validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');

    // Create an empty array
    let lettersArr = [];

    // Using a loop, we iterate over the array with the alphabet and delete
    // points, commas and other characters from the array of the string to be checked
    charactersArr.forEach(char => {
        if (validCharacters.indexOf(char) > -1) lettersArr.push(char);
    });

    // Compare the resulting array with its mirror copy
    return lettersArr.join('') === lettersArr.reverse().join('');
}

let resultOne = isPalindrome("Not New York, Roy went on");
console.log('resultOne - ', resultOne);

let resultTwo = isPalindrome("A man, a plan a canal-Panama");
console.log('resultTwo - ', resultTwo);

let resultTree = isPalindrome("Some men interpret nine memos");
console.log('resultTree - ', resultTree);