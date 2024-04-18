//8. Buscar la palabra más larga.

const avengers = [
  "Hulk",
  "Thor",
  "Iron Man",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];

function findLongestWord(stringList) {
  let longestWord = "";
  //Recorremos el array
  for (let i = 0; i < stringList.length; i++) {
    //  Al tamaño de cada palabra lo comparamos con el índice cero del nuevo
    //  array que hemos creado. Si es mayor la palabra que la que se encuentra en el
    //  array longestWord elimina la anterior y añade la nueva.

    //Nota: en este caso, no devuelve Captain M. porque tienen la misma cantidad de letras,
    //para que devuelva la última palabra solo hay que cambiar la comparación a >=.
    if (stringList[i].length > longestWord.length) {
      longestWord = stringList[i];
    }
  }
  return longestWord;
}

console.log(findLongestWord(avengers));