export function toggleMenu() {
    let menu = document.querySelector('.burger-wraper');
    let burgerIcon = document.querySelector('.burger-icon');

    if (menu.classList.contains('is-closed')) {
        menu.classList.remove('is-closed');
        menu.classList.add('is-open');
        burgerIcon.innerHTML = 'Хрестик';
    } else {
        menu.classList.remove('is-open');
        menu.classList.add('is-closed');
        burgerIcon.innerHTML = 'Бургер';
    }
}
