const inputTexto = document.getElementById('input_texto');
const bttnEncriptar = document.getElementById('bttn_encriptar');
const bttnDesencriptar = document.getElementById('bttn_desencriptar');
const inputResultado = document.getElementById('mensaje_texto');
const bttnCopiar = document.getElementById('bttn_copytext');
const soloLetras = '^[a-z !ñ]+$';

document.addEventListener('DOMContentLoaded',() => {
    bttn_encriptar.addEventListener('click', encriptartexto);
    bttn_desencriptar.addEventListener('click', desencriptarTexto);
    bttn_copytext.addEventListener('click', copiarTexto);
});

function encriptartexto (e) {
    e.preventDefault();
    inputResultado.value = '';
    let texto = inputTexto.value;

    if (texto.match(soloLetras)!=null){
        let palabras = texto.split('');
        let nuevasPalabras = [];

        for(let palabra of palabras){
            palabra = palabra.replaceAll('e','enter');
            palabra = palabra.replaceAll('i','imes');
            palabra = palabra.replaceAll('a','ai');
            palabra = palabra.replaceAll('u','ufat');
            palabra = palabra.replaceAll('o','ober');

            nuevasPalabras.push(palabra);
        }

        const resultado = nuevasPalabras.join('');

        inputResultado.value = resultado;

    }else {
        mostrarError('Solo se permiten minusculas, sin acentos');
        return;
    }
}

function desencriptarTexto(e){
    e.preventDefault();
    inputResultado.value = '';
    let texto = inputTexto.value;

    if(texto.match(soloLetras)!=null){
        let palabras = texto.split("");
        let nuevasPalabras = [];

        for (let palabra of palabras){
            palabra = palabra.replaceAll('enter','e');
            palabra = palabra.replaceAll('imes','i');
            palabra = palabra.replaceAll('ai','a');
            palabra = palabra.replaceAll('ufat','u');
            palabra = palabra.replaceAll('ober','o');
            nuevasPalabras.push(palabra);
        }

        const resultado = nuevasPalabras.join('');

        inputResultado.value = resultado;
    }else {
        mostrarError('Solo se permiten minusculas, sin acentos');
        return;
    }
}

function mostrarError(mensaje){
    const existeError = document.querySelector('.error');

    if(!existeError){
        const formulario = document.getElementById('formulario');
        const divmessage = document.createElement('div');
        divmessage.classList.add('error');

        divmessage.textContent = mensaje;
        formulario.appendChild(divmessage);

        setTimeout(() => {
            divmessage.remove();
        }, 3000)
    }
}

function copiarTexto(e){
    e.preventDefault();
    const mensaje = inputResultado.value;

    navigator.clipboard.writeText(mensaje);
}