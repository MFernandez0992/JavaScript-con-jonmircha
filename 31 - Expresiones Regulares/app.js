/* Expresiones Regulares - Es una secuencia de carácteres que forman un patrón de búsqueda, principalmente es utilizado en la búsqueda de patrones de cadenas de caracteres, es utilizada por ejemplo para validar que los carácteres usados en un correo electrónico sean los correctos, o validar los 16 dígitos de una tarjeta */

let cadena = "lorem ipsum asjfa tqhktq faganskq doloremque";
let expReg = new RegExp("lorem", "ig"); // "i" es una bandera que ignora entre minúsculas y mayúsculas, "g" devuelve todos los resultados que encuentre
let expReg2 = /lorem/ig;
let expReg3 = /\d/ig; // "\d" valida que existan números, devuelve false porque no hay

// Validar que la palabra lorem exista dentro de la variable cadena con .test()
console.log(expReg.test(cadena));
console.log(expReg.exec(cadena));