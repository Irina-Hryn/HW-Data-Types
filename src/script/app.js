import {constants, domElement} from "./constans";
import '../style.css';
import {pagination} from "./paginator";

domElement.imageBtn.addEventListener('click', sendRequest);
export async function sendRequest() {
    await fetch(constants.requestURL)
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json();
        })
        .then((photos) => photos.forEach((obj) => constants.image.push(obj)))
        .catch(function (error) {
            console.log(error);
        })
        creatImage(constants.image);
        pagination(constants.image, domElement.items, constants.notesOnPage);
}
sendRequest();

export function creatImage(image) {
    if (!constants.image) {
        return;
    }
    constants.image.forEach(item => {
        for (const element of Object.keys(item)){
            if (element === 'url') {
                const imageElement = document.createElement('img');
                imageElement.src = item[element];
                constants.htmlElems.push(imageElement);
            }
        }
    })
}



