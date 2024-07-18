let textArea = ''
const messageContainer = document.querySelector("#message-container")
const resultContainer = document.querySelector("#result-container")
const parrafoResultContainer = document.querySelector("#parrafoResult")
const secctionReseult = document.querySelector("#main__result-section")

function functEncrypt(){
    //capturar texto del input
    textArea = document.querySelector("#inputText").value
    mostrarTexto()
}

function mostrarTexto(){
    //cambiar estilos del contenedor 
    secctionReseult.style.padding = "64px 16px 40px 16px"

    if(resultContainer.classList.contains("disable")){
        //Ocultar mensaje 
        messageContainer.classList.toggle("disable")

        //Mostrar texto ingresado
        resultContainer.classList.toggle("disable")
        parrafoResultContainer.innerText = textArea
        
    }else{
        //concatenar texto nuevo ingresado
        parrafoResultContainer.innerText = textArea
    }
    
}