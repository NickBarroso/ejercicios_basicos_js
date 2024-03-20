//8. Buscar la palabra más larga.

const avengers = [
  "Hulk",
  "Thor",
  "Iron Man",
  "Captain A.",
  "Spiderman",
  "Captain M."
];

function findLongestWord(stringList) {
  let longestWord = [""];
  //Recorremos el array
  for (let i = 0; i < stringList.length; i++) {
    //Al tamaño de cada palabra lo comparamos con el índice cero del nuevo
    //array que hemos creado. Si es mayor la palabra que la que se encuentra en el
    //array longestWord elimina la anterior y añade la nueva. 
    if (stringList[i].length > longestWord[0].length) {
      //S
      longestWord.splice(0, 1, stringList[i]);
    }
  }
  return longestWord;
}

console.log(findLongestWord(avengers));
