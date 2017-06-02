/** DESCRIPTION */
/*
Return true if the given string is a palindrome. Otherwise, return false.
A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes.
We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.
We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".
*/

/** Long solution */
function palindrome(str) {
  var s1, s2, ind;
  // prepare string for checking  - delete all special characters
  str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  var len = str.length;
  // get two substrings - two halves of original string.
  // if string has odd length we ommit central char.
  ind = (len % 2 == 0) ? len / 2 : (len - 1) / 2;
  s1 = str.slice(0, ind + 1);
  s2 = str.slice(ind, len);
  var j = s2.length - 1;
  // iterate over two substrings id some chars aren't equal
  // it means that original string isn't a palindrome
  for (var i = 0; i < ind; i++) {
    if (s1[i] !== s2[j - i]) {
      return false;
    }
  }
  // Otherwise string is a palindrome
  return true;
}

/** Simple solution */
function palindrome(str) {
  var s1 = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  var s2 = s1.split('').reverse().join('');
  return (s1 == s2);
}

/** Better version of first solution */
function palindrome(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  for (var i = 0, len = str.length - 1; i < len / 2; i++) {
    if (str[i] !== str[len - i]) {
      return false;
    }
  }
  return true;
}

/** Test calls */
palindrome("eye"); // should return true.
palindrome("_eye"); // should return true.
palindrome("race car"); // should return true.
palindrome("not a palindrome"); // should return false.
palindrome("A man, a plan, a canal. Panama"); // should return true.
palindrome("never odd or even"); // should return true.
palindrome("nope"); // should return false.
palindrome("almostomla"); // should return false.
palindrome("My age is 0, 0 si ega ym."); // should return true.
palindrome("1 eye for of 1 eye."); // should return false.
palindrome("0_0 (: /-\ :) 0-0"); // should return true.
palindrome("five|\_/|four"); // should return false.
