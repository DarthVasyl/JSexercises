/** DESCRIPTION */
/*
Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.
*/

/** Hard solution */
var alphabet = "abcdefghijklmnopqrstuvwxyz";

function fearNotLetter(str) {
  var res = "";
  var firstIndex = alphabet.indexOf(str[0]);
  var lastIndex = alphabet.indexOf(str[str.length - 1]);
  var substr = alphabet.substring(firstIndex, lastIndex);
  for (var i = 0; i < substr.length; i++) {
    if (!str.includes(substr[i])) {
      res += substr[i];
    }
  }
  return res.length > 0 ? res : undefined;
}

/** Simple solution */
function fearNotLetter(str) {
  var start = str.charCodeAt(0);
  for (var i = 1; i < str.length; i++) {
    if (str.charCodeAt(i) !== start + i) {
      return String.fromCharCode(start + i);
    }
  }
  return undefined;
}

/** Test calls */
fearNotLetter("abce"); // should return "d".
fearNotLetter("abcdefghjklmno"); // should return "i".
fearNotLetter("bcd"); // should return undefined.
fearNotLetter("yz"); //  should return undefined.
