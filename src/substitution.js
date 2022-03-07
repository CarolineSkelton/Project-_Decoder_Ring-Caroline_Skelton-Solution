// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
function substitution(input, alphabet, encode = true) {
    // your solution code here

    // declare false parameters
    if(!alphabet) return false;
    if(alphabet.length !== 26) return false;

    // force input to lower case and split into individual characters
    let smallCase = input.toLowerCase().split('')

    // declare alphabetical characters for comparison, including spaces
    const abc = 'abcdefghijklmnopqrstuvwxyz '.split('');
    const altAlphabet = [...alphabet, " "];

    // create an empty array to hold characters for comparison
    let comparison = [];

    // loop through characters in the code alphabet, declare false for unique characters
    for(let character in alphabet) {
      if(comparison.indexOf(alphabet[character]) < 0) {
        comparison.push(alphabet[character])
      }
      else {
        return false;
      }
    }
    
    // push new array based on encoding or decoding
    if(encode === true) {
      return smallCase.map((letter) => {
          return altAlphabet[abc.indexOf(letter)]
      }).join('')
    }
    else {
      return smallCase.map((letter) => {
          return abc[altAlphabet.indexOf(letter)]
      }).join('')
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
