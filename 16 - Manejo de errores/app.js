/* Try-catch sirve para capturar los errores del código */
try {
    console.log('En el Try se agrega el código a evaluar');
} catch (error) {
    console.log('Catch, captura cualquier error surgido o lanzado en el try');
} finally {
    console.log('El bloque finally se ejecutará siempre al final de un bloque try-catch');
}

try {
    let numero = 10;

    if (isNan(numero)){
        throw new Error ('El caracter introducido no es un Número');
    } 
    console.log(numero * numero);
} catch (error) {
    console.log(`Se produjo el siguiente error: ${error}`);
}