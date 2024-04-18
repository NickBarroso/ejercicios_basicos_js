const names = [
  "Peter",
  "Steve",
  "Tony",
  "Natasha",
  "Clint",
  "Logan",
  "Xabier",
  "Bruce",
  "Peggy",
  "Jessica",
  "Marc",
];

//!Alteranita con métodos JS.
// function nameFinder(nameList, myName) {
//   const findedName = nameList.find((element) => element === myName);
//   const findIndex = nameList.indexOf(findedName);

//   if (findedName) {
//     return [true, findIndex];
//   } else {
//     return false;
//   }
// }

function nameFinder(nameList, myName) {
  for (let i = 0; i < nameList.length; i++) {
    if (nameList[i] === myName) {
      return [true, i];
    }
  }
  //Hay que sacar el return del bucle.
  //Si ha recorrido y no lo encuentra, devuelve false.
  return false;
}

console.log(nameFinder(names, "Peggy"));
console.log(nameFinder(names, "Marc"));
console.log(nameFinder(names, "Ash"));
