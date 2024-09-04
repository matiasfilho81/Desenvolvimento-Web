let tempoInicio;
let tempoReacao;
const quadrado = document.getElementById('quadrado');
const tempoReacaoDisplay = document.getElementById('tempoReacao');

function aparecerQuadrado() {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);

    quadrado.style.left = `${x}px`;
    quadrado.style.top = `${y}px`;

    quadrado.classList.add('aparecer');
    tempoInicio = new Date().getTime();
}

function esconderQuadrado() {
    quadrado.classList.remove('aparecer');
    tempoReacao = new Date().getTime() - tempoInicio;
    tempoReacaoDisplay.textContent = tempoReacao;

    setTimeout(aparecerQuadrado, Math.random() * 2000 + 1000);
}

quadrado.addEventListener('click', esconderQuadrado);

setTimeout(aparecerQuadrado, Math.random() * 2000 + 1000);