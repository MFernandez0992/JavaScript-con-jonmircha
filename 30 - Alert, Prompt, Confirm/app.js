/* Son alertas en ventana que dan info o piden info a los usuarios */

console.log(window);
window.alert('Hola esto es una alerta');
window.confirm('Te gusta programar?');
window.prompt('Cuántos años tienes?');

/* Puedo guardar la confirmación dentro de una variable y la variable tomará el valor que el usuario clickeó, aceptar = true, cancelar = false */
/* Si guardo el prompt dentro de una variable esta tomará como valor el string que introduzca el usuario */
let confirmacion = confirm('Te gusta programar?');
let aviso = prompt('Cuántos años tienes?');

console.log(confirmacion);
console.log(aviso);