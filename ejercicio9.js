//9. Calcular una suma.
const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumNumbers(numberList) {
  let sumTotal = 0;
  for (let i = 0; i < numberList.length; i++) {
    sumTotal += numberList[i];
  }
  return sumTotal;
}

console.log(sumNumbers(numbers));
