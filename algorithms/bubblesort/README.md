# The Algorithm - "Bubble Sort"

## Description of the algorithm

Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent
elements if they are in wrong order.
Example:

First Pass:
( 5 1 4 2 8 ) –> ( 1 5 4 2 8 ), Here, algorithm compares the first two elements, and swaps since 5 > 1.  
( 1 5 4 2 8 ) –> ( 1 4 5 2 8 ), Swap since 5 > 4  
( 1 4 5 2 8 ) –> ( 1 4 2 5 8 ), Swap since 5 > 2  
( 1 4 2 5 8 ) –> ( 1 4 2 5 8 ), Now, since these elements are already in order (8 > 5), algorithm does
not swap them.

Second Pass:
( 1 4 2 5 8 ) –> ( 1 4 2 5 8 )  
( 1 4 2 5 8 ) –> ( 1 2 4 5 8 ), Swap since 4 > 2  
( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )  
( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )

Now, the array is already sorted, but our algorithm does not know if it is completed. The algorithm needs
one whole pass without any swap to know it is sorted.

Third Pass:
( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )  
( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )  
( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )  
( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )

(https://www.geeksforgeeks.org/bubble-sort/)

## Example

```javascript
function bubbleSort(array) {
    // We loop through the values ​​in a double loop, with each pass
    // compare each element with standing next to it and if they are
    // wrong, swap them
    for (let i = array.length; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            // Replace the values ​​in the elements
            // if the element is larger than the next one
            if (array[j] > array[j + 1]) {
                // Create a temporary variable and assign
                // its value of the item being checked
                let temp = array[j];
                // Set the value to the element in the array
                // next element
                array[j] = array[j + 1];
                // Set The Next Element To
                // checked item
                array[j + 1] = temp;
            }
        }
    }
    // Return result
    return array;
}
```
