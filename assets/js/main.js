const botao = document.querySelector('#menu__botao');

function menuHamburguer() {
    const nav = document.querySelector('#nav')

    nav.classList.toggle('active')
}

botao.addEventListener("click",menuHamburguer)

