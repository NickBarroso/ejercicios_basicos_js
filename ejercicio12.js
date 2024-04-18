//12. Valores únicos.
const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];
  

  //Por norma general, los objetos solo cuentan con keys únicas,
  //entones es suficiente con pasar la lista como "keys" y luego devolverlas.
function removeDuplicates(list) {
  let uniqueList = {}; 

  for (let i = 0; i < list.length; i++) {
      uniqueList[list[i]] = null;
  }

  return Object.keys(uniqueList);
}

 console.log(removeDuplicates(duplicates));