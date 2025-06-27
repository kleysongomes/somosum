document.addEventListener('DOMContentLoaded', function() {

    // =================================================================
    // CONFIGURAÇÃO DA GALERIA DE FOTOS
    // Para adicionar uma foto:
    // 1. Faça o upload do arquivo para a pasta /imgs/
    // 2. Adicione o nome do arquivo na lista abaixo, dentro das aspas.
    // =================================================================
    const galeriaDeImagens = [
        "36.jpg",
        "01.jpg",
        "02.jpg",
        "03.jpg",
        "04.jpg",
        "05.jpg",
        "06.jpg",
        "07.jpg",
        "08.jpg",
        "09.jpg",
        "10.jpg",
        "11.jpg",
        "12.jpg",
        "13.jpg",
        "14.jpg",
        "15.jpg",
        "16.jpg",
        "17.jpg",
        "18.jpg",
        "19.jpg",
        "20.jpg",
        "21.jpg",
        "22.jpg",
        "23.jpg",
        "25.jpg",
        "26.jpg",
        "27.jpg",
        "28.jpg",
        "29.jpg",
        "30.jpg",
        "33.jpg",
        "34.jpg",
        "35.jpg",
        "36.jpg",
        // Adicione mais nomes de arquivos aqui. Ex: "minha-outra-foto.jpg"
    ];


    // --- NÃO PRECISA EDITAR DAQUI PARA BAIXO ---

    // 1. FUNÇÃO PARA CRIAR A GALERIA DINAMICAMENTE
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    if (swiperWrapper) {
        galeriaDeImagens.forEach(nomeDaImagem => {
            const slide = document.createElement('div');
            slide.className = 'swiper-slide';
            
            const img = document.createElement('img');
            img.src = `imgs/${nomeDaImagem}`;
            img.alt = `Foto do encontro - ${nomeDaImagem}`; // Texto alternativo
            
            slide.appendChild(img);
            swiperWrapper.appendChild(slide);
        });
    }

    // 2. INICIALIZAÇÃO DA GALERIA SWIPER.JS
    const swiper = new Swiper('.swiper', {
        loop: true,
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
    });

    // 3. EFEITO DO CABEÇALHO AO ROLAR
    const header = document.getElementById('main-header');
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 50);
    });

    // 4. DESTAQUE DO LINK ATIVO NO MENU CONFORME A ROLAGEM
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('#main-header nav a');

    const observerOptions = {
        root: null, // usa a viewport como "caixa" de observação
        rootMargin: '0px',
        threshold: 0.5 // ativa quando 50% da seção estiver visível
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const targetId = `#${entry.target.id}`;
                
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === targetId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // 5. INICIALIZAÇÃO DAS ANIMAÇÕES AOS (Animate On Scroll)
    AOS.init({
        duration: 800,
        once: true,
        offset: 100,
    });

});