/** DESCRIPTION */
/*
Translate the provided string to pig latin.
Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it
to the end of the word and suffixes an "ay".
If a word begins with a vowel you just add "way" to the end.
Input strings are guaranteed to be English words in all lowercase.
*/

/** Simple solution */
function translatePigLatin(str) {
  var vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
  var consonantFirst = false;
  while (vowels.indexOf(str[0]) == -1) {
    str = str.slice(1) + str.charAt(0);
    consonantFirst = true;
  }
  if (consonantFirst) {
    str += "ay";
  } else {
    str += "way";
  }
  return str;
}

/** RegEx solution */
function translatePigLatin(str) {
  var re = /^[aeyiuo]+$/;
  if (re.exec(str[0])) {
    return str + "way";
  } else {
    while (!re.exec(str[0])) {
      str = str.slice(1) + str.charAt(0);
    }
  }
  return str + "ay";
}
/** Test calls */
translatePigLatin("california"); // should return "aliforniacay".
translatePigLatin("paragraphs"); // should return "aragraphspay".
translatePigLatin("glove"); // should return "oveglay".
translatePigLatin("algorithm"); // should return "algorithmway".
translatePigLatin("eight"); // should return "eightway".
