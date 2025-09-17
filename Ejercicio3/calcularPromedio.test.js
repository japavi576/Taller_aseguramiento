const calcularPromedio = require('./calcularPromedio');

test('Promedio de [3, 4, 5] debe ser 4', () => {
    expect(calcularPromedio([3, 4, 5])).toBe(4);
});

test('Promedio de [10] debe ser 10', () => {
    expect(calcularPromedio([10])).toBe(10);
});

test('Promedio de lista vacía debe ser 0', () => {
    expect(calcularPromedio([])).toBe(0);
});

test('Promedio de [2.5, 3.5] debe ser 3', () => {
    expect(calcularPromedio([2.5, 3.5])).toBe(3);
});
