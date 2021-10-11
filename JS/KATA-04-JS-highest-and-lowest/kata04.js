/* Kata: https://www.codewars.com/kata/highest-and-lowest/javascript */
function MaxMin(stringOfNumbers) {
    let arrayOfNumbers = stringOfNumbers.split(" ").map(Number);
    console.log(arrayOfNumbers);
    return Math.max(...arrayOfNumbers) + " " + Math.min(...arrayOfNumbers);
}

MaxMin("5 8 9 6 3 4 8 15 12");

/*Math.max(2, 5, 4, 8, 10)*/


