function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:
  function aumentarNum(num) {
    let count = 0; // Contador para asegurar que el bucle no se ejecute más de 8 veces
  
    do {
      num += 5; // Aumenta num en 5 en cada iteración
      count++; // Incrementa el contador en cada iteración
    } while (count < 8); // Continúa mientras count sea menor que 8
  
    return num; // Retorna el valor final de num
  }
}

module.exports = doWhile;