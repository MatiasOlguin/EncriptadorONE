function encriptar(texto){
    tamaño= texto.length;
    resultado="";

    for(var i=0; i<tamaño; i++){
        switch(texto[i]){
            case 'e':
                resultado+="enter";
                break;
            case 'i':
                resultado+="imes";
                break;
            case 'a':
                resultado+="ai";
                break;
            case 'o':
                resultado+="ober";
                break;
            case 'u':
                resultado+="ufat";
                break;
            default:
                resultado+=texto[i];
                break;
        }
    }
    return resultado;
}

function desencriptar(texto){
    while(texto.includes("enter")){
        texto=texto.replace("enter","e");
    }

    while(texto.includes("imes")){
        texto=texto.replace("imes","i");
    }

    while(texto.includes("ai")){
        texto=texto.replace("ai","a");
    }
    
    while(texto.includes("ober")){
        texto=texto.replace("ober","o");
    }
     
    while(texto.includes("ufat")){
        texto=texto.replace("ufat","u");
    }
    return texto;
}

function imprimirEncriptado(){
    mostrarResultado()
    result.value=encriptar(text.value);
}

function imprimirDesencriptado(){
    mostrarResultado()
    result.value=desencriptar(text.value);
}

function copiar(){
    result.select();
    document.execCommand('copy');
    text.value="";
    result.value="";
}

function mostrarResultado(){
    message.style.display="none";
    resultDiv.style.display="flex";
}

const btnEncryptor= document.getElementById("btn-encrypt");
const btnDecryptor= document.getElementById("btn-decrypt");
const btnCopy=document.getElementById("btn-copy");
const message=document.getElementById("message");
const resultDiv=document.getElementById("result");
const result=document.getElementById("text-result");
const text=document.getElementById("text");

text.value="";
result.value="";

btnEncryptor.addEventListener("click", imprimirEncriptado);
btnDecryptor.addEventListener("click", imprimirDesencriptado);
btnCopy.addEventListener("click", copiar);