function compoundArray(a, b) {
    const arrayToReturn = [];
    
    const longerArrayLenght = a.length > b.length ? a.length : b.length;
    
    for(let i = 0 ; i < longerArrayLenght ; i++) {
      
      if(typeof a[i] === 'number') {
        arrayToReturn.push(a[i]);
      }
      
       if(typeof b[i] === 'number') {
        arrayToReturn.push(b[i]);
      }
      
    }
    
    return arrayToReturn;
  }
  
  
  compoundArray([1,5,9,7,1,58,8], [8,7,5,6,1])