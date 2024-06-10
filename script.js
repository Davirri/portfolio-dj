const btn = document.getElementsByClassName('Header-btn')[0];
const lista = document.getElementsByClassName('Lista')[0];
const btnX = document.getElementsByClassName('Header-x')[0];

function abrirMenu() {
    lista.classList.add('active');
    btnX.classList.add('active');
}
function cerrarMenu(){
    lista.classList.remove('active');
    btnX.classList.remove('active');
}
btn.addEventListener('click', abrirMenu);
btnX.addEventListener('click',cerrarMenu);
