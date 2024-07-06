function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
  if (numero <= 0 || !Number.isInteger(numero)) {
    return false;
  }

  // Dividimos el número repetidamente por 2
  while (numero > 1) {
    if (numero % 2 !== 0) {
      return false; // Si el número no es divisible por 2, no es potencia de 2
    }
    numero = numero / 2;
  }

  return true;
}


module.exports = esPotenciaDeDos;
