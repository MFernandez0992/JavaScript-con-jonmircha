/* Arrays - Un array es una colección de elementos, estos pueden ser de distintos tipos y almacenar internamente otros arrays.

- Se accede a cada valor por su índice que comienza a contar desde 0.
- Cuando el valor al que quiero acceder es un array dentro de otro array se accede por el índice del padre y se va bajando.
- Se puede conocer la longitud de un array con la propiedad .length */

const a = [];
const b = [1, true, 'Hola', ['A', 'B', 'C', [1, 2, 3]]];

console.log(a);
console.log(b);
console.log(b.length);
console.log(b[2]);
console.log(b[0]);
console.log(b[3]);
console.log(b[3][2]); // Accedo a la 2da posición del array interno de la posición padre 3;
console.log(b[3][3][1]);

const d = Array(100).fill(false); // Crea automáticamente un array de 100 posiciones y cada posición será false
console.log(d);

const colores = ['Rojo', 'Verde', 'Azul'];
console.log(colores);

colores.push('Negro'); // Agrega el valor en la última posición
console.log(colores);

colores.pop(); // Elimina el último elemento
console.log(colores);

// Ejecutar una función por cada elemento del array con .forEach(), dentro de los parámetros se coloca el elemento que irá iterando el array y si deseo el indice lo agrego separados por coma.a
colores.forEach(function(el, index) {
    console.log(`<li id="${index}">${el}</li>`);
})