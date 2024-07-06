function sumarHastaNConBreak(n) {
   // La función recibe un numero n por argumento.
   // Devuelve la suma de todos los números desde 1 hasta n.
   // Si la suma supera a 100, detén el bucle usando break.
   // Tu código:
   if (n <= 0 || !Number.isInteger(n)) {
      return "Error: n debe ser un número entero positivo";
    }
  
    let suma = 0;
  
    // Iteramos desde 1 hasta n y sumamos los números
    for (let i = 1; i <= n; i++) {
      suma += i;
      if (suma > 100) {
        break; // Detenemos el bucle si la suma supera a 100
      }
    }
  
    return suma;
  
}

console.log(sumarHastaNConBreak());

module.exports = sumarHastaNConBreak; 
