/** DESCRIPTION */
/*
Sum all the prime numbers up to and including the provided number.
A prime number is defined as a number greater than one and having only two divisors,
one and itself. For example, 2 is a prime number because it's only divisible by one and two.
The provided number may not be a prime.
*/

/** Nested loops solution */
function sumPrimes(num) {
  var sum = 0;
  for (var i = 2; i <= num; i++) {
    var isPrime = true;
    for (var j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      sum += i;
    }
  }
  return sum;
}

/** Array and loops solution */
function sumPrimes(num) {
  var numbers = [];
  var prime = true;
  for (var i = 2; i <= num; i++) {
    for (var j = 0; j < numbers.length; j++) {
      if (i % numbers[j] === 0) {
        prime = false;
      }
    }
    if (prime) {
      numbers.push(i);
    }
    prime = true;
  }
  var sum = numbers.reduce(function(acc, next) {
    return acc + next;
  });
  return sum;
}

/** Test calls */
sumPrimes(10); // should return 17.
sumPrimes(977); // should return 73156.
