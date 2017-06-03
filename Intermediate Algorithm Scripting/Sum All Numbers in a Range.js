/** DESCRIPTION */
/*
We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.
The lowest number will not always come first.
*/

/** Simple solution */
function sumAll(arr) {
  var smaller = Math.min(arr[0], arr[1]);
  var bigger = Math.max(arr[0], arr[1]);
  var sum = 0;
  for (var i = smaller; i <= bigger; i++) {
    sum += i;
  }
  return sum;
}

/** Tricky solution */
function sumAll(arr) {
  arr.sort(function(a, b) {
    return a - b;
  });
  // Arithmetic Progression summing formula
  var sum = (arr[1] - arr[0] + 1) * (arr[0] + arr[1]) / 2;
  return sum;
}
/** Test calls */
sumAll([1, 4]); // should return 10.
sumAll([4, 1]); // should return 10.
sumAll([5, 10]); // should return 45.
sumAll([10, 5]); // should return 45.
