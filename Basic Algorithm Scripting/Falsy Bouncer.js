/** DESCRIPTION */
/*
Remove all falsy values from an array.
Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
*/

/** Hard solution */
function bouncer(arr) {
  var filtered = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      filtered.push(arr[i]);
    }
  }
  return filtered;
}
/** Simple solution */
function bouncer(arr) {
  var array = [].slice.call(arr);
  return array.filter(function(val) {
    if (val) return val;
  });
}

/** Very simple solution */
function bouncer(arr) {
  return arr.filter(Boolean);
}

/** Test calls */
bouncer([7, "ate", "", false, 9]); // should return [7, "ate", 9].
bouncer(["a", "b", "c"]); // should return ["a", "b", "c"].
bouncer([false, null, 0, NaN, undefined, ""]); // should return [].
bouncer([1, null, NaN, 2, undefined]); // should return [1, 2]
