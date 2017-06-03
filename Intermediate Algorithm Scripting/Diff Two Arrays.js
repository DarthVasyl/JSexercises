/** DESCRIPTION */
/*
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
*/

/** Slow solution */
function diffArray(arr1, arr2) {
  var tempArr = [];
  var newArr = [];
  arr1.forEach(function(el) {
    tempArr.push(el);
  });
  arr2.forEach(function(el) {
    if (tempArr.indexOf(el) === -1)
      tempArr.push(el);
  });
  for (var i = 0; i < tempArr.length; i++) {
    if (arr1.indexOf(tempArr[i]) === -1 || arr2.indexOf(tempArr[i]) === -1) {
      newArr.push(tempArr[i]);
    }
  }
  return newArr;
}

/** Filter solution */
function diffArray(arr1, arr2) {
  var tempArr = arr1.concat(arr2);
  var newArr = tempArr.filter(function(item) {
    if (arr1.includes(item) ^ arr2.includes(item))
      return item;
  });
  return newArr;
}
/** Test calls */
["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]; // should return ["pink wool"].
["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]; // should return ["diorite", "pink wool"].
["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]; // should return [].
[1, 2, 3, 5], [1, 2, 3, 4, 5]; // should return [4].
[1, "calf", 3, "piglet"], [1, "calf", 3, 4]; // should return ["piglet", 4].
[], ["snuffleupagus", "cookie monster", "elmo"]; // should return ["snuffleupagus", "cookie monster", "elmo"].
[1, "calf", 3, "piglet"], [7, "filly"]; // should return [1, "calf", 3, "piglet", 7, "filly"].
