//VARIABLES
let textArea = document.querySelector(".contenedor-texto")
let mensaje = document.querySelector (".mensaje")
let imagen= document.querySelector(".encriptado")
let botonContenedor= document.querySelector(".contenedor-parafo")

/* CLAVE PARA ENCRIPTAR
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/

// ENCRIPTAR

function btnEncriptar(){
    const textEncriptado= encriptar(textArea.value)
    mensaje.value=textEncriptado;
    textArea.value="";
    ocultarAdelante()
    }


function encriptar(textoEncriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    textoEncriptado=textoEncriptado.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(textoEncriptado.includes(matrizCodigo[i][0])){
            textoEncriptado=textoEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
            }
        }

        return textoEncriptado
}


// DESENCRIPTAR

function desencriptar(textoDesencriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    textoDesencriptado=textoDesencriptado.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(textoDesencriptado.includes(matrizCodigo[i][1])){
            textoDesencriptado=textoDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
            }
        }

        return textoDesencriptado
}

function btnDesencriptar(){
    const textEncriptado= desencriptar(textArea.value)
    mensaje.value=textEncriptado;
    textArea.value="";
    ocultarAdelante()
    }



//OCULTAR IMAGEN

function ocultarAdelante(){
    imagen.classList.add("ocultar");
    botonContenedor.classList.add("ocultar")}

// BOTON DE COPIAR

function CopiarTexto() {
    let textoCopiar = document.getElementById('mensaje');
    navigator.clipboard.writeText(textoCopiar.value);
    mensaje.value="";
   }