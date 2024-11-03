const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 40)
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    navlist.classList.toggle('open');
    if(window.scrollY < 90){
        header.classList.toggle ("sticky");
    }
    
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
}

const topo = document.getElementById("top");

window.addEventListener("scroll", function() {
    topo.classList.toggle ("show-top", window.scrollY > 140)
    topo.classList.toggle ("hide-top", window.scrollY < 140);
});

window.onload = () => {
    topo.classList.toggle ("hide-top");
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    const scrollTopBtn = document.querySelector(".botao-flutuante");
    // Se o usuário rolar mais de 200px da parte superior da página, o botão aparece
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollTopBtn.classList.add("show");
    } else {
        scrollTopBtn.classList.remove("show");
    }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}