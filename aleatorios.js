function numeroAleatorio() {
    return Math.floor(Math.random() * 100) + 1;
}

function generarAleatorios() {
    let aleatorios = [];
    let num;
    let elementos = recuperarInt("txtNumero");
    if (elementos >= 5 && elementos <= 20) {
        for (let i = 0; i < elementos; i++) {
            console.log(i);
            num = numeroAleatorio();
            aleatorios.push(num);
        }
        mostarResultados(aleatorios);
    }
}

function mostarResultados(arregloNumeros){
    let cmpTabla = document.getElementById("divTabla");
    let contenidoTabla = "<table>";
    let num;

    for (i = 0; i < arregloNumeros.length; i++) {
        num = arregloNumeros[i];
        contenidoTabla += "<tr><td>"+num+ "</td></tr>";
    }
    contenidoTabla +="</table>";
    cmpTabla.innerHTML = contenidoTabla;
}