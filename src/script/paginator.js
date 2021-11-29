import {constants, domElement, variable} from "./constans";
import {showImage} from "./closeShowedImage";

export function pagination(image, wrapper, notesOnPage) {
    wrapper.innerHTML = "";
    variable.numbersPage = Math.ceil(constants.image.length / constants.notesOnPage);
    for (let i = 1; i < variable.numbersPage + 1; i++) {
        let btn = PaginationButton(i, variable.image);
        wrapper.appendChild(btn);
    }
    DisplayList(constants.image, domElement.imageContainer, constants.notesOnPage, variable.currentPage);
}

export function PaginationButton(page, image) { //page принимает значение  i из цикла
    let button = document.createElement('button');
    button.innerText = page;
    if (variable.currentPage === page) {
        button.classList.add('active');
        domElement.currentBtn = button;
    }
    button.addEventListener('click', function (e) {
        domElement.currentBtn.classList.remove('active');
        variable.currentPage = page;
        domElement.currentBtn = e.target;
        DisplayList(constants.image, domElement.imageContainer, constants.notesOnPage, variable.currentPage);
        domElement.currentBtn.classList.remove('active')
        button.classList.add('active')
    })
    return button;
}
export function DisplayList (item, wrapper, currentPage, page) {
    wrapper.innerHTML = "";
    let start = (variable.currentPage-1) * page;
    let end = start + currentPage;
    let paginatedItems = constants.htmlElems.slice(start, end);
    for (let i = 0; i < paginatedItems.length; i++) {
        let item = paginatedItems[i];
        item.addEventListener('click', () => showImage (i));
        wrapper.appendChild(item);
    }
}