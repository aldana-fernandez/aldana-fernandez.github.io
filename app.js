//MENU LATERAL
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu() {
    if (menu_visible == false) {
        menu.style.display = "block";
        menu_visible = true;
    }
    else {
        menu.style.display = "none";
        menu_visible = false;
    }
}

//OCULTAR MENU AL SELECCIONAR UNA OPCION
let links = document.querySelectorAll("nav a");
for (var x = 0; x < links.length; x++) {
    links[x].onclick = function () {
        menu.style.display = "none";
        menu_visible = false;
    }
}

//PRELOADER
window.addEventListener('load', () => {
    const contenedor_loader = document.querySelector('.contenedor-loader')
    contenedor_loader.style.opacity = 0
    contenedor_loader.style.visibility = 'hidden'
})