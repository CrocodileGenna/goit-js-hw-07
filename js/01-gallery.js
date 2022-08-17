import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const inGallery = document.querySelector(`.gallery`);

const objectPhoto = (galleryItems) => {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
    </a>
    </div>`;
    })
    .join(" ");
};

inGallery.insertAdjacentHTML("beforeend", objectPhoto(galleryItems));

inGallery.addEventListener("clock", focusPhoto);

function openImg(e) {
  e.preventDefault();
  const galleryImg = e.target.classList.contains("gallery__image");
  if (!galleryImg) {
    return;
  }
  const eventImg = e.target.dataset.source;

  let instance = basicLightbox.create(`
    <img src="${eventImg}"  width="800" height="600">
`);

  instance.show();
  inGallery.addEventListener("keydown", escapeFunction);
  function escapeFunction(e) {
    if (e.code !== "Escape") {
      return;
    }
    const elem = instance.close();
  }
}
