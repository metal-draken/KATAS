/* https://www.codewars.com/kata/find-the-unique-number-1/javascript*/

function findUniq(array) {
    const arrayOrdered = array.sort();
    console.log(arrayOrdered);
  
    const Index = array.length-1
    const Indexminus = array.length-2
  
    if (arrayOrdered[Index] == arrayOrdered[Indexminus]) {
       return arrayOrdered[0];
    } else {
      return arrayOrdered[Index];
    }
        
    console.log(arrayOrdered);
    console.log(Index);
    
          
}

findUniq([2, 2, 2, 5, 2, 2, 2, 2, 2, 2])
findUniq([2, 2, 2, 2, 2, 2, 2, 1, 2, 2])
findUniq([2, 0.3, 2, 2, 2, 2, 2, 2, 2, 2])
findUniq([2, 0.3, 2, 2, 2, 2, 2, 83, 2, 2])