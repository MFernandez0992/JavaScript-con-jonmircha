/* Template Strings */
let nombre = 'Matías';
let apellido = 'Fernández';

// Concatenación
let saludo = 'Bienvenido ' + nombre + ' ' + apellido + '.';
console.log(saludo);

// Interpolación de variables con Template Strings
let saludo2 = `Bienvenido ${nombre} ${apellido}.`;
console.log(saludo2);

// Generar código HTML con los Template Strings
let ul = `
    <ul>
        <li>Primavera</li>
        <li>Verano</li>
        <li>Otoño</li>
        <li>Invierno</li>
    </ul>
`;