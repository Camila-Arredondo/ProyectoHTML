function calcularFactorial() {
  const numberFactorial = document.getElementById("inputfatorial");
  const resultado = document.getElementById("respuesta1");
  const num = parseInt(numberFactorial.value);

  if (isNaN(num) || num < 0) {
    resultado.textContent =
      "Por favor ingresa un número válido, mayor o igual a 0";
    return;
  }
  if (num === 0 || num === 1) {
    resultado.textContent = "El factorial de " + num + " es 1";
    return;
  }
  let factorial = 1;
  for (let i = 2; i <= num; i++) {
    factorial *= i;
  }
  resultado.textContent = "El factorial de " + num + " es " + factorial;
}

function verificarPalindromo() {
  const inputpalindromo = document.getElementById("inputpalindromo");
  const respuesta = document.getElementById("respuesta2");
  const texto = inputpalindromo.value.toLowerCase().replace(/[^a-z]/g, "");

  if (texto === "") {
    respuesta.textContent = "Por favor ingresa una palabra válida";
    return;
  }
  const reverse = texto.split("").reverse().join("");

  if (texto === reverse) {
    respuesta.textContent =
      "Si, la palabra: " + inputpalindromo.value + " es un palidromo.";
  } else {
    respuesta.textContent =
      "No, la palabra: " + inputpalindromo.value + " no es un palindromo.";
  }
}
