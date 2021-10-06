/* Kata: https://www.codewars.com/kata/jaden-casing-strings/javascript */

function changeToJaden(originalQuote) {
  let splittedQuote = originalQuote.split(" ");
      
  let firstUpperQuote = splittedQuote.map(function(value){
    return value.charAt(0).toUpperCase() + value.slice(1);    
  });
  
  let finalQuite = firstUpperQuote.join(" ");
  
  console.log(originalQuote);
  console.log(splittedQuote);
  console.log(firstUpperQuote);
  console.log(finalQuite);
  
}

changeToJaden("we were given a garden a gave back a parking lot")