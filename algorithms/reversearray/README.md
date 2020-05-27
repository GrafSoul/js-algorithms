# The Algorithm - "Reverse Array In Place"

## Description of the algorithm

The algorithm mirrors the position of elements in the array.

## Example

```javascript
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
```
