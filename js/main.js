/* ============================================
   UNICIVE EAD - Polo Caruaru
   Script principal — Modal de tutoriais
   ============================================ */

// Configuração dos tutoriais
// Para trocar o vídeo de cada tutorial, substitua o "videoId"
// pelo ID do vídeo no YouTube (a parte que vem após "v=" na URL).
const tutoriais = {
    1: {
        titulo: 'Como usar a plataforma EAD',
        videoId: 'COLE_O_ID_1'
    2: {
        titulo: 'Como conferir a área financeira',
        videoId: 'COLE_O_ID_2'
    },
    3: {
        titulo: 'Como conferir o reconhecimento pelo MEC',
        videoId: 'COLE_O_ID_3'
    },
    4: {
        titulo: 'Como preencher o formulário de matrícula',
        videoId: 'COLE_O_ID_4'
    }
};

// Abre o modal carregando o vídeo correspondente
function abrirModal(num) {
    const t = tutoriais[num];
    if (!t) return;

    document.getElementById('modalNumero').textContent = num;
    document.getElementById('modalTitulo').textContent = t.titulo;
    document.getElementById('modalFrame').src =
        `https://www.youtube.com/embed/${t.videoId}?autoplay=1`;

    document.getElementById('videoModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Fecha o modal e para o vídeo
function fecharModal() {
    document.getElementById('videoModal').classList.remove('active');
    document.getElementById('modalFrame').src = '';
    document.body.style.overflow = '';
}

// Fecha ao clicar fora do conteúdo
function fecharModalOverlay(e) {
    if (e.target === document.getElementById('videoModal')) {
        fecharModal();
    }
}

// Fecha com a tecla ESC
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') fecharModal();
});

// Suporte a navegação por teclado nos cards (Enter / Espaço)
document.querySelectorAll('.tut-card').forEach(card => {
    card.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            card.click();
        }
    });
});
