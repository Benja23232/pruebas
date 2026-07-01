const dividir = require('../src/ejemplo');

// ==========================================
// 1. 3 grupos de valores con tipo correcto
// ==========================================
test.each([
  [10, 2, 5, 'enteros positivos'],
  [-15, 3, -5, 'números negativos'],
  [5, 2, 2.5, 'números decimales']
])('Debe dividir %s correctamente (%s)', (a, b, resultadoEsperado) => {
  expect(dividir(a, b)).toBe(resultadoEsperado);
});


// ==========================================
// 2. Divisor cero
// ==========================================
test('Debe lanzar un error cuando el divisor es cero', () => {
  expect(() => dividir(10, 0)).toThrow('El divisor no puede ser cero');
});


// ==========================================
// 3. 3 grupos de valores con tipo incorrecto
// ==========================================
test.each([
  ['10', 2, 'el primer parámetro es un string'],
  [10, true, 'el segundo parámetro es un booleano'],
  [[4], {}, 'ambos parámetros son arrays u objetos']
])('Debe lanzar un error si %s', (a, b) => {
  expect(() => dividir(a, b)).toThrow('Ambos parámetros deben ser numéricos');
});