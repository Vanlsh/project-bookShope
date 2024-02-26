import { getFromLocalStorage, setToLocalStorage} from './localStorageAPI';
import { refsLS } from './keyConstsLS';
import { refs } from './refs';

    


function checkTheme() {
    const savedTheme = getFromLocalStorage(refsLS.theme);
  if (savedTheme === 'dark') {
    refs.body.classList.remove('light');
    refs.body.classList.add('dark');
    refs.themeSwitcher.checked = true;
  } else {
    refs.body.classList.remove('dark');
    refs.body.classList.add('light');
    refs.themeSwitcher.checked = false;
  }
  document.body.classList.remove('theme-loading');
}
checkTheme();
function toggleTheme() {
  if (themeSwitcher.checked) {
    refs.body.classList.remove('light');
    refs.body.classList.add('dark');
      setToLocalStorage(refsLS.theme,'dark');
  } else {
    refs.body.classList.remove('dark');
    refs.body.classList.add('light');
    setToLocalStorage(refsLS.theme, 'light');
  }
}
refs.themeSwitcher.addEventListener('change', function () {
  toggleTheme();
});