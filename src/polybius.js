// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    const encodeKey = {
      a: "11",
      b: "21",
      c: "31",
      d: "41",
      e: "51",
      f: "12",
      g: "22",
      h: "32",
      i: "42",
      j: "42",
      k: "52",
      l: "13",
      m: "23",
      n: "33",
      o: "43",
      p: "53",
      q: "14",
      r: "24",
      s: "34",
      t: "44",
      u: "54",
      v: "15",
      w: "25",
      x: "35",
      y: "45",
      z: "55",
    };

    const decodeKey = {
      11: "a",
      21: "b",
      31: "c",
      41: "d",
      51: "e",
      12: "f",
      22: "g",
      32: "h",
      42: "(i / j)",
      52: "k",
      13: "l",
      23: "m",
      33: "n",
      43: "o",
      53: "p",
      14: "q",
      24: "r",
      34: "s",
      44: "t",
      54: "u",
      15: "v",
      25: "w",
      35: "x",
      45: "y",
      55: "z",
    };

    // Encoding
    // guard clause for missing message

    if (!input) {
      return "Error: missing message";
    }
    let message = input.toLowerCase();
    let result = "";

    // get a loop through each character

    if (encode) {
      let i = 0;
      while (i < message.length) {
        if (message[i] !== " ") {
          result += encodeKey[message[i]];
          i++;
        } else if (!/^[a-z]/.test(message[i])) {
          result += " ";
          i++;
        }
      }
    }

    if (!encode) {
      message = message.toString();
      let result = "";
      let splittt = message.split(" ");
      console.log("splittt", splittt);
      if (splittt.join("").length % 2 !== 0) {
        return false;
      }

      function digitsDecoder(digits) {
        let encodedChar = encodeKey.digits;
        for (let i = 0; i < digits.length; i++) {
          console.log("encodedCharacter:", encodedChar);
        }
        return encodedChar;
      }

      console.log("character:", digitsDecoder(19));

      splittt.forEach((word, index) => {
        for (let i = 0; i < word.length - 1; i = i + 2) {
          result = result + decodeKey[word[i] + word[i + 1]];
        }

        if (index !== splittt.length - 1) {
          result += " ";
        }
      });
      return result;

      // decode array items to letters and append result to string

      let i = 0;
      while (i < message.length) {
        if (message[i] !== " ") {
          result += encodeKey[message[i]];
          i++;
        } else if (!/^[a-z]/.test(message[i])) {
          result += " ";
          i++;
        }
      }

      console.log(acc);
    }

    // Decoding if false
    // splice into 2 characters
    // reverse switch to decipher
    // append to result

    return result;
  }

  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;
