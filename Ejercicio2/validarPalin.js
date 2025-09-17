function validarPalin(palabra) {
    if (typeof palabra !== "string") return false; // Validación básica

    // Normalizar: quitar espacios, convertir a minúsculas
    let limpia = palabra.toLowerCase().replace(/\s+/g, "");

    // Comparar con la palabra invertida
    let invertida = limpia.split("").reverse().join("");
    return limpia === invertida;
}


module.exports = validarPalin;