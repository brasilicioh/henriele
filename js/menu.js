const barraNavegacao = document.getElementById("menu-navegacao");
const menuFixoOff = barraNavegacao.offsetTop;

window.addEventListener("scroll", function () {
    if (window.pageYOffset >= menuFixoOff) {
        barraNavegacao.classList.add("sticky");
    } 
    else {
        barraNavegacao.classList.remove("sticky");
    }
});