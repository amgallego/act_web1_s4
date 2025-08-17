function operacion(a, b, callback) {
  return callback(a, b);
}

const resultado = operacion(5, 3, (x, y) => x * y);
console.log(resultado);
