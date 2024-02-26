import { setToLocalStorage } from '../localStorageAPI';
import { refsLS } from '../keyConstsLS';

export function onResetCategory() {
  setToLocalStorage(refsLS.categoryName, 'All categories');
}
