const contarVocales = require('./contarVocales');

test('Debe contar las vocales en "hola"', () => {
  expect(contarVocales("hola")).toBe(2);
});

test('Debe devolver 0 si no hay vocales ("rhythm")', () => {
  expect(contarVocales("rhythm")).toBe(0);
});

test('Debe contar las vocales ignorando mayúsculas y tildes ("Educación")', () => {
  expect(contarVocales("Educación")).toBe(5);
});
