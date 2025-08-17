function multiplicarArreglo(arr) {
  return arr.reduce((producto, num) => producto * num, 1);
}

console.log(multiplicarArreglo([2, 3, 4]));
