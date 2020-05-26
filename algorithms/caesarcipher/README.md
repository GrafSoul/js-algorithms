# The Algorithm - "Caesar Cipher"

## Description of the algorithm

The algorithm is based on the encryption principle called "Caesar cipher".

In cryptography, a Caesar cipher, also known as Caesar's cipher, the shift cipher, Caesar's code or Caesar shift, is one of the simplest and most widely known encryption techniques. It is a type of substitution cipher in which each letter in the plaintext is replaced by a letter some fixed number of positions down the alphabet. For example, with a left shift of 3, D would be replaced by A, E would become B, and so on. The method is named after Julius Caesar, who used it in his private correspondence.

## Example

```javascript
function caesarCipher(str, num) {
  // Find out the remainder of dividing a given number by 26
  num = num % 26;

  // Convert string to lowercase
  let lowerCaseString = str.toLowerCase();

  // Create an array of letters of the alphabet
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  // Create a variable for the string with the encryption result
  let newString = "";

  // Using a loop iterate over each character of a string
  for (let i = 0; i < lowerCaseString.length; i++) {
    // Assign the current character to the variable
    let currentLetter = lowerCaseString[i];

    // Add spaces without further character conversions
    if (currentLetter === " ") {
      newString += currentLetter;
      continue;
    }

    // Find out the serial number of the character in the alphabet
    let currentIndex = alphabet.indexOf(currentLetter);

    // Add the number from the result of dividing by 26 modulo to the symbol index
    let newIndex = currentIndex + num;

    // If the number is greater than 25, delete 26 from it
    if (newIndex > 25) newIndex = newIndex - 26;

    // If the number is greater, add 26 to it
    if (newIndex < 0) newIndex = 26 + newIndex;

    // If the character in the encrypted string is uppercase,
    // we add the converted character to uppercase
    if (str[i] === str[i].toUpperCase()) {
      // Add the converted uppercase character
      // to the line with the result
      newString += alphabet[newIndex].toUpperCase();
    } else {
      // Add the converted character to the string
      // with the result
      newString += alphabet[newIndex];
    }
  }

  // Return result
  return newString;
}

caesarCipher("Zoo Keeper", 2);
```
