/* https://www.codewars.com/kata/reducing-by-rules-to-get-the-result/javascript */

let array = [2,2,3,4,5,8];

let arrayProcessed = array.reduce(function(total, value) {
    return total*-1 + value*-1
});

let arrayFinal = Math.abs(arrayProcessed);
console.log(arrayFinal);







function reduceByRules(numbersArray) {
    let arrayProcessed = numbersArray.reduce(function(total, value) {
    return total*-1 + value*-1
});

let arrayFinal = Math.abs(arrayProcessed);
  return arrayFinal
};

reduceByRules([2,2,3,4,5,8]);