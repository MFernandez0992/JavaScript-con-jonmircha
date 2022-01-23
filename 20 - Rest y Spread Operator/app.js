/* Los parámetros REST - Son una forma de virtualmente ir agregando parámetros infinitos a sí sea a una función o una variable que no sepa cuántos valores vaya a recibir */

function sumar(a, b, ...c){
    let resultado = a + b;

    c.forEach(function(n){
        resultado += n
    });

    return resultado;
}

// Cada nuevo argumento desde c se almacenará en el array c y se sumará a resultado
console.log(sumar(1, 2));
console.log(sumar(1, 2, 3));
console.log(sumar(1, 2, 3, 6));
console.log(sumar(1, 2, 3, 6, 10));

/* Spread Operator - Correspone a un operador el cuál distribuye los elementos de un array u objeto, para asignarlos a alguna variable, constante, función.

Copia los elementos de un objeto o array y los asigna a la variable o función. */

const array1 = [1, 2, 3, 4, 5];
const array2 = [6, 7, 8, 9, 0];

console.log(array1, array2);

const array3 = [...array1, ...array2];
console.log(array3);