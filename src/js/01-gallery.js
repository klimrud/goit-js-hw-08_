
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css'

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

function imageGelleryMarkup(galleryItem) {
    return  galleryItem.map( ({preview, original, description}) =>{
    return `<li>
              <a class="gallery__item" href="${original}">
                <img
                 class="gallery__image"
                 src="${preview}"
                 data-source="${original}"
                 alt="${description}"
                />
             </a>
             </li>`;
  }).join('');
  
};

galleryEl.innerHTML = imageGelleryMarkup(galleryItems) ;
// console.log(galleryEl);

let lightbox = {}

lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
    scrollZoom: false,
  });
  