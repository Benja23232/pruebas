const validarMail = require('../src/mail');

// ===================================================
// 1. Mails válidos (Con arroba)
// ===================================================
test.each([
  ['usuario@correo.com', 'estándar'],
  ['alumno@universidad.edu.ar', 'con subdominio'],
  ['juan.perez@empresa.com', 'con puntos en el nombre']
])('Debe aceptar un mail %s (%s)', (mail) => {
  expect(validarMail(mail)).toBe(true);
});


// ===================================================
// 2. Mails inválidos (Sin arroba)
// ===================================================
test.each([
  ['usuariocorreo.com', 'solo tiene texto sin arroba'],
  ['juanperez', 'es un nombre simple sin arroba ni dominio'],
  ['test.com', 'termina en punto com pero no tiene arroba']
])('Debe lanzar error si el mail %s (%s)', (mail) => {
  expect(() => validarMail(mail)).toThrow('El mail debe contener un arroba (@)');
});


// ===================================================
// 3. Comprobar la validación de nulo
// ===================================================
test.each([
  [null, 'null'],
  [undefined, 'undefined']
])('Debe lanzar un error específico si el valor ingresado es %s', (valor) => {
  expect(() => validarMail(valor)).toThrow('El mail no puede ser nulo');
});


// ===================================================
// 4. Comprobar la validación de cadena vacía
// ===================================================
test.each([
  ['', 'completamente vacía'],
  ['   ', 'solo contiene espacios en blanco']
])('Debe lanzar un error si la cadena viene %s', (valor) => {
  expect(() => validarMail(valor)).toThrow('El mail no puede estar vacío');
});