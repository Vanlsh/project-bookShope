export function removeBntNavStyles() {
  const buttons = document.querySelectorAll('button[data-category]');
  buttons.forEach(btn => btn.classList.remove('active'));
}
