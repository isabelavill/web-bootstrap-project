/* FUNÇÕES DE INTERAÇÃO BÁSICAS QUANDO PASSAMOS O MOUSE PELAS DIVS DE DESTAQUE E TÓPICOS*/

function onMouseOverDestaque() {
    destaque = document.getElementById("destaque")
    destaque.style.background = "#1280C9"
    destaque.style.color = "white"
}

function onMouseOutDestaque() {
    destaque = document.getElementById("destaque")
    destaque.style.background = "#e3e3e3";
    destaque.style.color = "black";
}


function onMouseOverTopicos() {
    topicos = document.getElementById("topicos")
    topicos.style.background = "#1a9d67"
    topicos.style.color = "white"

}

function onMouseOutTopicos() {
    topicos = document.getElementById("topicos")
    topicos.style.background = "#e3e3e3"
    topicos.style.color = "black"

}

/*MOSTRAR "PÁGINA" SELECIONADA NO MENU*/
function mostrarAtivo(tag) {
    var tag_li = document.getElementById('menu-list');
    var tag_a = tag_li.getElementsByTagName('a');
    for (i = 0; i < tag_a.length; i++) {
        tag_a[i].style.color = "black";
    }
    tag.style.color = "#FBBE0E";
}

function corFonteBotao() {
    var tag_li = document.getElementById('menu-list');
    var tag_a = tag_li.getElementsByTagName('a');
    for (i = 0; i < tag_a.length; i++) {
        tag_a[i].style.color = "black";
    }
    tag.style.color = "black";
}


/*EFEITO DE SURGIR ATRAVÉS DA SCROLLING BAR*/

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

const hiddenElements = document.querySelectorAll(".hidden")
hiddenElements.forEach((el) => observer.observe(el));