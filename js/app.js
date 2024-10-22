const botaoAbrirPopup = document.getElementById('botao_add');
const botaoFecharPopup = document.getElementById('fecharPopup');
const popup = document.getElementById('popup');

botaoAbrirPopup.addEventListener('click', () => {
    popup.style.display = 'block';
});

botaoFecharPopup.addEventListener('click', () => {
    popup.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.style.display = 'none';
    }
});
