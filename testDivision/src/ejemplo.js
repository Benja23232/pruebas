function dividir(a, b) {
  // Validación de tipo de dato
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Ambos parámetros deben ser numéricos');
  }

  // Validación de división por cero
  if (b === 0) {
    throw new Error('El divisor no puede ser cero');
  }

  return a / b;
}
// Agregacion de funcion de restar
function restar(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Los parámetros deben ser numéricos');
    }
    return a - b;
}


module.exports = { dividir, restar };
