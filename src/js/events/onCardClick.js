export function onCardClick(event) {
  event.preventDefault();
  console.log(event.target.dataset.id);
  if (event.target === event.currentTarget) {
    return;
  }
}
