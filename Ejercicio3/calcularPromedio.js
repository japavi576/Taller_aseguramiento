function calcularPromedio(notas) {
    if (!Array.isArray(notas) || notas.length === 0) return 0;

    let suma = 0;
    for (const nota of notas) {
        suma += nota;
    }
    return suma / notas.length;
}

module.exports = calcularPromedio;