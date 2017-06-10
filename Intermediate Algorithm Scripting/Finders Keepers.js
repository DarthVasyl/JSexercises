/** DESCRIPTION */
/*
Create a function that looks through an array (first argument) and returns
the first element in the array that passes a truth test (second argument).
*/

/** Hard solution */
function findElement(arr, func) {
  return arr.filter(func)[0];
}

/** Simple solution */

/** Test calls */
findElement([1, 3, 5, 8, 9, 10], function(num) {
  return num % 2 === 0;
}); // should return 8.
findElement([1, 3, 5, 9], function(num) {
  return num % 2 === 0;
}); // should return undefined.
