const menuBarras = document.querySelector('.fa-bars');
const mostrarMenu = document.querySelector('.main-nav');

console.log(menuBarras);
console.log(mostrarMenu);

menuBarras.addEventListener('click', ()=>{
    mostrarMenu.classList.toggle('spread');
    // alert("hola");
})

window.addEventListener('click', (e)=>{
    if(mostrarMenu.classList.contains('spread') && e.target != mostrarMenu && e.target != menuBarras){

        mostrarMenu.classList.toggle('spread');
    }
})

