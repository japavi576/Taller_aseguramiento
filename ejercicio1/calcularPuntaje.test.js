const calcularPuntaje = require('./calcularPuntaje');

test('Caso 1: [true, true, true, false, false] → 26 puntos', () => {
    expect(calcularPuntaje([true, true, true, false, false])).toBe(26);
});

test('Caso 2: todas correctas [true, true, true, true, true] → 55 puntos', () => {
    expect(calcularPuntaje([true, true, true, true, true])).toBe(55);
});

test('Caso 3: todas incorrectas [false, false, false, false] → 0 puntos', () => {
    expect(calcularPuntaje([false, false, false, false])).toBe(0);
});

test('Caso 4: sin respuestas [] → 0 puntos', () => {
    expect(calcularPuntaje([])).toBe(0);
});

test('Caso 5: borde [true] → 15 puntos', () => {
    expect(calcularPuntaje([true])).toBe(15);
});
