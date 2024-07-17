let textArea = ''
let messageContainer = ''
let resultContainer = ''

function functEncrypt(){
    textArea = document.querySelector("#inputText").value
    console.log(textArea)
    mostrarTexto()
}

function mostrarTexto(){
    messageContainer = document.querySelector("#message-container")
    messageContainer.classList.toggle("disable")
    resultContainer = document.querySelector("#result-container")
    resultContainer.innerHTML = "<p>"+textArea+"</p>"

}