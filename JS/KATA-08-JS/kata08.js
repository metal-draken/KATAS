/* Kata: https://www.codewars.com/kata/credit-card-mask/javascript */


function maskify(cardNumber) {
    const cardNumberIndex = cardNumber.split("");
      for (var i=0; i < cardNumberIndex.length-4; i++) {
        cardNumberIndex[i] = "#"
      }
    
      const finalOutput = cardNumberIndex.join("");
      
      /*console.log(cardNumberIndex);*/
      console.log(finalOutput);
    
    }
    
    
    
    maskify("8586998858452658")
    maskify("Skippy")
    maskify("Nananananananananananananananana Batman!")
    maskify("1")
    maskify("11")
    maskify("111")
    maskify("1111")
    maskify("11111")