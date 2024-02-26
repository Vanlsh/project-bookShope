document.addEventListener('DOMContentLoaded', function() {
    const themeSwitcher = document.querySelector('.header-input');
    const body = document.body;

    // Функція для зміни теми
    function toggleTheme() {
        if (themeSwitcher.checked) {
            body.classList.remove('light');
            body.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark');
            body.classList.add('light');
            localStorage.setItem('theme', 'light');
        }
    }

    // Перевірка збереженої теми при завантаженні сторінки
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.remove('light');
        body.classList.add('dark');
        themeSwitcher.checked = true;
    } else {
        body.classList.remove('dark');
        body.classList.add('light');
        themeSwitcher.checked = false;
    }

    // Додати обробник подій на зміну стану чекбокса
    themeSwitcher.addEventListener('change', function() {
        toggleTheme();
    });
});
