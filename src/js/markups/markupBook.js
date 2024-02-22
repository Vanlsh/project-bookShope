function markup(obj) {
  return '<h class="title">hello <span>world</span></h>';
}

const d = document.querySelector('.js-gallery');

d.innerHTML = markup({});
