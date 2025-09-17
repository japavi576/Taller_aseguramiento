const validarPalin = require('./validarPalin');

test('Detectar palíndromo simple "oso"', () => {
    expect(validarPalin("oso")).toBe(true);
});

test('Detectar palabra no palíndroma "casa"', () => {
    expect(validarPalin("casa")).toBe(false);
});

test('Cadena vacía debe ser palíndromo', () => {
    expect(validarPalin("")).toBe(true);
});

test('Ignorar mayúsculas en "Ana"', () => {
    expect(validarPalin("Ana")).toBe(true);
});
