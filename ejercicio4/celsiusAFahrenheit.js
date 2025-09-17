function celsiusAFahrenheit(celsius) {
    if (typeof celsius !== "number") {
        throw new Error("El valor debe ser un número");
    }
    return (celsius * 9/5) + 32;
}

module.exports = celsiusAFahrenheit;
