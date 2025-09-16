function calcularPuntaje(respuestas) {
    let puntaje = 0;
    let todasCorrectas = true;

    respuestas.forEach(r => {
        if (r === true) {
            puntaje += 10;
        } else {
            puntaje -= 2;
            todasCorrectas = false;
        }
    });

    // Bonus si todas fueron correctas y hubo al menos una
    if (todasCorrectas && respuestas.length > 0) {
        puntaje += 5;
    }

    // Nunca puede ser negativo
    if (puntaje < 0) {
        puntaje = 0;
    }

    return puntaje;
}

module.exports = calcularPuntaje;

