const sumar = (...numeros) => numeros.reduce((acum, num) => acum + num, 0);

console.log(sumar(1, 2, 3, 4));
