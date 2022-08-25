import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const inGallery = document.querySelector(`.gallery`);

const objectPhoto = (galleryItems) => {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <a class="gallery__link" href="${original}">
    <img class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
    </a>`;
    })
    .join(" ");
};

inGallery.insertAdjacentHTML("beforeend", objectPhoto(galleryItems));

const factotis = new SimpleLightbox(".galery a", {
  caption: true,
  captionDelay: 250,
  captionData: "alt",
});
