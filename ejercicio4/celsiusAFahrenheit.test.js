// celsiusAFahrenheit.test.js
const celsiusAFahrenheit = require('./celsiusAFahrenheit');

test('0°C → 32°F', () => {
    expect(celsiusAFahrenheit(0)).toBe(32);
});

test('100°C → 212°F', () => {
    expect(celsiusAFahrenheit(100)).toBe(212);
});

test('-40°C → -40°F', () => {
    expect(celsiusAFahrenheit(-40)).toBe(-40);
});
