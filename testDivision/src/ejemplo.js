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

module.exports = dividir;