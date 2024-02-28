import { refs } from '../refs';
import { IS_OPEN } from '../commonConst';
export function onCloseModal(e) {
  if (e.target !== e.currentTarget && e.key !== 'Escape') return;
  document.body.style.overflow = '';
  refs.modalWrapper.classList.remove(IS_OPEN);
  window.removeEventListener('keydown', onCloseModal);
}
