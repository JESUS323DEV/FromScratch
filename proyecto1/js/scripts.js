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

//Pantalla de carga
body.classList.add("noScroll");

setTimeout(() => {
    sectionInicial.classList.add("ocultar");
    hero.classList.remove("ocultar");
    document.querySelector('[data-section="hero"]').classList.add("linkActive");
    about.classList.remove("ocultar");
    galeria.classList.remove("ocultar");
    contacto.classList.remove("ocultar");
    btnToggle.classList.remove("ocultar")
    body.classList.remove("noScroll");
}, 3000);


//===========================A partir de LG min-width: 992px =========================================

const lg = window.matchMedia("(min-width: 992px)");
const sections = document.querySelectorAll("section");

if (lg.matches) {

    setTimeout(() => {
        sectionInicial.classList.add("ocultar");
        hero.classList.remove("ocultar");
        about.classList.add("ocultar");
        galeria.classList.add("ocultar");
        contacto.classList.add("ocultar");
        btnToggle.classList.add("ocultar");
        body.classList.remove("noScroll");
    }, 3000);

    const links = document.querySelectorAll(".linkNav");

    links.forEach(link => {
        const activateLink = () => {
            // Quita la clase activa del resto
            links.forEach(l => l.classList.remove("linkActive"));

            // Añade la clase activa al actual
            link.classList.add("linkActive");

            // Oculta todas las secciones
            sections.forEach(sec => sec.classList.add("ocultar"));

            // Muestra la sección correspondiente
            const target = document.getElementById(link.dataset.section);
            target.classList.remove("ocultar");
        };

        // Activa tanto con click como con focus
        link.addEventListener("click", activateLink);
        link.addEventListener("focus", activateLink);
    });
}







