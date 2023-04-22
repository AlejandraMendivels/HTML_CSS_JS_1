function contarCaracteres() { // Funcion primer ejercicio
    const textInput = document.getElementById('text-input');
    const contar = document.getElementById('contar');
    const count = textInput.value.length;// Se utiliza el length para obtener la cantidad de caracteres 
    contar.innerText = `${count} caracteres`;//Aqui muestra los caracteres
  }


function mostrarTipoDeDato() {//Funciones segundo ejercicio
  const textInput = document.getElementById('text-1input').value;
  const verificar = document.getElementById('verificar');
  verificar.innerText = tipoDeDato(textInput);


  function tipoDeDato(input) {
    if (isNaN(input)) {
      return "texto";
    } else {
      return "número";
    }//is Not a Number es la fncion isNaN
  }
}

function verificarEdad() {// Funcion tercer ejercicio
  const nombre = document.getElementById("nombre").value;
  const edad = parseInt(document.getElementById("edad").value);
  const resultado = document.getElementById("resultado");

  if (edad < 0 || isNaN(edad)) {
    resultado.innerText = "No es una edad válida";
  } else if (edad >= 18) {
    resultado.innerText = `Hola ${nombre}, eres mayor de edad`;
  } else {
    resultado.innerText = `Hola ${nombre}, no eres mayor de edad`;
  }
}



function calcularPromedio() {// Funcion cuarto ejercicio
  const name = document.getElementById("name").value;
  const materia = document.getElementById("materia").value;
  const nota1 = parseFloat(document.getElementById("nota1").value);
  const nota2 = parseFloat(document.getElementById("nota2").value);
  const nota3 = parseFloat(document.getElementById("nota3").value);
  const promedio = (nota1 + nota2 + nota3) / 3;
  const promedioTotal = document.getElementById("promedioTotal");

  if (promedio >= 3.0) {
    promedioTotal.classList.add("aprobado");
    promedioTotal.innerText = `Felicidades ${name}, Tu promedio es ${promedio} , aprobaste la materia ${materia}. .`;

  } else {
    promedioTotal.classList.add("reprobado");
    promedioTotal.innerText = `Lo siento ${name},Tu promedio es ${promedio}, reprobaste la materia ${materia}. .`;
  }
}






function identificarnumero() {// Funcion quinto ejercicio
  const number = parseFloat(document.getElementById("numero").value);
  const salida = document.getElementById("salida");
  if (isNaN(number)) {
    salida.innerText = "Debes ingresar un número.";
  }
  else if (!Number.isInteger(number)) {
    if (number > 0) {
      salida.innerText = "Debes ingresar números enteros";
    } else {
      salida.innerText = "Debes ingresar números enteros positivos";
    }
  } else if (number < 0) {
    salida.innerText = "Debes ingresar números positivos.";

  } else if (number % 2 === 0) {
    salida.innerText = "Es un número par.";
  } else {
    salida.innerText = "Es un número  impar.";
  }
}





function buscarEnTexto() {// Funcion sexto ejercicio
  let texto = document.getElementById("texto").value;
  let buscar = document.getElementById("buscar").value;

  let busqueda = texto.split(buscar).join("<mark>" + buscar + "</mark>");//Se utiliza la etiqueta mark para resaltan el texto o la palabra buscada

  document.getElementById("busqueda").innerHTML = busqueda;

}



