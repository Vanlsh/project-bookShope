import { refs } from '../refs';

export function scrollGallery() {
  if (window.innerWidth >= 1422) return;
  refs.gallery.style.minHeight = window.innerHeight + 'px';
  refs.gallery.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
}
