/* Operadores */

/* Aritméticos: + - * / % () */
let a = 5 + (5 - 10) * 3;
let modulo = 5 % 2;

console.log(a);
console.log(modulo);


/* Operadores Relacionales >, <, >=, <=, =, ==, ===, !=, !==  */
console.log(8 > 9);
console.log(9 > 8);
console.log(8 >= 9);
console.log(9 >= 8);
console.log(7 < 7);
console.log(7 <= 7);

/* Operadores de igualdad */

// = - 1 signo es asignación de variable
// == - 2 signos compara el valor pero no el tipo de dato
// === - 3 signos compara tanto el valor como el tipo de dato

console.log(7 == 7); // True
console.log('7' == 7); // True xq en sí el valor es igual pero el comparador no compara el tipo de dato
console.log(0 == false); // True xq 0 tiene a ser un valor Truthy

console.log(7 === 7); // True
console.log('7' === 7); // False xq el tipo de dato es distinto
console.log(0 === false); // False

/* Incremento y Decremento */

let i = 1;

i = i + 2;
// Se puede abreviar de la siguiente forma
i += 2;
i -= 1;
i /= 2;
i *= 3;

// Operador Unario, aumenta/decrementa de a 1  
i++;
i--;
++i;
--i;

/* Operadores Lógicos */

// ! - Not: Niega, es decir lo que es verdadero lo vuelve false y viceversa
console.log(!true); // Retorna false

// || - Or: Ó, para cumplirse la condición al menos una de las condiciones tiene que ser true
console.log((9 === 9) || ('9' === 9)); // Retorna true ya que una de las condiciones es verdadera

// && - And: Todas las condiciones tienen que ser true para que se cumpla
console.log();