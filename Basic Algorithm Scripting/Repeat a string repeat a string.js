/** DESCRIPTION */
/*
Repeat a given string (first argument) num times (second argument).
Return an empty string if num is not a positive number.
*/

/** Loop solution */
function repeatStringNumTimes(str, num) {
  var res = "";
  for (var i = 0; i < num; i++) {
    res += str;
  }
  return res;
}

/** Recursion solution */
function repeatStringNumTimes(str, num) {
  if (num < 0)
    return "";
  if (num === 1)
    return str;
  else
    return str + repeatStringNumTimes(str, num - 1);
}
/** Test calls */
repeatStringNumTimes("*", 3); // should return "***".
repeatStringNumTimes("abc", 3); // should return "abcabcabc".
repeatStringNumTimes("abc", 4); // should return "abcabcabcabc".
repeatStringNumTimes("abc", 1); // should return "abc".
repeatStringNumTimes("*", 8); // should return "********".
repeatStringNumTimes("abc", -2); // should return "".
