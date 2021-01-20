/*==================== HAMBURGER MENU ROTATION AND SHOW MENU ====================*/
const btnHamburger = document.querySelector(".nav__toggle");
const navMenu = document.getElementById("nav-menu");

btnHamburger.addEventListener("click", btnRotate);
function btnRotate() {
    if (btnHamburger.classList.contains("open")) {
        btnHamburger.classList.remove("open");
        navMenu.style.top = "-100%";
    } else {
        btnHamburger.classList.add("open");
        navMenu.style.top = "3rem";
    }
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    const btnHamburger = document.querySelector(".nav__toggle");
    navMenu.style.top = "-100%";
    btnHamburger.classList.remove('open');
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 200) nav.style.boxShadow = "0 1px 4px rgba(255,255,255,.1)"; else nav.style.boxShadow = "";
}
window.addEventListener('scroll', scrollHeader)
