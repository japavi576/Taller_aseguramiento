function contarVocales(texto) {
  // Normalizamos a minúsculas para evitar problemas con mayúsculas
  texto = texto.toLowerCase();

  // Definimos las vocales
  const vocales = "aeiouáéíóú";

  let contador = 0;
  // se recorre en busqueda de las vocales
  for (let letra of texto) {
    if (vocales.includes(letra)) {
      contador++;
    }
  }
  // retornamos la variable
  return contador;
}

module.exports = contarVocales;
