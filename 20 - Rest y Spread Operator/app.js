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

/* Spread Operator -  */