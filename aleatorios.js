function numeroAleatorio() {
    return Math.floor(Math.random() * 100) + 1;
}

function generarAleatorios() {
    let aleatorios = [];
    let elementos = recuperarInt("txtNumero");
    if (elementos >= 5 && elementos <= 20) {
        for (let i = 0; i < elementos; i++) {
            console.log(i);
        }
    }
}