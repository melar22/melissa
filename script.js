/*e -->enter
o -->ober
i -->imes
a -->ai
u -->ufat
*/

function encriptar(){
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    //i es para que afecte tanto mayusculas como minusculas
    //g sirve para que toda la linea aparezca
    //m es para que afecte a multiples lineas o parrafos

    var txtCifrado= texto.replace(/e/igm,"enter");
    var txtCifrado= txtCifrado.replace(/o/igm,"ober");
    var txtCifrado= txtCifrado.replace(/i/igm,"imes");
    var txtCifrado= txtCifrado.replace(/a/igm,"ai");
    var txtCifrado= txtCifrado.replace(/u/igm,"ufat");

    document.getElementById("imgDer").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display="show";
    document.getElementById("copiar").style.display= "inherit";

}

function desencriptar(){
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    //i es para que afecte tanto mayusculas como minusculas
    //g sirve para que toda la linea aparezca
    //m es para que afecte a multiples lineas o parrafos

    var txtCifrado= texto.replace(/enter/img,"e");
    var txtCifrado= txtCifrado.replace(/ober/img,"o");
    var txtCifrado= txtCifrado.replace(/imes/img,"i");
    var txtCifrado= txtCifrado.replace(/ai/img,"a");
    var txtCifrado= txtCifrado.replace(/ufat/img,"u");

    document.getElementById("imgDer").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display="show";
    document.getElementById("copiar").style.display= "inherit";

}

function copy(){
    var contenido = document.querySelector("#texto2");
    contenido.select();
    document.execCommand("copy");
}