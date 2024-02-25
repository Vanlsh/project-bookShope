export function markupTitle(text) {
  const splitTitle = text.split(' ');
  const template = `<span>${splitTitle.pop()}</span>`;
  splitTitle.push(template);
  const title = document.createElement('h1');
  title.classList.add('title');
  title.innerHTML = splitTitle.join(' ');
  return title;
}
