# The Algorithm - "Fizz Buzz"

## Algorithm description
Fizz buzz is a group word game for children to teach them about division.
Players take turns to count incrementally, replacing any number divisible by 
three with the word "fizz", and any number divisible by five with the word "buzz".

Players generally sit in a circle. The player designated to go first says the number "1", 
and each player thenceforth counts one number in turn. However, any number divisible by three is 
replaced by the word fizz and any number divisible by five by the word buzz. Numbers divisible 
by 15 become fizz buzz. A player who hesitates or makes a mistake is eliminated from the game.

## Example
```javascript
// Fizz Buzz
function fizzBuzz(num) {
    for (var i = 1; i <= num; i++) {
        if (i % 15 === 0) console.log('FizzBuzz');
        else if (i % 3 === 0) console.log('Fizz');
        else if (i % 5 === 0) console.log('Buzz');
        else console.log(i);
    }
}

fizzBuzz(30);
```