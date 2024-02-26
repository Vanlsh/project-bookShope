// Логіка для другої сторінки

import { onDeleteBtn } from './events/onDeleteBtn';
import { refsShoppingList } from './refsShoppingList';
import { renderBasketItem } from './renders/renderBasketShList';

renderBasketItem();
refsShoppingList.basketShoppingList.addEventListener('click', onDeleteBtn);
