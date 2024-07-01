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

window.addEventListener('scroll', () => {
    const container = document.querySelectorAll('.Container-p,.Container-h2,.Container-h1,.Container-h3,.Container-form,.Guitarra,.Enlaces-img,.Container-gifleft,.Container-gifright')
    container.forEach(box => {
        if (box.getBoundingClientRect().top < window.innerHeight * 0.8) {
            box.classList.add('visible');
        }
        else {
            box.classList.remove('visible')

        }
    })
 

}
)

let progress = document.getElementsByClassName('Progressbar')[0];
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function () {
    let progressHeight = (window.scrollY / totalHeight) * 100;
    progress.style.height = progressHeight + "%";
}
let audio = document.querySelector('.audio');
let btnPLay = document.querySelector('.Botones-play').addEventListener('click', () => {
    close()
    audio.play()
}
)
let btnPause = document.querySelector('.Header-pause').addEventListener('click', () => {
    audio.pause()
})
let btnPLayagain = document.querySelector('.Header-play').addEventListener('click', () => {
    audio.play()
})
function close() {
    let box = document.querySelector('.Box')
    let inicio = document.querySelector('.Inicio')
    box.classList.add('active')
    inicio.classList.add('active')


}