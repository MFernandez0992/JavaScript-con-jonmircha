/* Funciones 
        Es un bloque de código autocontenido e independiente del Scope o Ámbito global que se va a definir una sola vez y se va a poder utilizar en cualquier momento.
        Es un fragmento de código que se declara una vez y puedo reutilizarlo tantas veces deseé.
        
        Una función puede o no recibir parámetros que son datos que recibe separados por comas, y también puede o no devolver valores
        
        Las funciones en JavaScript también son consideradas objetos
*/


// Function Declaration (Funciones Declarativas)
function estoEsUnaFuncion(){
    console.log('Uno');
    console.log('Dos');
    console.log('Tres');
}

// Invocación de una función
estoEsUnaFuncion();
        
/* Return 
    Es el resultado de la tarea que hizo la función, para mostrar ese resultado se debe almacenar la función dentro de una variable nueva que contenga el resultaddo, un ejemplo:

    La función hacer cereal con leche, pide como parámetros: Cereal, Leche, Plato y Cuchara. La tarea se cumple, y el resultado final es un plato de cereal listo para comer.
    No siempre una función debe retornar algo, hay veces que solo queremos que haga una tarea y ya.
*/

function unaFuncionQueDevuelveUnValor(){
    console.log('El resultado');
    console.log('devuelto');
    console.log('es el de abajo');

    return 'Devuelve esté resultado';
}

let resultDevuelto = unaFuncionQueDevuelveUnValor();
console.log(resultDevuelto);

// Parámetros de las funciones, son valores pasados cuando se invocan las funciones para hacerlas más inteligentes, puedo establecer valores por default asignandole valores a los argumentos
function saludar(nombre = 'Usuario', edad = 0){
    console.log(`Hola mi nombre es ${nombre} y mi edad es de ${edad} años`);
}

saludar('Matías', 29); // Ignorará los valores por default
saludar(); // Se aplicarán los valores por default

/* Function Declaration Vs Function Expression */

// Function Declaration
funcionDeclarada();

function funcionDeclarada(){
    console.log('Esto es una función declarada, puede invocarse en cualquier parte de nuestro código incluso antes de que la función sea declarada');
}

// Function Expression - Es utilizar las funciones como expresiones, crear una función y asignarsela dinámicamente a una variable
/* Muy importante, ya no es necesario colocar el nombre de la función ya que le hemos dado el nombre en la variable, esto se conoce como Funciones Anónimas, más adelante se podrá sustituir por una Arrow Function ( => ) */

funcionExpresada(); // Dará error ya que una función expresada no puede invocarse antes de ser creada
const funcionExpresada = function(){
    console.log('Esto es una función expresada, es decir una función que se le ha asignado como valor una variable, si invocamos esta función antes de su definición JS nos dirá \'Cannot access "funcionExpresada" before initialization \'');
}

funcionExpresada();