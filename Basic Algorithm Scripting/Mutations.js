/** DESCRIPTION */
/*
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".
Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".
*/


/** Simple solution */
function mutation(arr) {
  var charset1 = arr[0].toLowerCase().split('');
  var charset2 = arr[1].toLowerCase().split('');
  var k = charset2.length;
  for (var j = 0; j < k; j++) {
    if (charset1.indexOf(charset2[j]) === -1) {
      return false;
    }
  }
  return true;
}

/** Hard solution */
// Original idea of other way is: sort two strings that get substring of first string
// (length of substring equal length of string2) and then compare if they are equal.
// Method works, but it's slow, complicated and I have a big trouble in case if word have duplicate
// letters. So I need remove duplicates and task become so complicated and goes in
// wrong way, so I decided not implement it at all. Maybe I finish it in better times.
/*
function mutation(arr) {
  var charset1 = arr[0].toLowerCase().split('').sort(function(a,b){return a-b;});
  var charset2 = arr[1].toLowerCase().split('').sort(function(a,b){return a-b;});
  var l = charset1.length;
  var k = charset2.length;
  var str1, str2 = "";
  for (var i=0; i<l;i++) {
    if (str1.indexOf(charset1[i]) >-1) {
      str1 += charset1[i];
    }
  }
  for (var j=0; j<k;j++) {
    if (str2.indexOf(charset2[j]) >-1) {
      str2 += charset2[j];
    }
  }
  var ind = str1.indexOf(str2.charAt(0));
  var substr = str1.substring(ind,k);
  return (substr == s1);
}
*/
/** Test calls */
mutation(["hello", "hey"]); // should return false.
mutation(["hello", "Hello"]); // should return true.
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]); // should return true.
mutation(["Mary", "Army"]); // should return true.
mutation(["Mary", "Aarmy"]); // should return true.
mutation(["Alien", "line"]); // should return true.
mutation(["floor", "for"]); // should return true.
mutation(["hello", "neo"]); // should return false.
mutation(["voodoo", "no"]); // should return false.
