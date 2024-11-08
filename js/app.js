const botaoAbrirAdd = document.getElementById('botao_add');
const botaoAbrirFormPag = document.getElementById('botao_formPag');
const botaoAbrirDesc = document.getElementById('botao_desc');
const botaoFecharPopup = document.getElementById('fecharPopup');

const popup_addProd = document.getElementById('popup_addProd');
const popup_addFormPag = document.getElementById('popup_addFormPag');
const popup_addDesc = document.getElementById('popup_addDesc');



botaoAbrirAdd.addEventListener('click', () => {
    popup_addProd.style.display = 'block';
});

botaoAbrirFormPag.addEventListener('click', () => {
    popup_addFormPag.style.display = 'block';
});

botaoAbrirDesc.addEventListener('click', () => {
    popup_addDesc.style.display = 'block';
});

window.addEventListener('click', (event) => {
    if (event.target === popup_addProd | event.target === popup_addFormPag | event.target === popup_addDesc) {
        popup_addProd.style.display = 'none';
        popup_addFormPag.style.display = 'none';
        popup_addDesc.style.display = 'none';
    }
});
