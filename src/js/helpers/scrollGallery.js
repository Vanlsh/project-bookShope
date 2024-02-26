import { refs } from '../refs';

// export const scrollGallery = (page, itemsInPage) => {
//   const galleryItemPosition = refs.gallery.getBoundingClientRect();
//   // galleryList.children[indexOfItem].getBoundingClientRect();
//   window.scrollBy({
//     top: 1000,
//     // top: galleryItemPosition.y - window.innerHeight / 2,
//     left: 0,
//     behavior: 'smooth',
//   });
// };

export function scrollGallery() {
  refs.gallery.style.minHeight = window.innerHeight + 'px';
  refs.gallery.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
}
