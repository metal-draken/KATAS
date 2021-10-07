/* Kata: https://www.codewars.com/kata/mirror-object-tcejbo-rorrim/javascript */

class BaseObj {
    constructor() {
    this.abc = "";
    this.arara = "";
    this.xyz = "";
  }};
  
  let obj = new BaseObj;
  
  function kata13(baseObjetc) {
    let listProperties = Object.keys(baseObjetc);
    console.log(listProperties);
    
    let Propertie1 = listProperties[0];
    let InverseName1 = Propertie1.split("").reverse().join("")
    console.log(InverseName1);
    
    let Propertie2 = listProperties[1];
    let InverseName2 = Propertie2.split("").reverse().join("")
    console.log(InverseName2);
    
    let Propertie3 = listProperties[2];
    let InverseName3 = Propertie3.split("").reverse().join("")
    console.log(InverseName3);
    
    let obj2 = new BaseObj;
    obj2[listProperties[0]] = InverseName1;
    obj2[listProperties[1]] = InverseName2;
    obj2[listProperties[2]] = InverseName3;
    
    return obj2
      
  }
  
  kata13(obj);