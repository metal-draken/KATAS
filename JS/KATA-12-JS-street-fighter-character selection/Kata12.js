let fighters = [
  ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
  ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
];

let initialBase= 0;
let initialSubBase = 0

let position = fighters[initialBase][initialSubBase];

function up (){
  initialBase = initialBase + 1;
  return position = fighters[initialBase][initialSubBase];
}

console.log(up())
console.log(position)

let moves = [up];


let fightersUp = fighters[0];
let fightersDown = fighters[1];

console.log(fightersUp);
console.log(fightersDown);

console.log(fighters[0][0])


function streetFighterSelection(moves) {

}

