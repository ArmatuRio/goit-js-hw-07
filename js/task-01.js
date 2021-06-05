
// ------решение 1-----


// const totalCategories = document.querySelectorAll(".item");
// console.log(`В списке ${totalCategories.length} категории.`);

// const categoriesArray = [...totalCategories]
//   .map(
//     categories => `Категория: ${categories.children[0].textContent}
// Количество элементов: ${categories.children[1].children.length}`
//   )
//   .join("\n");
// console.log(categoriesArray);

// ------решение 2-----

const itemlength = (function () {
  const item = document.querySelectorAll('.item');
  return console.log(`В списке ${item.length} категории.`);
})();

const ulCategories = document.querySelector('#categories');

const elemUl = ulCategories.querySelectorAll('.item');

elemUl.forEach((elem) => {
  console.log(`-Категория: ${elem.firstElementChild.textContent}`);
  console.log(
    `-Количество элементов: ${elem.lastElementChild.children.length}`
  );
});