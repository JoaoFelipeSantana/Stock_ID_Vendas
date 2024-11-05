const botaoAbrirAdd = document.getElementById('botao_add');
const botaoAbrirFormPag = document.getElementById('botao_formPag')
const botaoFecharPopup = document.getElementById('fecharPopup');
const popup_addProd = document.getElementById('popup_addProd');
const popup_addFormPag = document.getElementById('popup_addFormPag');

botaoAbrirAdd.addEventListener('click', () => {
    popup_addProd.style.display = 'block';
});

botaoAbrirFormPag.addEventListener('click', () => {
    popup_addFormPag.style.display = 'block';
});

botaoFecharPopup.addEventListener('click', () => {
    popup_addProd.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === popup_addProd | event.target === popup_addFormPag) {
        popup_addProd.style.display = 'none';
        popup_addFormPag.style.display = 'none';
    }
});
