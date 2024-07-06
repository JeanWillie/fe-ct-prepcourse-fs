function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:
  if (numero <= 1) {
    return false;
  }

  // Verificamos si el número es divisible por algún número entre 2 y la raíz cuadrada de 'numero'
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false; // Si es divisible, no es primo
    }
  }

  return true; // Si no se encontró ningún divisor, es primo
}





module.exports = esNumeroPrimo;
