function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  if (a <= 0 || b <= 0 || a > b || !Number.isInteger(a) || !Number.isInteger(b)) {
    return "Error: a y b deben ser enteros positivos y a debe ser menor o igual que b";
  }

  let producto = 1;

  
  while (a <= b) {
    producto *= a;
    a++;
  }

  return producto;
}
console.log(productoEntreNúmeros(1, 10));

module.exports = productoEntreNúmeros;