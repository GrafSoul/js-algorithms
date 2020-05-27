# The Algorithm - "Reverse Words"

## Description of the algorithm

The algorithm allows you to mirror letters in words
without changing the position of words in the sentence.

## Example

```javascript
function reverseWords(str) {
  // Create an array of words in a sentence
  let wordsArr = str.split(" ");

  // Create an empty array of for inverted words
  let reversedWordsArr = [];

  // Using a loop in each element of the array containing the word
  // mix the letters from the sentence in the reverse order
  wordsArr.forEach((word) => {
    // Variable for the current inverted word
    let reversedWord = "";

    // The cycle moves the letters
    for (let i = word.length - 1; i >= 0; i--) {
      reversedWord += word[i];
    }

    // Add inverted words to the array
    reversedWordsArr.push(reversedWord);
  });

  // Return result as a string
  return reversedWordsArr.join(" ");
}
```
