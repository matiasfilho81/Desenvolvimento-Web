let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let tentativas = 5;

function adivinhar() {
    const palpite = parseInt(document.getElementById("palpite").value);
    const resultado = document.getElementById("resultado");

    if (palpite === numeroAleatorio) {
        resultado.textContent = "Parabéns! Você adivinhou o número!";
    } else if (palpite < numeroAleatorio) {
        tentativas--;
        resultado.textContent = `Errado! O número é maior. Tentativas restantes: ${tentativas}`;
    } else {
        tentativas--;
        resultado.textContent = `Errado! O número é menor. Tentativas restantes: ${tentativas}`;
    }

    if (tentativas === 0 && palpite !== numeroAleatorio) {
        resultado.textContent = `Fim de jogo! O número correto era ${numeroAleatorio}`;
    }
}