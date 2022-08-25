import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const imgConteiner = document.querySelector(".gallery");

const creatItem = (galleryItems) => {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
            
                <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
                </a>`;
    })
    .join("");
};

imgConteiner.insertAdjacentHTML("beforeend", creatItem(galleryItems));

const lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionDelay: 250,
  captionsData: "alt",
});
