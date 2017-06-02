/** DESCRIPTION */
/*
Write a function that splits an array (first argument) into groups the length of size (second argument)
and returns them as a two-dimensional array.
*/

/** Hard solution */
function chunkArrayInGroups(arr, size) {
  var i = 0;
  var result = [];
  var temp;
  while (i < arr.length) {
    temp = [];
    for (var j = 0; j < size; j++) {
      if (arr[i] !== undefined) {
        temp.push(arr[i]);
      }
      i++;
    }
    result.push(temp);
  }
  return result;
}

/** Simple solution */
function chunkArrayInGroups(arr, size) {
  var result = [];
  for (var i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}
/** Test calls */
chunkArrayInGroups(["a", "b", "c", "d"], 2); // should return [["a", "b"], ["c", "d"]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3); // should return [[0, 1, 2], [3, 4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2); // should return [[0, 1], [2, 3], [4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4); // should return [[0, 1, 2, 3], [4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3); // should return [[0, 1, 2], [3, 4, 5], [6]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4); // should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2); // should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].
