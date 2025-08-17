const promedio = (arr) => {
  const suma = arr.reduce((acum, num) => acum + num, 0);
  return suma / arr.length;
};

console.log(promedio([10, 20, 30]));
