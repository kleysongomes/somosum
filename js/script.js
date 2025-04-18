function abrirModal(imagem, texto) {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const modalTexto = document.getElementById('modal-texto');

    modal.style.display = 'flex';
    modalImg.src = imagem;
    modalTexto.textContent = texto;
}

function fecharModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}