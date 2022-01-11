/* Cadenas de texto Strings */
let nombre = 'Matías';
let apellido = "Fernández";
let saludo = new String('Hola Mundo');
let lorem = 'lorem ipsum, dolor sit amet';

console.log(nombre, apellido, saludo);
console.log(
    nombre.length,
    apellido.length,
    saludo.length,
    nombre.toUpperCase,
    apellido.toLowerCase,
    lorem.includes('sit'),
    lorem.includes('Matías'),
    // Método trim() para quitar los espacios en blanco
    lorem.trim(),
    // Crear un array con los strings separados por el carácter que le paso a .split(' '), en este caso separará las palabras por el espacio
    lorem.split(' '),
    lorem.split(',')
);