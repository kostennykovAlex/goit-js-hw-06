'use strict';
const catList = document.querySelector('#categories');
const category = document.querySelectorAll('.item');
const message = `Number of categories: ${category.length}`
console.log(message);

const itemList = category.forEach((element) => {
    const categoryTitle = element.firstElementChild;
    console.log(`Categories: ${categoryTitle.textContent}`);
    const ELCunt = element.lastElementChild
    console.log(`Elements: ${ELCunt.children.length}`);
});

