/** DESCRIPTION */
/*
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
*/

/** Hard solution */
function convertHTML(str) {
  var temp = str.split('');
  for (var i = 0; i < temp.length; i++) {
    switch (temp[i]) {
      case '&':
        temp[i] = '&amp;';
        break;
      case '<':
        temp[i] = '&lt;';
        break;
      case '>':
        temp[i] = '&gt;';
        break;
      case '"':
        temp[i] = '&quot;';
        break;
      case "'":
        temp[i] = '&apos;';
        break;
    }
  }
  return temp.join('');
}

/** Simple solution */
function convertHTML(str) {
  str = str.replace(/&/g, '&amp;').replace(/</g, '&lt;').
  replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
  return str;
}
/** Test calls */
convertHTML("Dolce & Gabbana"); // should return Dolce &​amp; Gabbana.
convertHTML("Hamburgers < Pizza < Tacos"); // should return Hamburgers &​lt; Pizza &​lt; Tacos.
convertHTML("Sixty > twelve"); // should return Sixty &​gt; twelve.
convertHTML('Stuff in "quotation marks"'); // should return Stuff in &​quot;quotation marks&​quot;.
convertHTML("Shindler's List"); // should return Shindler&​apos;s List.
convertHTML("<>"); // should return &​lt;&​gt;.
convertHTML("abc"); // should return abc.
