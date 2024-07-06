function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:
  if (n <= 0 || !Number.isInteger(n)) {
    return "Error: n debe ser un número entero positivo";
  }

  let suma = 0;

 
  for (let i = 1; i <= n; i++) {
    suma += i;
  }

  return suma;
}

console.log(sumarHastaN(5));
module.exports = sumarHastaN;
