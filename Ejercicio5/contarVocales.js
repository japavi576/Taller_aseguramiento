function contarVocales(texto) {
  // Normalizamos a minúsculas para evitar problemas con mayúsculas
  texto = texto.toLowerCase();

  // Definimos las vocales
  const vocales = "aeiouáéíóú";

  let contador = 0;

  for (let letra of texto) {
    if (vocales.includes(letra)) {
      contador++;
    }
  }

  return contador;
}

module.exports = contarVocales;
