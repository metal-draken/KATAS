/* Kata:
https://www.codewars.com/kata/find-the-nth-digit-of-a-number/javascript
*/

function kata01(num, nth) {
    if (num<0) {
        function AAA() {
            num = (num*-1)
        }
        AAA();
    };

       
    let numVar = num;
    let myFunc = aaa => Number(aaa);
    let intArray = Array.from(String(numVar), myFunc);
    intArray.reverse();
    console.log(intArray);
    
    if (nth<0) {
        return -1;
    } else {
        return intArray[nth];

    };
  
};

kata01(-88821, 4);