const btn = document.getElementsByClassName('Header-btn')[0];
const lista = document.getElementsByClassName('Lista')[0];
const btnX = document.getElementsByClassName('Header-x')[0];

function abrirMenu() {
    lista.classList.add('active');
    btnX.classList.add('active');
}
function cerrarMenu() {
    lista.classList.remove('active');
    btnX.classList.remove('active');
}
btn.addEventListener('click', abrirMenu);
btnX.addEventListener('click', cerrarMenu);

const img = document.querySelectorAll('.Galeria-img')
const fullImgCont = document.querySelector('.Full')
const fullImg = document.querySelector('.Full-img')
const btnClose = document.querySelector('.Full-x')
const btnPrev = document.querySelector('.Full-btnPrev')
const btnNext = document.querySelector('.Full-btnNext')

let currentIndex = 0

img.forEach((img, index) => {
    img.addEventListener("click", ()=>{
        currentIndex=index;
        openFull(img.src);
    })
})
function openFull(src) {
    fullImg.src = src;
    fullImgCont.style.display = 'flex';

}
btnClose.addEventListener("click",()=>{
    fullImgCont.style.display= 'none'
})
btnPrev.addEventListener("click",()=>{
    currentIndex=(currentIndex+1)% img.length;
    openFull(img[currentIndex].src)
})
btnNext.addEventListener("click",()=>{
    currentIndex=(currentIndex-1)% img.length;
    openFull(img[currentIndex].src)
})