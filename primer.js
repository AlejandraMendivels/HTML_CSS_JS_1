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