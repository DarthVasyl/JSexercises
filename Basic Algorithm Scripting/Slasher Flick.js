/** DESCRIPTION */
/*
Return the remaining elements of an array after chopping off n elements from the head.
The head means the beginning of the array, or the zeroth index.
*/

/** Long solution */
function slasher(arr, howMany) {
  if (howMany >= arr.length) {
    return [];
  } else {
    return arr.slice(howMany);
  }
}

/** Simple solution */
// in both cases we can use howMany as start point of array copying
function slasher(arr, howMany) {
  return arr.splice(howMany);
}

/** Test calls */
slasher([1, 2, 3], 2); // should return [3].
slasher([1, 2, 3], 0); // should return [1, 2, 3].
slasher([1, 2, 3], 9); // should return [].
slasher([1, 2, 3], 4); // should return [].
slasher(["burgers", "fries", "shake"], 1); // should return ["fries", "shake"].
slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5); // should return ["cheese", 4].
