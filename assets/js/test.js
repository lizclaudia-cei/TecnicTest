//----------------------------------------
// Variables
//----------------------------------------

const tabsList = document.querySelectorAll('.Footer-Tab');
const tabsContent = document.querySelectorAll('.Main-tabContent');
const menuButton = document.getElementById('menuButton');
const body = document.querySelector('body');
const navList = document.getElementById("nav-list");
const collectionTxt = document.getElementById("collectionText");
const linkFurniture = document.getElementById("linkFurniture");
const image = document.getElementById("image");
let index = 0;
const time = 5000;

let autoScrollTimeout;

//----------------------------------------
// Functions
//----------------------------------------

/**
 * Función para que al hacer clic se muestre un contenido y se oculte el resto
 */
tabsList.forEach(tab => tab.addEventListener('click', () => {
    tabsContent.forEach(content => content.id === tab.dataset.tab ? content.classList.add('u-visible') : content.classList.remove('u-visible'));
    tabsList.forEach(tab => tab.classList.remove('u-active'));
    tab.classList.toggle('u-active');
}));

/**
 * Función para que haga scroll automaticamente  despues de cierto tiempo
 * @param {number} index - Indice del contenido a mostrar
 * @param {number} time - Tiempo en milisegundos
 */
function autoScroll(index, time){
    index = (index + 1) % tabsList.length;
    tabsList.forEach(tab => tab.classList.remove('u-active'));
    tabsList[index].classList.add('u-active');
    tabsContent.forEach(content => content.classList.remove('u-visible'));
    tabsContent[index].classList.add('u-visible');
    autoScrollTimeout = setTimeout(() => autoScroll(index, time), time);
}

//----------------------------------------
// Inits & Event Listeners
//----------------------------------------
autoScroll(index, time);

menuButton.addEventListener('click', () => {
    clearTimeout(autoScrollTimeout);
    tabsContent.forEach(content => content.id === menuButton.dataset.tab ? content.classList.toggle('u-visible') : content.classList.remove('u-visible'));
    tabsList.forEach(tab => tab.classList.remove('u-active'));
    body.classList.toggle('u-dark');
    menuButton.classList.toggle('u-active');
    if(menuButton.classList.contains('u-active') ){
        menuButton.innerHTML = `<span class="material-symbols-outlined">close</span>`
    }else{
        menuButton.innerHTML = `<span class="material-symbols-outlined">menu</span>`;
        autoScroll(index, time);
    }
      
});

collectionTxt.addEventListener('mouseover', () => {
    navList.classList.toggle("open");
});

linkFurniture.addEventListener('mouseover', () => {
    console.log(linkFurniture);
    console.log(image);
    image.classList.toggle('imageVisible');
});
linkFurniture.addEventListener('mouseout', () => {
    image.classList.remove('imageVisible');
});