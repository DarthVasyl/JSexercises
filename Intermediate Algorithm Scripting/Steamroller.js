/** DESCRIPTION */
/*
Flatten a nested array. You must account for varying levels of nesting.
*/

/** Hard solution */
// it's dangerous solution, because we modify original array
function steamrollArray(arr) {
  var i = 0;
  while (i < arr.length) {
    if (Array.isArray(arr[i])) {
      var temp = arr[i];
      // if nested array is empty just delete it else insert it's first element
      temp.length === 0 ? arr.splice(i, 1) : arr.splice(i, 1, temp[0]);
      // insert other elements of nested array
      for (var j = 1, l = temp.length; j < l; j++) {
        arr.splice(i + j, 0, temp[j]);
      }
    }
    i++;
  }
  // if we have few levels of nesting call function again
  arr.forEach(function(el) {
    if (Array.isArray((el))) {
      steamrollArray(arr);
    }
  });
  return arr;
}

/** Simple solution */
function steamrollArray(arr) {
  return arr.reduce(function(flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? steamrollArray(toFlatten) : toFlatten);
  }, []);
}
/** Test calls */
steamrollArray([
  [
    ["a"]
  ],
  [
    ["b"]
  ]
]); // should return ["a", "b"].
steamrollArray([1, [2],
  [3, [
    [4]
  ]]
]); // should return [1, 2, 3, 4].
steamrollArray([1, [],
  [3, [
    [4]
  ]]
]); // should return [1, 3, 4].
steamrollArray([1, {},
  [3, [
    [4]
  ]]
]); // should return [1, {}, 3, 4].
