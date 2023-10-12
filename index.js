var setaDireita = window.document.getElementById("seta-direita")
var setaEsquerda = window.document.getElementById("seta-esquerda")
var Leornado = window.document.getElementById("Leornado")
var Samantha = window.document.getElementById("Samantha")
var Bruna = window.document.getElementById("Bruna")


function RolarParaDireita() {
    Leornado.style = "display:none"
    Bruna.style = "display:flex"
    setaDireita.style = "display:none"
    setaEsquerda.style = "display:flex; margin-top:55px"
}

function RolarParaEsquerda() {
    Leornado.style = "display:flex"
    Bruna.style = "display:none"
    setaDireita.style = "display:flex; margin-top:55px"
    setaEsquerda.style = "display:none"
}