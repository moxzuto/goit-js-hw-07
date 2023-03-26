import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery');

const createGalleryItem = ({ preview, original, description }) => {
  const li = document.createElement('li');
  li.classList.add('gallery__item');

  const a = document.createElement('a');
  a.classList.add('gallery__link');
  a.href = original;

  const img = document.createElement('img');
  img.classList.add('gallery__image');
  img.src = preview;
  img.alt = description;

  a.appendChild(img);
  li.appendChild(a);

  return li;
};

const galleryItemsList = galleryItems.map(item => createGalleryItem(item));
galleryList.append(...galleryItemsList);

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionDelay: 250
});