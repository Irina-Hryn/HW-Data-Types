export const constants = {
    requestURL: 'https://jsonplaceholder.typicode.com/photos?_limit=36',
    notesOnPage: 6,
    htmlElems: [],
    image: [],
    clickedPhoto: []
};
export const domElement = {
    imageBtn: document.querySelector('.getImages'),
    imageContainer: document.querySelector('.container'),
    items: document.querySelector('.paginator'),
    currentBtn: document.querySelector('button.active'),
    wrappers: document.querySelector('.wrapper'),
};

export let variable = {
    numbersPage: 0,
    currentPage: 1
};


