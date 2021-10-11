/* Kata: https://www.codewars.com/kata/simple-elevator/javascript */

function elevator(pisoActual,pisoFuturo) {
    let pisoFuturo2= Number(pisoFuturo);
    let nroDePisos = 4;
    let nroDeBotones = 4;
    console.log(pisoFuturo2);
    
    if (pisoActual < 0 || pisoActual > nroDePisos-1 || pisoFuturo2 < 0 || pisoFuturo2 > nroDeBotones-1) {
      return 0
    } else if (pisoActual === pisoFuturo2 || Number.isFinite(pisoActual) == false || Number.isFinite(pisoFuturo2) == false) {
      return 0
    } else {
      return pisoFuturo2-pisoActual
    }  
}
  
  elevator(3,0);