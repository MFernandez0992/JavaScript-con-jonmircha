/* Booleanos - True or False */
let verdadero = true;
let falso = false;
let v = Boolean(true);
let f = Boolean(false);

/* Valores que no son ni true ni false pero tiendan a serlo (truthy/falsy) */
console.log(Boolean(0)); // Falsy
console.log(Boolean(-7)); // Truthy
console.log(Boolean('')); // Falsy
console.log(Boolean(' ')); // Truthy