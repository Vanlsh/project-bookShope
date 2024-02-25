export function onCardClick(event) {
  if (event.target === event.currentTarget) return;
  const id =
    event.target.dataset.id || event.target.closest('li[data-id]').dataset.id;
  console.log(id);
}
