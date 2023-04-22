function contarCaracteres() { // Funcion primer ejercicio
    const textInput = document.getElementById('text-input');
    const contar = document.getElementById('contar');
    const count = textInput.value.length;// Se utiliza el length para obtener la cantidad de caracteres 
    contar.innerText = `${count} caracteres`;//Aqui muestra los caracteres
  }