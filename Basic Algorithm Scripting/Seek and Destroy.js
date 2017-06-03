/** DESCRIPTION */
/*
You will be provided with an initial array (the first argument in the destroyer function),
followed by one or more arguments. Remove all elements from the initial array that are of
the same value as these arguments.
*/

/** Check outer array solution */
function destroyer(arr) {
  var args = [].slice.call(arguments);
  var res = [];
  for (var i = 0; i < arr.length; i++) {
    // check if element from arr present in our arguments
    // if not it meant that element is unique
    var ind = args.indexOf(arr[i]);
    if (ind === -1) {
      res.push(arr[i]);
    }
  }
  return res;
}

/** Check inner array solution */
function destroyer(arr) {
  var args = [].slice.call(arguments);
  for (var i = 1; i < args.length; i++) {
    if (arr.includes(args[i])) {
      delete arr[arr.indexOf(args[i])];
      i--; // we must go one step back, because we modify origin array
    }
  }
  return arr.filter(Boolean);
}

/** Better solution with splice */
function destroyer(arr) {
  var args = [].slice.call(arguments);
  for (var i = 1; i < args.length; i++) {
    if (arr.includes(args[i])) {
      arr.splice(arr.indexOf(args[i]), 1); // splice doesn't leave holes like delete, so it's better
      i--;
    }
  }
  return arr;
}

/** Test calls */
destroyer([1, 2, 3, 1, 2, 3], 2, 3); // should return [1, 1].
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3); // should return [1, 5, 1].
destroyer([3, 5, 1, 2, 2], 2, 3, 5); // should return [1].
destroyer([2, 3, 2, 3], 2, 3); // should return [].
destroyer(["tree", "hamburger", 53], "tree", 53); // should return ["hamburger"].
