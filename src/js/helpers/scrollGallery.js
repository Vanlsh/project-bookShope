import { refs } from '../refs';

export function scrollGallery() {
  if (window.innerWidth >= 1422) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    return;
  }
  refs.gallery.style.minHeight = window.innerHeight + 'px';
  const top =
    refs.gallery.getBoundingClientRect().top + window.scrollY ||
    window.pageYOffSet;
  window.scrollTo({
    top,
    behavior: 'smooth',
  });
}
