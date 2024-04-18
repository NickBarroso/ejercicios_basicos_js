//10. Calcular un promedio.
const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(numberList) {
  let sum = 0;
  for (let num of numberList) {
    sum += num;
  }
  //Redondeamos para tener un promedio más visual.
  return Math.round(sum / numbers.length);
}

console.log(average(numbers));