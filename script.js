const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu a');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('show');

    if (menu.classList.contains('show')) {
        menuBtn.innerHTML = '&#10006;'; 
    } else {
        menuBtn.innerHTML = '&#9776;';
    }
});

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('show');
        menuBtn.innerHTML = '&#9776;';
    });
});

const voltarInicioBtn = document.createElement('button');
voltarInicioBtn.textContent = '↑';
voltarInicioBtn.classList.add('voltar-topo');
document.body.appendChild(voltarInicioBtn);

voltarInicioBtn.style.display = 'none';

window.addEventListener('scroll', () => {
    const contabilidadeSection = document.getElementById('contabilidade');
    if (contabilidadeSection) {  
        const contabilidadeTop = contabilidadeSection.offsetTop;

        if (window.scrollY >= contabilidadeTop - 100) {
            voltarInicioBtn.style.display = 'block';
        } else {
            voltarInicioBtn.style.display = 'none';
        }
    }
});

voltarInicioBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

const sections = document.querySelectorAll('section');

const handleScroll = () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop <= windowHeight * 0.8) {
            section.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', handleScroll);

handleScroll();
