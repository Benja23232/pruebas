function validarMail(email) {
  // Validación de nulo o indefinido
  if (email === null || email === undefined) {
    throw new Error('El mail no puede ser nulo');
  }

  // Validación de tipo string y cadena vacía
  if (typeof email !== 'string' || email.trim() === '') {
    throw new Error('El mail no puede estar vacío');
  }

  // Validación del arroba
  if (!email.includes('@')) {
    throw new Error('El mail debe contener un arroba (@)');
  }

  return true;
}

module.exports = validarMail;