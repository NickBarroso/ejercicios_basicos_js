//11. Promedio mezclado.
const mixedElements = [
  6,
  1,
  "Marvel",
  1,
  "hamburguesa",
  "10",
  "Prometeo",
  8,
  "Hola mundo",
];
function averageWord(list) {
  //Declaramos nuestra variable que contendrá la suma.
  let sum = 0;
  //Recorremos el array.
  for (let data of list) {
    //Si el tipo de dato es un string, suma su length, si no, lo ignora y suma el entero.
    if (typeof data === "string") {
      sum += data.length;
    } else {
      sum += data;
    }
  }

  return sum / list.length;
}

console.log(averageWord(mixedElements));
