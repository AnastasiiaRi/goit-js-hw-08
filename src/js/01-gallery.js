import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector(".gallery");
const image = galleryItems
.map(({ preview, original, description }) => {
  return `<li class="gallery__item">
  <a class="gallery__link" href="${original.value}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
})
.join("");
gallery.insertAdjacentHTML("afterbegin", image);

gallery.addEventListener("click", e => {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(`<img src="${e.target.dataset.source}">`,
    {
      onShow: () => {
        window.addEventListener('keydown', onKeydownEsc);
      },
      onClose: () => {
        window.removeEventListener('keydown', onKeydownEsc);
      },
    },
  );
  const onKeydownEsc = e => {
    if (e.key === 'Escape') {
      instance.close();
    }
  };
  instance.show();
});