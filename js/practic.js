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