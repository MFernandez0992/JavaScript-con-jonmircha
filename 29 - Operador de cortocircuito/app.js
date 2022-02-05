/* Operadores de cortocircuito */

/* Cortocircuito OR || - Cuando el valor de la izquierda en la expresión siempre pueda validar true, es el valor que se cargará por defecto */
/* Cortocircuito AND && - Cuando el valor de la izquierda de la expresión siempre pueda validar a false, es el valor que se cargará por defecto */

/* En esta función cuando nombre sea verdadero se le asignará a la variable nombre, si es false por defecto el valor será 'Desconocido' */
function saludar(nombre){
    nombre = nombre || 'Desconocido'
    console.log(`Hola ${nombre}`);
}

saludar('Matías');
saludar();