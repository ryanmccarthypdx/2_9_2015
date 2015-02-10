var pigLatin = function(word) {
  var vowels = ["a", "e", "i", "o", "u"];
  var splitWord = word.split("")
  var initialConsonants = [];
  var newWord
  var escaper = 0
  var consonants

  splitWord.forEach(function(letter) {
    if (escaper === 0) {
      if (vowels.indexOf(letter) === -1) {
        if (letter === "q") {
          var shiftedQu = splitWord.splice(0,2);
          shiftedQu = shiftedQu.join("");
          initialConsonants.push(shiftedQu);
          escaper = 1
        }

        else {
          var shiftedLetter = splitWord.shift();
          initialConsonants.push(shiftedLetter);
        }
      }
       else {
        escaper = 1
      }
    }
      else {
        newWord = splitWord.join("");
      }
    consonants = initialConsonants.join("");
  });
return (newWord.concat(consonants.concat("-ay")));
}
