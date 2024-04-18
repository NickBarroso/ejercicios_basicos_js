const words = [
  "code",
  "repeat",
  "eat",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
];

//Primero miramos si la palabra se encuentra en el bucle, si no,
//salta directamente al "else" y le asigna a la palabra un 1.
//En el caso de que la palabra se encuentre, se le suma un con el ++.

function repeatCounter(wordList) {
  let arrayCount = [];

  for (let word of wordList) {
    if (arrayCount[word]) {
      arrayCount[word]++;
    } else {
      arrayCount[word] = 1;
    }
  }
  return arrayCount;
}

console.log(repeatCounter(words));