/*Kata: https://www.codewars.com/kata/calculate-average/javascript */

let ABC = [];
let XYZ = ABC.reduce((a,b) => a + b, 0);
let PROM = XYZ/ABC.length || 0;
console.log(PROM);
    
let ABC2 = [58,6,97,1112,4,3,85,158,984];
let XYZ2 = ABC2.reduce((a,b) => a + b, 0);
let PROM2 = XYZ2/ABC2.length || 0;
console.log(PROM2);