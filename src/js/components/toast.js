import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const toastOptions = {
  titleColor: '#FFFFFF',
  messageColor: '#FFFFFF',
  messageSize: '20px',
  position: 'topRight',
  displayMode: 'replace',
  closeOnEscape: true,
  pauseOnHover: false,
  maxWidth: 432,
  messageSize: '20px',
  messageLineHeight: '24px',
};

export function toastError(message) {
  iziToast.show({
    message,
    backgroundColor: '#EF4040',
    progressBarColor: '#FFE0AC',
    ...toastOptions,
  });
}

export function toastSuccess(message) {
  iziToast.show({
    message,
    backgroundColor: '#3db919',
    progressBarColor: '#FFE0AC',
    ...toastOptions,
  });
}
