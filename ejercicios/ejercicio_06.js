function filtrarMayores(arr) {
  return arr.filter(num => num > 10);
}

const numeros = [5, 12, 8, 15];
const mayores = filtrarMayores(numeros);
console.log(mayores);
