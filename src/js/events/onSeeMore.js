import { renderCategory } from '../renders/renderCategoryBooks';

export function onSeeMore(event) {
  const categoryName = event.target.dataset.category;
  const btnCategoryTitle = document.querySelector(
    `.item-category button[data-category="${categoryName}"]`
  );
  console.log(btnCategoryTitle);
  btnCategoryTitle.classList.add('active');
  renderCategory(categoryName);
}
