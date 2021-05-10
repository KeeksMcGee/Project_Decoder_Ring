// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here
    
    //change the input to lowercase and split it up using ""
    const split = input.toLowerCase().split("");

    //put the alphabet as an array, also using "" to split it up
    const encoder = [
      ["a", "b", "c", "d", "e"],
      ["f", "g", "h", "(i/j)", "k"],
      ["l", "m", "n", "o", "p"],
      ["q", "r", "s", "t", "u"],
      ["v", "w", "x", "y", "z"],
    ];

    //if encode is true
    if (encode) {
      //take the input message and map it by each letter for matching
      const secretMessage = split.map((letter) => {
        //ascii will now refer to the uticode of the letter being looked at
        const ascii = letter.charCodeAt(0);
        //uticode has lowercase 'a' at 97 and lowercase 'z' at 122, while 32 is a space (" ") 
        //if the numer is less than 'a', more than 'z' and is not a space, return the original character;
        if((ascii < 97 || ascii > 122) && ascii != 32) return;
        //go through the first array
        for (let i = 0; i < encoder.length; i++) {
          //go through the second set of arrays
          for (let j = 0; j < encoder[i].length; j++) {
            //if a letter in the encoder equals the letter in the input, return the numbers(should be two of them)  
            if(encoder[i][j] === letter) return `${j + 1}${i + 1}`;
            //both i and j are equal to 42
            if(letter === "i" || letter === "j") return "42";
            //if the letter equals space, return space
            if(letter === " ") return " ";
          }
        }
      });
      //take everything separated with "" and join them together
      return secretMessage.join("");
    }

    //for decoding
    let secretMessage = "";
    //go through the input array
    for (let i = 0; i < split.length; i+=2) {
      //if part of the input array is a space, add a space to the secretMessage array
      if (split[i] === " ") {
        secretMessage += " ";
        i--;
        continue;
      }
      if (!split[i + 1]) return false;//invalid number of characters
      secretMessage += encoder[split[i + 1] - 1][split[i] - 1];
    }
    return secretMessage;

  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
