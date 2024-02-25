export function toggleMenu() {
    let menu = document.querySelector('.burger-wraper');
    let burgerIcon = document.querySelector('.header-open-button');

    if (menu.classList.contains('is-closed')) {
        menu.classList.remove('is-closed');
        menu.classList.add('is-open');
        burgerIcon.innerHTML = '<svg class="header-close-icon" width="28" height="28"><use href="../img/icons.svg#icon-x-close"></use></svg>';
    } else {
        menu.classList.remove('is-open');
        menu.classList.add('is-closed');
        burgerIcon.innerHTML = '<svg class="header-close-icon" width="28" height="28"><use href="../img/icons.svg#icon-align-left"></use></svg>';
    }
}
