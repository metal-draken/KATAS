/*Kata: https://www.codewars.com/kata/calculate-average/javascript */

let ABC = [];
let XYZ = ABC.reduce((a,b) => a + b, 0);
let PROM = XYZ/ABC.length || 0;
console.log(PROM);
    
