/*
    Makes the navbar more responsive for smaller screens.
*/

const navButton = document.getElementById("nav-button")
const navMenu = document.getElementById("js-menu")
const navBar = document.getElementById("navbar")

var menuVisible = false;

function handleNavBarResize(){
    if (window.innerWidth <= 1024) {
        navButton.style.display = "flex"
        navButton.classList.toggle("is-active",menuVisible)
        navMenu.style.display = menuVisible ? "flex" : "none"
        navMenu.classList.toggle("nav-items-mobile", menuVisible)
        navBar.classList.toggle("navbar-solid",true)
    } else {
        navButton.style.display = "none"
        navMenu.style.display = "flex"
        navMenu.classList.toggle("nav-items-mobile",false)
        navBar.classList.toggle("navbar-solid",  document.body.scrollTop > 25 || document.documentElement.scrollTop > 25)
    }
}

function toggleNavbarVisible(){
    menuVisible = !menuVisible
}

function onNavButtonClicked(){
    toggleNavbarVisible()
    handleNavBarResize();
}

window.addEventListener("resize", handleNavBarResize)
navButton.addEventListener("click", onNavButtonClicked)
handleNavBarResize();