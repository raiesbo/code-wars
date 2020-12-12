// Replace With Alphabet Position:

function alphabetPosition(text) {
  var numberText = ""
  var alphabet = 'abcdefghijklmnopqrstuvwxyz';
  for (/*var letter of text*/var i = 0; i < text.length; i++) {
    for (var y = 0; y < alphabet.length; y++) {
      if (text[i].toLowerCase() === alphabet[y]) {
        numberText += (y + 1) + ' ';
      }
    }
  }
  return numberText.slice(0,numberText.length-1);
};


alphabetPosition("The sunset sets at twelve o' clock.") // "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");
alphabetPosition("The narwhal bacons at midnight.") // "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20");
