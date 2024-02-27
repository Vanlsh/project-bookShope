import { onResetCategory } from './events/onResetCategory';
import { refs } from './refs';

const { logo, listNavigation, burgerList } = refs;

logo.addEventListener('click', onResetCategory);
listNavigation.children[0].addEventListener('click', onResetCategory);
burgerList.children[0].addEventListener('click', onResetCategory);
console.log(burgerList.children[0]);
