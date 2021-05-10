// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    // if the shift number doesn't exist, equals 0, is less than -25, or more than 25 return false
    if(!shift || shift === 0 || shift < -25 || shift > 25) return false;

    //take any characters inputted and make them lowercase
    const chars = input.toLowerCase().split("");

    //if encode is false (decode) that means shift is negative
    if(!encode) shift = 0 - shift;

    //Go through each letter
    const secretMessage = chars.map((letter) => {
      //lowercase 'a' starts at 97, so skip all the numbers befor 97
      let ascii = letter.charCodeAt(0) - 97;
      //for non-alphabetic symbols
      //if the letter/number is less than 0 or more than 26 return the letter as it is
      if(ascii < 0 || ascii > 26) return letter;

      // the letter will now mean the letter and the shifted number.
      ascii = ascii + shift;
      //handles the wrapping of the alphabet
      //if the letter is encoding and is less than 0, add 26 to it
      if(ascii < 0) ascii += 26;
      //whatever is left after 26, use that number to find the letter (ex. 27 would be 26 + 1, which would be 'a')
      ascii = ascii % 26;
      //add 97 to what's left to start at 'a' again
      ascii += 97;

      return String.fromCharCode(ascii);
    });
    return secretMessage.join("");
  
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
