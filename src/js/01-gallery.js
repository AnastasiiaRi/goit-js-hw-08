import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
const gallery = document.querySelector(".gallery");
const image = galleryItems
.map(({ preview, original, description }) => {
  return `<li class="gallery__item" style="list-style: none";>
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`;
})
.join("");
gallery.insertAdjacentHTML("afterbegin", image);
new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});
  console.log(galleryItems);