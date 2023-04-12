
    function encriptar(){
        var texto = document.getElementById("textoEncriptado").value.toLowerCase();

        var textoEncriptado = texto.replace(/e/img, "enter");
        var textoEncriptado = textoEncriptado.replace(/o/img, "ober");
        var textoEncriptado = textoEncriptado.replace(/i/img, "imes");
        var textoEncriptado = textoEncriptado.replace(/a/img, "ai");
        var textoEncriptado = textoEncriptado.replace(/u/img, "ufat");

        document.getElementById("textoDesencriptado").innerHTML = textoEncriptado;
    }
    var btn = document.querySelector("#botonEncriptado");
        btn.onclick = encriptar;

    function desencriptar(){
        var texto = document.getElementById("textoEncriptado").value.toLowerCase();

        var textoEncriptado = texto.replace(/enter/img, "e");
        var textoEncriptado = textoEncriptado.replace(/ober/img, "o");
        var textoEncriptado = textoEncriptado.replace(/imes/img, "i");
        var textoEncriptado = textoEncriptado.replace(/ai/img, "a");
        var textoEncriptado = textoEncriptado.replace(/ufat/img, "u");

        document.getElementById("textoDesencriptado").innerHTML = textoEncriptado;
    }

    var btn2 = document.querySelector("#botonDesencriptado");
        btn2.onclick = desencriptar;

    function copiar(){
        var contenido = document.querySelector("#textoDesencriptado");
        contenido.select();
        document.execCommand("copy");
    }

    var btn3 = document.querySelector("#botonCopiar");
    btn3.onclick = copiar;