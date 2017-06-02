/** DESCRIPTION */
/*
Return the provided string with the first letter of each word capitalized.
Make sure the rest of the word is in lower case.
For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
*/

/** Hard solution */
function titleCase(str) {
  var arr = str.split(' ');
  var res = "";
  arr.forEach(function(word) {
    // get each word and add it capitalized first letter, other part of word and space to result string
    res += word[0].toUpperCase() + word.slice(1).toLowerCase() + ' ';
  });
  // delete last space
  return res.trim();
}

/** Simple solution */
function titleCase(str) {
  var arr = str.toLowerCase().split(' ');
  var result = arr.map(function(val) {
    return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
  });
  return result.join(' ');
}

/** Test calls */
titleCase("I'm a little tea pot"); // should return "I'm A Little Tea Pot".
titleCase("sHoRt AnD sToUt"); // should return "Short And Stout".
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"); // should return "Here Is My Handle Here Is My Spout".
