# The Algorithm - "Harmless Ransom Note"

## Algorithm description

The algorithm allows you to determine whether a string can be created using words.
Converting both strings to arrays of words. Then we create an object containing
from the second string. Both strings are passed to the function as arguments.
all the words from the array of the second record in the form of keys,
and its values are the number of repeated words. Going through the elements
of the first array, we compare its values so that they match the values
of the object,and determine whether there is a data match.
As a result of performing the function, we will get a true or false answer.

## Example

```javascript
function harmlessRansomNote(noteText, magazineText) {
  let noteArr = noteText.split(" ");
  let magazineArr = magazineText.split(" ");
  let magazineObj = {};

  magazineArr.forEach((word) => {
    if (!magazineObj[word]) magazineObj[word] = 0;
    magazineObj[word]++;
  });

  let noteIsPossible = true;

  noteArr.forEach((word) => {
    if (magazineObj[word]) {
      magazineObj[word]--;
      if (magazineObj[word] < 0) noteIsPossible = false;
    } else {
      noteIsPossible = false;
    }
  });

  return noteIsPossible;
}

let result = harmlessRansomNote(
  "this is a secret note for you from a secret admirer",
  "puerto rico is a place of great wonder and excitement it has many secret waterfall locations that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited"
);

console.log(result); // true
```
