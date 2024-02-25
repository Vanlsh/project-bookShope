import { renderCategory } from '../renders/renderCategoryBooks';

export function onSeeMore(event) {
  event.preventDefault();
  const categoryName = event.target.dataset.category;
  renderCategory(categoryName);
}
