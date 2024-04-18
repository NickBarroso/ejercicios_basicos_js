//7. Completa esta función para que, al recibir dos números por argumento,
//te devuelva por consola el más alto de los dos.

function greaterNumber(numberOne, numberTwo) {
  if (numberOne > numberTwo) {
    console.log("El " + numberOne + " es el más alto de los dos números.");
  } else {
    console.log("El " + numberTwo + " es el más alto de los dos números.");
  }
}

greaterNumber(2, 4);
greaterNumber(9, 6);
