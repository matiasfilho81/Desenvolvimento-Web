// Alternar entre tema claro e escuro
const temaBtn = document.getElementById('temaBtn');

temaBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});