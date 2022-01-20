/* Condicionales - Una estructura de control es un mecanismo que permite controlar el flujo del programa. */

/* IF - Else: Es una estructura de programación que me permite tomar una decisión y si esta condición se cumple entonces ejecutar cierto código, o sino ejecutar otro. */

let edad = 17;

if (edad >= 18) {
    console.log('Eres mayor de edad!');
} else {
    console.log('Eres menor de edad');
}

let hours = 9;

if (hours >= 6 && hours <= 11) {
    console.log('Buenos días');
} else if(hours >= 12 && hours <= 18) {
    console.log('Buenas tardes');
}else{
    console.log('Buenas noches');
}

/* Operador Ternario (?) - Cuando solamente se utiliza una condición el IF - Else se puede simplificar en una sola línea de código
 
(condición) ? código si es true : código si es false */
let eresMayor = (edad >= 18) ? 'Eres mayor de edad' : 'Eres menor de edad';

/* Switch - Case: Evalua la condición y la compara con los casos dados, si no cae en ninguno se ejecuta el código por default */

let dia = 3;

switch (dia) {
    case 1:
        console.log('Lunes');
        break;
    case 2:
        console.log('Martes');
        break;
    case 3:
        console.log('Miércoles');
        break;
    case 4:
        console.log('Jueves');
        break;
    case 5:
        console.log('Viernes');
        break;
    case 6:
        console.log('Sábado');
        break;
    case 7:
        console.log('Domingo');
        break;    
    default:
        console.log('Día no existe');
        break;
}