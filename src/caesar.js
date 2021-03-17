// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // guard clause - if shift parameter not present, 0, <-25, >25, function returns FALSE
    if (!shift || shift < -25 || shift > 25 || shift === 0) {
      return false;
    }

    // check if encoding or decoding and set shift accordingly
    if (encode === false) {
      shift = shift * -1;
      console.log(shift);
    }

    // uniform input to lower case
    let message = input.toLowerCase();
    console.log(message);
    // alphabet reference
    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    // encoded message to append to
    let encodedMessage = "";

    // loop through characters
    let i = 0;
    while (i < message.length) {
      if (alphabet.indexOf(message[i]) !== -1) {
        let abcIndex = alphabet.indexOf(message[i]);

        if (alphabet[abcIndex + shift]) {
          encodedMessage += alphabet[abcIndex + shift];
        } else if (abcIndex + shift <= 0) {
          encodedMessage += alphabet[abcIndex + shift + alphabet.length];
        } else {
          encodedMessage += alphabet[abcIndex + shift - alphabet.length];
        }
      } else {
        encodedMessage += message[i];
      }
      i++;
    }

    //
    return encodedMessage;
  }

  return {
    caesar,
  };

  console.log(Caesar("ABC", 1, true));
})();

module.exports = caesarModule.caesar;
