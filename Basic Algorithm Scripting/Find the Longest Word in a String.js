/** DESCRIPTION */
/*
Return the length of the longest word in the provided sentence.
Your response should be a number.
*/

/** Hard solution */
function findLongestWord(str) {
  var lengths = str.split(' ').map(function(word) {
    return word.length;
  });
  return Math.max.apply(null, lengths);
  // also we can sort array and return a first value
}

/** Simple solution */
function findLongestWord(str) {
  var arr = str.split(' ');
  var longestLength = arr[0].length;
  for (var i = 0, l = arr.length; i < l; i++) {
    if (arr[i].length > longestLength) {
      longestLength = arr[i].length;
    }
  }
  return longestLength;
}

/** Test calls */
findLongestWord("The quick brown fox jumped over the lazy dog"); // should return 6.
findLongestWord("May the force be with you"); // should return 5.
findLongestWord("Google do a barrel roll"); // should return 6.
findLongestWord("What is the average airspeed velocity of an unladen swallow"); // should return 8.
findLongestWord("What if we try a super-long word such as otorhinolaryngology"); // should return 19.
