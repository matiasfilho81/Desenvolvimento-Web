const rato = document.getElementById('rato');
const mensagem = document.getElementById('mensagem');

function moverRato() {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);

    rato.style.left = `${x}px`;
    rato.style.top = `${y}px`;
}

function verificarColisao(event) {
    const rect = rato.getBoundingClientRect();
    const x = event.clientX;
    const y = event.clientY;

    if (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) {
        mensagem.textContent = 'Você tocou no rato! Tente novamente.';
        mensagem.style.color = 'red';
        clearInterval(intervaloMover);
    }
}

let intervaloMover = setInterval(moverRato, 1000);
window.addEventListener('mousemove', verificarColisao);