const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu a');

// Abre/fecha o menu ao clicar no botão
menuBtn.addEventListener('click', () => {
    menu.classList.toggle('show');

    if (menu.classList.contains('show')) {
        menuBtn.innerHTML = '&#10006;'; // ✖
    } else {
        menuBtn.innerHTML = '&#9776;'; // ☰
    }
});

// Fecha o menu ao clicar em qualquer link
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('show');
        menuBtn.innerHTML = '&#9776;';
    });
});

// Botão Voltar ao Topo
const voltarInicioBtn = document.createElement('button');
voltarInicioBtn.textContent = '↑';
voltarInicioBtn.classList.add('voltar-topo');
document.body.appendChild(voltarInicioBtn);

// Esconde o botão inicialmente
voltarInicioBtn.style.display = 'none';

// Mostra ou esconde o botão conforme o scroll
window.addEventListener('scroll', () => {
    const contabilidadeSection = document.getElementById('contabilidade');  // ID da seção 'contabilidade'
    if (contabilidadeSection) {  // Verifica se a seção existe
        const contabilidadeTop = contabilidadeSection.offsetTop;

        if (window.scrollY >= contabilidadeTop - 100) {
            voltarInicioBtn.style.display = 'block';
        } else {
            voltarInicioBtn.style.display = 'none';
        }
    }
});

// Rola suavemente pro topo ao clicar
voltarInicioBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Detecta quando as seções entram na tela
const sections = document.querySelectorAll('section');

const handleScroll = () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Se a seção está na tela (mais de 80% visível)
        if (sectionTop <= windowHeight * 0.8) {
            section.classList.add('visible');
        }
    });
};

// Chama a função quando o usuário rola a página
window.addEventListener('scroll', handleScroll);

// Executa logo ao carregar
handleScroll();
