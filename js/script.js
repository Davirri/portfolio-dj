const btn = document.getElementsByClassName('Header-btn')[0];
const lista = document.getElementsByClassName('Lista')[0];
const btnX = document.getElementsByClassName('Header-x')[0];
const btnMas = document.getElementsByClassName('Container-mas')[0];
const galeriaMas = document.getElementsByClassName('Galeria')[0];
const btnMenos = document.getElementsByClassName('Container-menos')[0];


function abrirMenu() {
    lista.classList.add('active');
    btnX.classList.add('active');
}
function cerrarMenu() {
    lista.classList.remove('active');
    btnX.classList.remove('active');
}
function abrirGaleria() {
    galeriaMas.classList.add('active');
    btnMas.classList.add('active');
    btnMenos.classList.add('active');
}
function cerrarGaleria() {
    galeriaMas.classList.remove('active');
    btnMas.classList.remove('active');
    btnMenos.classList.remove('active');
}
btn.addEventListener('click', abrirMenu);
btnX.addEventListener('click', cerrarMenu);
btnMas.addEventListener('click', abrirGaleria);
btnMenos.addEventListener('click', cerrarGaleria);



const img = document.querySelectorAll('.Galeria-img')
const fullImgCont = document.querySelector('.Full')
const fullImg = document.querySelector('.Full-img')
const btnClose = document.querySelector('.Full-x')
const btnPrev = document.querySelector('.Full-btnPrev')
const btnNext = document.querySelector('.Full-btnNext')

let currentIndex = 0

img.forEach((img, index) => {
    img.addEventListener("click", () => {
        currentIndex = index;
        openFull(img.src);
    })
})
function openFull(src) {
    fullImg.src = src;
    fullImgCont.style.display = 'flex';

}
btnClose.addEventListener("click", () => {
    fullImgCont.style.display = 'none'
})
btnNext.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % img.length;
    openFull(img[currentIndex].src)
})
btnPrev.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + img.length) % img.length;
    openFull(img[currentIndex].src)
})