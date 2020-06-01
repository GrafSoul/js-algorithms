# The Algorithm - "Sieve of Eratosthenes"

## Description of the algorithm

The "Sieve of Eratosthenes" is an ancient algorithm for finding all prime numbers up to any given limit.

It does so by iteratively marking as composite (i.e., not prime) the multiples of each prime, starting with the first prime number, 2. The multiples of a given prime are generated as a sequence of numbers starting from that prime, with constant difference between them that is equal to that prime. This is the sieve's key distinction from using trial division to sequentially test each candidate number for divisibility by each prime.

The earliest known reference to the sieve (Ancient Greek: κόσκινον Ἐρατοσθένους, kóskinon Eratosthénous) is in Nicomachus of Gerasa's Introduction to Arithmetic, which describes it and attributes it to Eratosthenes of Cyrene, a Greek mathematician.

One of a number of prime number sieves, it is one of the most efficient ways to find all of the smaller primes. It may be used to find primes in arithmetic progressions. (https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes)

## Example

```javascript
function sieveOfEratosthenes(n) {
  // Создаем переменную с пустым массивом
  let primes = [];

  // In the loop, fill the array with true values ​​equal to the final
  // the digit passed to the function, every number is simple
  for (let i = 0; i <= n; i++) {
    primes[i] = true;
  }

  // Assign the first two elements array ​​- false
  primes[0] = false;
  primes[1] = false;

  // Using a double loop, assign false to all non-prime numbers
  for (let i = 2; i <= Math.sqrt(n); i++) {
    for (let j = 2; i * j <= n; j++) {
      primes[i * j] = false;
    }
  }

  // Create an empty array to create an array with
  // the result of the algorithm
  let result = [];

  //In a loop we form an array with the result
  for (let i = 0; i < primes.length; i++) {
    if (primes[i]) result.push(i);
  }

  // Return result
  return result;
}
```
