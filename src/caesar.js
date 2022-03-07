// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // declare what happens with incorrect shift inputted
    if(!shift || shift === 0 || shift < -25 || shift > 25 ) return false;     
    
    // declare decoding to multiply into a negative number
    if(!encode) shift *= -1; 

    // split up the alphabet into indivdual characters for comparison
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');         
    
    //force input into lower cased letters
    const smallCase = input.toLowerCase();                                           

    // split up the input into individual letters for comparison, finding matching characters
      return smallCase.split('').map((letter) => {                                   
        if(alphabet.includes(letter)){  
        
        // deal with wrapping around the front and back of the alphabet    
              if(alphabet.indexOf(letter) + shift < 0){                                  
                  return alphabet[alphabet.indexOf(letter) + shift + 26];
              };
              if(alphabet.indexOf(letter) + shift > 25){                            
                  return alphabet[alphabet.indexOf(letter) + shift - 26];
              };
        // for characters that do not need to be wrapped around
              return alphabet[alphabet.indexOf(letter) + shift];

      // deal with characters and spaces outside of the alphabet                    
          } else {                                                                         
              return letter;
          };
      // compile the array back into a string
      }).join('');                                                                         
  };

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };