/** DESCRIPTION */
/*
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/

/** Hard solution */
function spinalCase(str) {
  str = str.replace(/_/g, "-").replace(/ /g, "-");
  var temp = str.split('');
  for (var i = 1; i < temp.length; i++) {
    // if letter is uppercase it's new word beginning
    if (temp[i] >= 'A' && temp[i] <= 'Z') {
      // if previous char is not dash we should add it to letter
      if (temp[i - 1] !== '-') {
        temp[i] = '-' + temp[i];
      }
    }
  }
  str = temp.join('').toLowerCase();
  return str;
}

/** Regex solution */
// I found this solution on forum and it's beautiful
function spinalCase(str) {
  return str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase();
}

/** Test calls */
spinalCase("This Is Spinal Tap"); // should return "this-is-spinal-tap".
spinalCase("thisIsSpinalTap"); // should return "this-is-spinal-tap".
spinalCase("The_Andy_Griffith_Show"); // should return "the-andy-griffith-show".
spinalCase("AllThe-small Things"); // should return "all-the-small-things".
spinalCase("Teletubbies say Eh-oh"); // should return "teletubbies-say-eh-oh".
