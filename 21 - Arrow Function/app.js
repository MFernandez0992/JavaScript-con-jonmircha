/* Arrow Function -  Es una nueva forma de escribir funciones anónimas y las hace más expresadas. */

// Función anónima
const saludar = function(){
    console.log('Hola!');
}

saludar();

// Arrow Function
const saludarArrow = (nombre) => {
    console.log(`Hola! ${nombre}`);
}

saludarArrow('Matías');

// Cuando el cuerpo de la función tiene solamente una línea de código se pueden omitir las llaves {} 
const saludoAbreviado = nombre => console.log(`Hola ${nombre}`);
saludoAbreviado('Titán');

// Las Arrow Function implicitamente retornan valores, por lo que no es necesario colocar la palabra Return
const sumar = function(a, b){
    return a + b;
}

// La Arrow Function retorna la suma de a + b 
const sumarArrow = (a, b) => a + b;

// Iterar un array con un forEach y una Arrow Function
const numeros = [1, 2, 3, 4, 5];

numeros.forEach((elemento, index) => console.log(`${elemento} se encuentra en la posición ${index}`));