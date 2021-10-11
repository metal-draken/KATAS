let fighters = [
    ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
    ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
  ];
  
  let initialBase = 0;
  let initialSubBase = 0
  
  let position = fighters[initialBase][initialSubBase];
  
  function up(){
    if (initialBase == 0) {
      return position = fighters[initialBase][initialSubBase]
    } else {
    initialBase = initialBase - 1;
    return position = fighters[initialBase][initialSubBase];
  }}
  
  function down(){
      if (initialBase == 1) {
      return position = fighters[initialBase][initialSubBase]
    } else {
    initialBase = initialBase + 1;
    return position = fighters[initialBase][initialSubBase];
  }}
  
  function left() {
    if (initialSubBase == 0) {
     return position = fighters[initialBase][5]
    } else {
      initialSubBase = initialSubBase - 1;
    return position = fighters[initialBase][initialSubBase];
  }}
  
  function right() {
    if (initialSubBase == 5) {
     return position = fighters[initialBase][0]
    } else {
      initialSubBase = initialSubBase + 1;
    return position = fighters[initialBase][initialSubBase];
  }}
  
  let moves = [up, down, down, right, right, left, down, up, right];
  
  console.log(fighters[0]);
  console.log(fighters[1]);
  console.log(fighters[0][0])
  
  console.log(position);
  console.log(left());
  console.log(position);
  
  let initialPosition = fighters[0][0];
  
  /*let finalPosition = moves.map(function(element){
    return element();
  });
  
  console.log(finalPosition)*/
  
  function streetFighterSelection(fighters, position, moves) {
  let finalPosition = moves.map(function(element){
    return element();
  });
  return finalPosition;
  }
  
  streetFighterSelection(fighters, position, moves)