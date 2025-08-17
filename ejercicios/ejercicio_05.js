function contarVocales(cadena) {
  if (cadena.length === 0) {
    return 0;
  }

  const vocales = 'aeiouAEIOU';
  let primeraLetra = cadena[0];
  let contador = vocales.includes(primeraLetra) ? 1 : 0;

  return contador + contarVocales(cadena.slice(1));
}

const resultado = contarVocales("hola");
console.log(resultado);
