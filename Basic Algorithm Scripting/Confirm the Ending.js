/** DESCRIPTION */
/*
Check if a string (first argument, str) ends with the given target string (second argument, target).
This challenge can be solved with the .endsWith() method, which was introduced in ES2015.
But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
*/

/** Hard solution */
function confirmEnding(str, target) {
  var tl = target.length;
  var sl = str.length;
  var j = 0;
  // iterate only over string ending
  for (var i = sl - tl; i < sl; i++) {
    // this hack is neccesary, because first time loop check correctly and then
    // start over with next i position. in that case result will be false, but it's wrong.
    // so when we check target one time, it's enough for us and we can break
    if (j === tl.lenght - 1) {
      break;
    }
    // iterate over target and str ending and equal it
    for (; j < tl; j++) {
      console.log(j);
      console.log(str[i + j] + " " + target[j]);
      if (str[i + j] !== target[j]) {
        return false;
      }
    }
  }
  return true;
}

/** Simple solution */
function confirmEnding(str, target) {
  var subs = str.substr(-target.length);
  return (subs === target);
}

/** Very Simple solution */
function confirmEnding(str, target) {
  return str.endsWith(target);
}
/** Test calls */
confirmEnding("Bastian", "n"); // should return true.
confirmEnding("Connor", "n"); // should return false.
confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"); // should return false.
confirmEnding("He has to give me a new name", "name"); // should return true.
confirmEnding("Open sesame", "same"); // should return true.
confirmEnding("Open sesame", "pen"); // should return false.
confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain"); // should return false.
