import { galleryItems } from './gallery-items.js';

// Change code below this line
const galleryContainer = document.querySelector('.gallery');

function createGalleryMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
        <li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
          </a>
        </li>
      `;
    })
    .join('');
}

galleryContainer.insertAdjacentHTML('beforeend', createGalleryMarkup(galleryItems));

galleryContainer.addEventListener('click', onGalleryContainerClick);

function onGalleryContainerClick(event) {
  event.preventDefault();

  const isGalleryImageEl = event.target.nodeName === 'IMG';

  if (!isGalleryImageEl) {
    return;
  }

  const { source } = event.target.dataset;

  openModalWindow(source);
}


function openModalWindow(source) {
  const instance = basicLightbox.create(`
    <img src="${source}" width="800" height="600">
`);

  instance.show();
}
