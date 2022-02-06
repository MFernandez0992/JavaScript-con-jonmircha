/* Módulos Import/Export - Significa que puedes mandar a llamar archivos js no solo desde el archivo HTML sino que también desde un archivo .js interno se puede volver a llamar otro archivo .js */

// Realizo las importaciones utilizando la palabra import seguida entre llaves del código que quiera importar y luego de la ubicación del archivo
// Importaciones por default, la función saludar() se exporta por default por lo que al invocarla en el js automáticamente se agregará el import 
import { Saludar, PI, usuario } from './constantes.js';
import { aritmetica as calculos} from './aritmetica.js'; // A aritmetica le creo un alias con 'as'

console.log('Archivo modulos.js');

console.log(PI);
console.log(usuario);
console.log(calculos.sumar(3, 5));
console.log(calculos.restar(5, 2));
//saludar();
let saludo = new Saludar();
saludo;