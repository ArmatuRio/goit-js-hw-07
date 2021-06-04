const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы"
];
const ingredElements = document.querySelector('#ingredients')

const elements = ingredients.map(numder =>{

  const li = document.createElement('li');

  li.textContent = numder;

  return li;

});

console.log(elements);

 

ingredElements.append(...elements);

