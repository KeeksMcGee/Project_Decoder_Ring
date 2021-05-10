// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  //a helper function that changes every character to the new one
  function mapCharacters(message, languageA, languageB) {
    //take the message entered, turn it into an array and go through each letter
    return message.map((character) => {
      //the index will be the index of language A
      const index = languageA.indexOf(character);
      //if language A's index is -1 return the original letter/character that was inputted
      if(index === -1) return character;
      //if everything is right, return the index of language B at the same index of language A
      return languageB[index];
    });
  }

  function substitution(input, alphabet, encode = true) {
    // your solution code here

    //if the alphabet does not exist or is less than 26 characters return false
    if(!alphabet || alphabet.length != 26) return false;

    //take all the letters that will be used and turn them into an array, split them up by ""
    const english = "abcdefghijklmnopqrstuvwxyz".split("");
    //take the alphabet letters given and turn them lowercase, split them up by ""
    const alpha = alphabet.toLowerCase().split("");
    //take the input and make it lowercase, split it up by ""
    const message = input.toLowerCase().split("");

    //go through the alphabet 
    for (let i = 0; i < alpha.length; i++) {
      //go through the alphabet list a second time to check for duplicates
      for (let j = i + 1; j < alpha.length; j++) {
        //if there are duplicate characters, return false
        if(alpha[i] === alpha[j]) return false;
      }
    }

    if (encode) return mapCharacters(message, english, alpha).join("");
    return mapCharacters(message, alpha, english).join("");
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
