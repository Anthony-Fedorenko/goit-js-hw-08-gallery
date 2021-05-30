import images from './gallery-items.js';

const refs = {
    gallery: document.querySelector('.gallery'),
    modal: document.querySelector('.lightbox'),
    modalImg: document.querySelector('.lightbox__image'),
}

const markup = images.map(({ preview, original, description }) => {
    return `<li class='gallery__item'>
    <a class='gallery__link' href='${original}'>
    <img class='gallery__image' data-source='${original}' src='${preview}' alt='${description}'>
    </a>
    </li>`
})

refs.gallery.insertAdjacentHTML('beforeend', markup.join(''))