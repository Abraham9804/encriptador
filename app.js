let textArea = ''
const messageContainer = document.querySelector("#message-container")
const resultContainer = document.querySelector("#result-container")
const parrafoResultContainer = document.querySelector("#parrafoResult")
const secctionReseult = document.querySelector("#main__result-section")
const buttonCopy = document.querySelector("#button-copy")

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

    //Mandar a llamar la funcion para copiar
    buttonCopy.addEventListener("click", copyText)
}




//Funcion para aumentar altura de textarea
function auto_grow(element) {
    element.style.height = "5px";
    element.style.height = (element.scrollHeight) + "px";
}


//Funcion para copiar texto al portapapeles
function copyText(){
    const text = parrafoResultContainer.textContent
        navigator.clipboard.writeText(text)
        .then(function(){
            Swal.fire({
                icon: "success",
                title: "Texto copiado",
                text: text,
                showConfirmButton: false,
                timer: 1000
              });
        }).catch(function(err) {
            Swal.fire({
                icon: "error",
                title: "Error al copiar",
                text: err,
                showConfirmButton: false,
                timer: 1000
              });
        })
  }