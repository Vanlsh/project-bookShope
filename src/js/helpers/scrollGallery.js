import { refs } from '../refs';

export function scrollGallery() {
  if (window.innerWidth >= 1422) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  } else {
    refs.gallery.style.minHeight = window.innerHeight + 'px';
    refs.gallery.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}
