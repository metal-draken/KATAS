/* Kata: https://www.codewars.com/kata/array-dot-prototype-dot-size/javascript */

function size(arrayToWork) {
    let arrayToOne = arrayToWork.map(function(value){
      return value = 1;    
    });
    
    let arraySum = arrayToOne.reduce(function(total,value) {
      return total + value;
    })
    
    console.log(arrayToOne);
    console.log(arraySum);
    return arraySum
  }
  
  size([1, 4, 5, 6, 7, 8]);
  