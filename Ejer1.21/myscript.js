
alert("Esta visitando el Curriculum Vitae de David")

function copiarAlPortapapeles(id_elemento) {
    var aux = document.createElement("input");
    aux.setAttribute("value", document.getElementById(id_elemento).innerHTML);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);

    document.getElementById("demo").innerHTML = "Correo Copiado";

}

function mostar(id_elemento) {
    document.getElementById("demo").innerHTML = "Correo Copiado";

}    