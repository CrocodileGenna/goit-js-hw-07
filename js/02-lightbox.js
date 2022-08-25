import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const imgConteiner = document.querySelector(".gallery");

const creatItem = (galleryItems) => {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
            <div class="gallery__item">
                <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
                </a>
            </div>`;
    })
    .join("");
};

imgConteiner.insertAdjacentHTML("beforeend", creatItem(galleryItems));

imgConteiner.addEventListener("click", openImg);

const factotis = new SimpleLightbox(".galery a", {
  caption: true,
  captionDelay: 250,
  captionData: "alt",
});

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
  imgConteiner.addEventListener("keydown", escapeFunction);
  function escapeFunction(e) {
    if (e.code !== "Escape") {
      return;
    }
    const elem = instance.close();
  }
}
