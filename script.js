const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('show');

    // Trocar o ícone do botão
    if (menu.classList.contains('show')) {
        menuBtn.innerHTML = '&#10006;'; // X
    } else {
        menuBtn.innerHTML = '&#9776;'; // ☰
