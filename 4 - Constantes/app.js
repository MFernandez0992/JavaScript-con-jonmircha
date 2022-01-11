/* Constantes - Las constantes son espacios en memoria que almacenan datos al igual que las variabes pero sus valores no podrán cambiarse ni iniciarse vacíos */

/* Constantes en tipos de datos primitivos (number, string, boolean, null, undefined, NaN) no se puede cambiar el valor de la constante */
const PI = 3.1416;
PI = 3.14; // Dará error

/* Constantes en tipos de datos Compuestos (object, array, function, Class, etc) si se pueden modificar los valores y agregar/eliminar ya que para js a estos tipos de datos se accede por la referencia del valor, un objeto sigue siendo un objeto por más que se modifiquen los valores internos */
const objeto = {
    nombre: 'Skyline',
    país: 'Japón',
    anio: 2002
}

const colores = ['Blanco', 'Naranja', 'Verde'];

console.log(objeto);
console.log(colores);

objeto.marca = 'Nissan';
colores.push('Gris');

console.log(objeto);
console.log(colores);