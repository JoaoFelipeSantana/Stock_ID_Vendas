const botaoMais = document.getElementById('btn_mais');
const popup_editDelete = document.getElementById('popup_edicao');

botaoMais.addEventListener('click', () => {
    popup_editDelete.style.display = 'block';
});

window.addEventListener('click', (event) => {
    if (event.target === popup_editDelete) {
        popup_editDelete.style.display = 'none';
    }
});

