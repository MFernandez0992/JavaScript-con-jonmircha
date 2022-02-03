/* Objeto Console */

console.log(console);
console.error('Esto es un error');
console.warn('Esto es un aviso');
console.info('Esto es un mensaje informativo');
console.log('Un registro de lo que ha pasado en nuestra aplicación');

let nombre = 'Matías',
    apellido = 'Fernández',
    edad = 29;

console.log(nombre);
console.log(apellido);
console.log(edad);
console.log(nombre, apellido, edad);
console.log(`Hola mi nombre es ${nombre} ${apellido} y tengo ${edad} años.`);
console.clear();

console.log(window);
console.log(document);
console.dir(window);
console.dir(document);

// Crear grupos de elementos en la consola
console.group('Cursos de @jonmirha en YouTube');
console.log('Curso de JavaScript');
console.log('Curso de Node.js');
console.log('Curso de PWAs');
console.groupEnd();

console.log(console);
console.table(Object.entries(console).sort())

const numeros = [1, 2, 3, 4, 5];
const vocales = ["a", "b", "c", "d", "e"];

console.table(numeros, vocales);

const perro = {
    nombre: 'Titán',
    raza: 'Cimarrón',
    color: 'Atigrado'
}

console.table(perro);

// Cronometrar cuánto tarda en ejecutarse el código
console.time('Cuánto tiempo tarda mi código');

const arreglo = Array(1000000);
for(let i = 0; i < arreglo.length; i++){
    arreglo[i] = i;
}

console.timeEnd('Cuánto tiempo tarda mi código'); // El mensaje de time(...) y de timeEnd(...) debe ser igual para que funcione

// console.count() - cuenta cuantos console.log ejecuta el código, en este caso el for
for(let i = 0; i <= 100; i++){
    console.count('Código for');
    console.log(i);
}

// console.assert(condición) - evalúa por consola una condición y muestra un msj mostrando qué esperaba en caso de que no se cumpla
let x = 1;
let y = 2;
let pruebaXY = 'Se espera que X siempre sea menor que Y';
console.assert(X < y, [x, y, pruebaXY])
