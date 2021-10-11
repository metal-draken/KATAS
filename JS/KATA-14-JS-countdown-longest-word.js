/*Kata: https://www.codewars.com/kata/countdown-longest-word/javascript */

let words = ["GAME", "AX", "AGE", "GUM", "MAY", "MUG"];

function isValidWord(letterTokens, word) {
  
  const tokens = letterTokens.split(''); // [ e];
   let isValidWord = true;
    
    // signos  es la word
  for(let i=0; i < word.length; i++){
       letter = word[i];
      
      if(!tokens.includes(letter)){
        isValidWord = false;
        break;
      }
      const indexOfFoundLetter = tokens.indexOf(letter); // 1
      tokens.splice(indexOfFoundLetter, 1)

  }
    return isValidWord;
}

function longestWord(letterTokens){
  
    let wordLength = letterTokens.length;
    let wordsWithTheMaxLenghtPossible = words.filter(word => word.length <= letterTokens.length);
    let validWords = wordsWithTheMaxLenghtPossible.filter(word => isValidWord(letterTokens, word));
    let validWordsOrdered = validWords.sort();
    
  
    function MaxLength() {
      
      if (validWordsOrdered.length != 0) {       
          let maxLength = validWordsOrdered.reduce(function (a, b) {
              return a.length > b.length ? a : b;
          })
          return maxLength;} else {
            return 1
      }    
           
    }; 
  
    console.log(MaxLength().length);
  
  if (validWordsOrdered.length != 0) {
     return validWordsOrdered.filter(function(value){
       return value.length==MaxLength().length
     })} else {
       return null;
     };
            
  }

longestWord("GQEMAUVXY");