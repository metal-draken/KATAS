/* Kata: https://www.codewars.com/kata/254-shades-of-grey/javascript */

function ShadesOfGrey(howManyGreys) {
    let array = []
    if (howManyGreys > 254) {
      for (let i = 254; i >0 ; i--) {
        array.push(i)
      }
    } else if (howManyGreys<0) {
       for (let i = 254; i >0 ; i--) {
        array.push(0)
      }
    } else {
      for (let i = howManyGreys; i >0 ; i--) {
      array.push(i)
      }
   }
   console.log(array);
   
   let hexArray = array.map (function(value) {
     return value.toString(16)+value.toString(16)+value.toString(16);    
   });
   
   console.log(hexArray);
 }
 
 ShadesOfGrey(254)