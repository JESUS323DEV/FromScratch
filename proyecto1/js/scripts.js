//==========================Menu Hamburguesa=======================================

const btnToggle = document.getElementById("btnToggle");
const menuNav = document.getElementById("menuNav");
const btnClose = document.getElementById("btnClose");

btnToggle.addEventListener("click", function () {

    menuNav.classList.remove("activo");
});

btnClose.addEventListener("click", function () {

    menuNav.classList.add("activo");
});

const links = document.querySelectorAll(".linkNav");
links.forEach(link => {
    link.addEventListener("click", () => {
        menuNav.classList.add("activo"); // cierra el menú
    });
});

//========================Mostrar/Ocultar secciones =========================================

const sectionInicial = document.getElementById("sectionInicial");
const hero = document.getElementById("hero");
const about = document.getElementById("about");
const galeria = document.getElementById("galeria");
const contacto = document.getElementById("contacto");
const body = document.body;

body.classList.add("noScroll");
setTimeout(() => {
    sectionInicial.classList.add("ocultar");
    hero.classList.remove("ocultar");
    about.classList.remove("ocultar");
    galeria.classList.remove("ocultar");
    contacto.classList.remove("ocultar");
    btnToggle.classList.remove("ocultar")
    body.classList.remove("noScroll");

}, 3000);






