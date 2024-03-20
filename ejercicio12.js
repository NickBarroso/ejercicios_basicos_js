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
  function removeDuplicates(list) {
    list.filter((element,index)=>{
      
      return list.indexOf(element) === index;
    })
  }


console.log(removeDuplicates(duplicates));