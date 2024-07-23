// Inicializacion de constantes y variables
const messageContainer = document.querySelector("#message-container")
const resultContainer = document.querySelector("#result-container")
const parrafoResultContainer = document.querySelector("#parrafoResult")
const secctionReseult = document.querySelector("#main__result-section")
const buttonCopy = document.querySelector("#button-copy")



//Funcion que se ejecuta al dar click en boton encriptar
function btnFunctEncrypt(){
    const textArea = document.querySelector("#inputText").value
    if(inputValidate(textArea)){
        let textoEncriptado = encriptarText(textArea);
        mostrarTexto(textoEncriptado)
    }else{
        Swal.fire({
            icon: "error",
            title: "Error",
            text: 'No se permiten mayusculas ni acentos',
            showConfirmButton: false,
            timer: 1000
        });
    }

    
}


//Funcion que se ejecuta al dar click en boton desencriptar
function btnFunDesencrypt(){
    const text = parrafoResultContainer.textContent
    const textoDesencriptado = desencriptarTexto(text)
    mostrarTexto(textoDesencriptado)
}


//Funcion para mostrar el texto en el contenedor de resultado
function mostrarTexto(textoParaMostrar){
    //cambiar estilos del contenedor para mobile
    if(window.innerWidth < 768){
        secctionReseult.style.padding = "64px 16px 40px 16px"
    }
    
    //Ocultar y mostrar mensaje y texto ingresado 
    if(resultContainer.classList.contains("disable")){
        messageContainer.classList.toggle("disable")
        resultContainer.classList.toggle("disable")
        parrafoResultContainer.innerText = textoParaMostrar  
    }else{
        parrafoResultContainer.innerText = textoParaMostrar
    }

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
    }).catch(function(err){
        Swal.fire({
            icon: "error",
            title: "Error al copiar",
            text: err,
            showConfirmButton: false,
            timer: 1000
        });
    })
}


//Funcion para encriptar 
function encriptarText(str){
    return str.replace(/[aeiou]/gi, function(match){
            switch(match.toLowerCase()){
                case 'a':
                    return 'enter';
                case 'e':
                    return 'imes';
                case 'i':
                    return 'ai';
                case 'o':
                    return 'ober';
                case 'u':
                    return 'ufat';
            }
        })
}


//funcion para desencriptar 
function desencriptarTexto(encryptedStr){
    return encryptedStr.replace(/enter|imes|ai|ober|ufat/gi, function(match){
        switch(match.toLowerCase()){
            case 'enter':
                return 'a';
            case 'imes':
                return 'e';
            case 'ai':
                return 'i';
            case 'ober':
                return 'o';
            case 'ufat':
                return 'u';
        }
    })
}

//Funcion para validar minusculas y acentos
function inputValidate(text){
    const regex = /^[a-z\s]+$/
    return regex.test(text)
}