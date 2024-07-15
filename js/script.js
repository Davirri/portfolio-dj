/*Establecemos las constantes o variables  en este caso con un getElement por lo que no es necesario colocar el punto en el nombre para definir la clase
puesto que ya lo especificamos que es un elemento de clase en el getelement y ponemos un 0 entre corchetes al final de cada variable para indicar que es 
el primer elemento puesto que getElementsByClassName devuelve una colección de los elementos que tienen la clase especificada*/
const btn = document.getElementsByClassName('Header-btn')[0];
const lista = document.getElementsByClassName('Lista')[0];
const btnX = document.getElementsByClassName('Header-x')[0];
//Creamos las funciones para abrir y cerrar el menu agregandole y quitandole la clase active a la constante lista y btnX
function abrirMenu() {
    lista.classList.add('active');
    btnX.classList.add('active');
}
function cerrarMenu() {
    lista.classList.remove('active');
    btnX.classList.remove('active');

}
//Agregamos un evento a los botones para que se realizen las funciones de abrir y cerrar el menu al hacer click sobre el elemento
btn.addEventListener('click', abrirMenu);
btnX.addEventListener('click', cerrarMenu);

//Realizamos el mismo proceso de seleccionar y crear las distintas constantes mediante clases
const galeriaMas = document.getElementsByClassName('Galeria')[0];
const btnMas = document.getElementsByClassName('Container-mas')[0];
const btnMenos = document.getElementsByClassName('Container-menos')[0];
//De nuevo creamos diferentes funciones de agregar clase active a las constantes
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
//Creamos el evento mediante click para que realize la función
btnMas.addEventListener('click', abrirGaleria);
btnMenos.addEventListener('click', cerrarGaleria);


/*Establecemos las constantes o variables pero esta vez mediante queryselector lo que nos obliga a poner . o # dependiendo de si es clase o id para seleccionar,
también optimizamos las constantes puesto que todos los elementos full van dentro del contenedor fullImgCont*/
const img = document.querySelectorAll('.Galeria-img')
const fullImgCont = document.querySelector('.Full')
const fullImg = fullImgCont.querySelector('.Full-img')
const btnClose = fullImgCont.querySelector('.Full-x')
const btnPrev = fullImgCont.querySelector('.Full-btnPrev')
const btnNext = fullImgCont.querySelector('.Full-btnNext')
//Ponemos un index que nos va a servir de indice para la s imágenes
let currentIndex = 0
/*Creamos un bucle en este caso con forEach que va a recorrer cada una de las imágenes y le va a agregar un evento de click que realiza 2 cosas, 
la primera es actualizar el currentIndex al indice de la imágen que se hace click y la segunda es llamar a la función openFull con el src de la imágen clicada*/
img.forEach((img, index) => {
    img.addEventListener("click", () => {
        currentIndex = index;
        openFull(img.src);
    })
})
/*Aqui tenemos la función que lo que va a realizar es cambiar del display none que tenemos al display flex para mostrar la imágen en pantalla completa y seleccionamos la imágen clicada mediante el src*/
function openFull(src) {
    fullImg.src = src;
    fullImgCont.style.display = 'flex';

}
//Agregamos un evento al btnClose que nos cambia del display flex al display none para que se cierre la imágen a pantalla completa
btnClose.addEventListener("click", () => {
    fullImgCont.style.display = 'none'
})
/*Agregamos un evento de click al btnNext que nos va a mostrar la siguente imágen mediante la suma de 1 al índice y para asegurarnos que cuando llega al final de la lista nos muestre la primera imágen de vuelta colocamos  el operador % que va a actuar sobre la longitud del array img y por último llamamos a la función openFull para que siga mostrandose en pantalla completa*/
btnNext.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % img.length;
    openFull(img[currentIndex].src)
})
//En este caso realizamos lo mismo pero a la inversa para el btnPrev por lo que al llegar a la primera imágen y hacer click al btnPrev te lleva a la última imágen
btnPrev.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + img.length) % img.length;
    openFull(img[currentIndex].src)
})
// Agregamos un evento de scroll dierctamente sobre la ventana del navegador 
window.addEventListener('scroll', () => {
    //Creamos la constante mediante queryselector que en este caso usamos el All porque vamos a seleccionar varios elementos
    const container = document.querySelectorAll('.Container-p,.Container-h2,.Container-h1,.Container-h3,.Container-form,.Guitarra,.Enlaces-img,.Container-gifleft,.Container-gifright')
    //Creamos un bucle con forEach y nombramos box a cada elemento 
    container.forEach(box => {
        /*Ponemos condicionales que el primero nos dice que la box se vuelva visible en la pantalla cuando entra en el 80% de la altura de la ventana del navegador
        que para calcular esto utilizamos el getBoundingClientRect().top que nos indica la posicion de la box respecto al viewport de la ventana del navegador y el window.innerHeight * 0.8 que calcula la altura de la ventana de visualización que al ser * 0.8 es el 80% */
        if (box.getBoundingClientRect().top < window.innerHeight * 0.8) {
            box.classList.add('visible');
        }
        //En este caso hacemos que sino se cumple la condición anterior remueva la clase visible
        else {
            box.classList.remove('visible')
        }
    })
}
)
//Creamos la variable seleccionandola con getelement en etse caso con clase
let progress = document.getElementsByClassName('Progressbar')[0];
//Aqui calculamos la cantidad total de desplazamiento disponible en la página restando la altura total del documento y la altura de la ventana visible del navegador
let totalHeight = document.body.scrollHeight - window.innerHeight;
/**Creamos una funcion que afecte sobre la ventana del navegador al hacer scroll que lo que nos dice es que segun vayamos haciendo scroll vaya actualizando el estilo de la scrollbar calculando que porcentaje de la página ha sido scrolleada respecto al total, se multiplica por 100 para poner un porcentaje del 0 al 100% ya que el resultado de scrollY y totalHeight va de 0 a 1. El scrollY nos indica la cantidad de pixeles desplazados verticalmente desde la parte superior y el totalHeight es el total*/
window.onscroll = function () {
    let progressHeight = (window.scrollY / totalHeight) * 100;
    progress.style.height = progressHeight + "%";
}
//Utilizamos queryselctor para seleccionar el audio y los botones y crear las variables.Luego agregamos directamente un evento de click sobre las variables de btn
let audio = document.querySelector('.audio');
/*Aquí hacemos que al hacer click al boton de play ocurran dos funciones, la primera sirve para para cambiar de la pantalla de intro a la de inicio de la página mediante añadir y remover clases y la segunda para que se reproduzca el audio*/
let btnPLay = document.querySelector('.Botones-play').addEventListener('click', () => {
    close()
    audio.play()
}
)
//Creamos la función de close que funciona al añadir y remover la clase active
function close() {
    let box = document.querySelector('.Box')
    let inicio = document.querySelector('.Inicio')
    box.classList.add('active')
    inicio.classList.add('active')
} 
//Hacemos que al darle click al botón se pause el audio
let btnPause = document.querySelector('.Header-pause').addEventListener('click', () => {
    audio.pause()
})
//Hacemos que al darle click al nuevo botón de play se reproduzca el audio otra vez
let btnPLayagain = document.querySelector('.Header-play').addEventListener('click', () => {
    audio.play()
})
