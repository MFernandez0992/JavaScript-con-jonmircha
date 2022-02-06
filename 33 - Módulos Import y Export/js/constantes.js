export const PI = Math.PI;

/* Puedo elegir qué elementos del código necesito exportar, password no será exportado al no agregarle el export */
export let usuario = 'Matías';
let password = 'titan';

/* Si deseo exportar por defecto una variable o constante primero debo definirla y luego hacer la exportación */
export default password;

/* Exportar por default, puedo declarar una exportación por default y cuando se mande a llamar en el js que la importe se agregrará automáticamente a las importaciones, pero solamente debe haber UN default, solo las funciones y las clases pueden ser exportadas por default al momento de la declaración */

export function saludar(){
    console.log('Hola Módulos +ES6');
}

/* export default function saludar2(){
    console.log('Default duplicado'); // Este default arrojará un error ya que hay un default existente
} */

export class Saludar{
    constructor(){
        console.log('Hola desde una clase exportada por default');
    }
}