/** DESCRIPTION */
/*
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
Base pairs are a pair of AT and CG. Match the missing element to the provided character.
Return the provided character as the first element in each array.
For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
*/

/** Simple solution */
function pairElement(str) {
  var res = [];
  var strArr = str.split("");
  strArr.forEach(function(el) {
    switch (el) {
      case 'A':
        res.push(['A', 'T']);
        break;
      case 'T':
        res.push(['T', 'A']);
        break;
      case 'C':
        res.push(['C', 'G']);
        break;
      case 'G':
        res.push(['G', 'C']);
        break;
    }
  });
  return res;
}

/** Simple solution */
function pairElement(str) {
  var strArr = str.split("");
  var res = strArr.map(function(el) {
    return [el, getPair(el)];
  });
  return res;
}

function getPair(n) {
  switch (n) {
    case 'A':
      return 'T';
    case 'T':
      return 'A';
    case 'C':
      return 'G';
    case 'G':
      return 'C';
  }
}
/** Test calls */
pairElement("ATCGA"); // should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
pairElement("TTGAG"); // should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
pairElement("CTCTA"); // should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].
