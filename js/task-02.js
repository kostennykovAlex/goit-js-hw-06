'use strict';

const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
];

const listRef = document.querySelector('#ingredients');


const createEl = (ingredients) => {
    return ingredients.map(element => {
        const item = document.createElement('li');
        item.classList.add('item');
        item.textContent = element
        return item
    })
};

const markUp = createEl(ingredients);

listRef.after(...markUp)
