/* Numbers */
let a = 2;
let b = new Number(1);
let c = 7.19;
let d = '5.6';

console.log(a, b);

// .toFixed(numero) - formateará el número con la cantidad de decimales que le diga, en estos casos quedará 7.2 y 7.19000
console.log(c.toFixed(1));
console.log(c.toFixed(5));

// parseInt(valor/variable) - Mostrará solamente el número entero, omitiendo los decimales
console.log(parseInt(c));

// parseFloat(valor/variable) - Mostrará el número con los decimales
console.log(parseFloat(c));

// .typeof - Indica el tipo de dato almacenado en la variable
console.log(typeof c, typeof d);

// Si deseo hacer una operación entre un número y un string JavaScript lo interpretará como una concatenación
console.log(c + d); // = 7.195.6