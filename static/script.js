
const switchTheme = document.querySelector('.switch-theme');
const body = document.body;

switchTheme.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
});

