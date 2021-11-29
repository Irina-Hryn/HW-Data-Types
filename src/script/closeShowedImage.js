import {constants, domElement} from "./constans";

export function closeShowedImage() {
    console.log('remove ')
    domElement.wrappers.removeChild(document.querySelector('.showedImageWrapper'));
    domElement.wrappers.removeChild(document.querySelector('.blackCover'));
}

export function showImage(index) {
    const clickedPhoto = constants.image[index];
    console.log('clickedPhoto: ', clickedPhoto);

    const blackCover = document.createElement('div');
    blackCover.className = 'blackCover';
    blackCover.onclick = closeShowedImage;

    const showedImageWrapper = document.createElement('div');
    showedImageWrapper.className = 'showedImageWrapper';

    const closeIcon = document.createElement('span');
    closeIcon.innerHTML = "&#10006";
    closeIcon.className = 'closeIcon';
    closeIcon.onclick = closeShowedImage;

    const showedImage = document.createElement('img')
    showedImage.className = 'showedImage';
    showedImage.src = clickedPhoto.url;

    showedImageWrapper.appendChild(closeIcon);
    showedImageWrapper.appendChild(showedImage);
    domElement.wrappers.appendChild(showedImageWrapper);
    domElement.wrappers.appendChild(blackCover);
}


