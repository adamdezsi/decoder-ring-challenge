// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    
    // guard clause : returns false if input alphabet isn't 26 characters or has duplicate characters
    if (!alphabet || alphabet.length !== 26) {return false}
    console.log("ABC: ", alphabet);
    let message = input.toLowerCase();
    alphabet = alphabet.toLowerCase();
    
    let isDuplicate = false;
    for (let i = 0; i < alphabet.length; i++) {
        for (let j = i + 1; j < alphabet.length; j++) {
          if (alphabet[i] == alphabet[j]) {
            isDuplicate = true
            console.log(alphabet[i], isDuplicate)
            }
        }
    }
    if (isDuplicate === true) {return false};

    let abc = "abcdefghijklmnopqrstuvwxyz";
    let result = "";

    // 
      console.log("msg: ", message)
      for (let i = 0; i < message.length; i++) {
        if (message[i] === " ") {
          result += message[i]
        } else {
          // find character's index in key alphabet and append to string normal alphabet's same index
            if (encode) {
            let charIndex = abc.indexOf(message[i]);
            result += alphabet.charAt(charIndex)} 
            else { 
              let charIndex = alphabet.indexOf(message[i]);
              result += abc.charAt(charIndex);

          }
          console.log(result)
          
          // result += alphabet.indexOf(i);
          // console.log(abc.charAt(i))
          
        }
      }
      return result





    











  }

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
