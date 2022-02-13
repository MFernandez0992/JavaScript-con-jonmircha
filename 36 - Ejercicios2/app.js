/* 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH". */
const cadenaInvertida = (cadena = "") => (!cadena) ? console.warn('La cadena se encuentra vacía') : console.log(cadena.split('').reverse().join(''))

cadenaInvertida(prompt('Ingrese un texto a invertir'));

/* 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2. */
const textoEnCadena = (cadena = '', texto = '') => {
    if(!cadena) return console.warn('No ingresaste el texto largo');
    if(!texto) return console.warn('No ingresaste la palabra a evaluar');

    let i = 0;
    let contador = 0;

    while(i !== -1){
        i = cadena.indexOf(texto, i);

        if(i !== -1){
            i++;
            contador++
        }
    }

    return console.info(`La palabra ${texto} se repite ${contador} veces`)
}

textoEnCadena(prompt('Introduzca un texto'), prompt('Introduzca la palabra a contabilizar'));

/* 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true. */

function palindromoCheck(cadena = ''){
    if(!cadena){
        console.warn('La cadena se encuentra vacía')
    }else{
        const cadenaReversa = cadena.split('').reverse().join('');

        if(cadena === cadenaReversa){
            console.log('La palabra es palindroma');
        }else{
            console.warn('La palabra no es palindroma');
        }
    }
}

palindromoCheck(prompt('Escriba una palabra para saber si es palindroma'));

/* 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5. */
const eliminarPatron = (texto = '', patron = '') => (!texto) ? console.warn('No ingresaste el texto') : (!patron) ? console.warn('No ingresaste el patrón a eliminar') : console.log(texto.replace(new RegExp(patron, "ig"), ""));

eliminarPatron("xyz1, xyz2", "xyz");

/* 9) Programa una función que obtenga un numero aleatorio entre 501 y 600. */
function numerosAleatorios(min = 501,max = 600){
    const aleatorio = Math.random() * (max - min) + min;
    return Math.floor(aleatorio);
}

console.log(numerosAleatorios());

/* 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true. */
const capicua = (numero = 0) => {
    if(!numero){
        return console.warn('No ingresaste un número');
    }

    // Convierto el número a cadena de texto para poder separarlo, pasarle el reverse y luego unirlo
    numero = numero.toString();

    let numeroAlReves = numero.split('').reverse().join('');
    return((numero) === numeroAlReves) ? console.info(`El número ${numero} es capicúa`) : console.info(`El número ${numero} no es capicúa`);
}

capicua(prompt('Ingresá un número para saber si es capicúa o no'));

/* 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120. */
const factorial = (numero = undefined) => {
    if(numero === undefined) return console.warn('No ingresaste un número');

    // if(typeof numero !== "number") return console.error(`El valor ${numero} ingresado no es un número`);

    if(numero === 0) return console.error('El número no puede ser 0');

    if(Math.sign(numero) === -1) return console.error('El número no puede ser negativo');

    let factorial = 1;

    for(let i = numero; i > 1; i--){
        factorial *= i;
    }

    return console.info(`El factorial de ${numero} es ${factorial}`);
}

factorial(prompt('Ingresa un número para conocer su factorial'));

/* 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true. */
const numeroPrimo = (numero = undefined) => {
    if(numero === undefined) return console.warn('No ingresaste un número');
    if(numero === 0) return console.error('El número no puede ser 0');
    if(numero === 1) return console.error('El número no puede ser 1');
    if(Math.sign(numero) === -1) return console.error('El número no puede ser negativo');

    let divisible = false;
    
    for(let i = 2; i < numero; i++){
        if((numero % i) === 0){
            divisible = true;
            break;
        }
    }

    return (divisible) ? console.log(`El número ${numero} NO es primo`) : console.log(`El número ${numero} sí es primo`);
}

numeroPrimo(prompt('Introduce un número para saber si es primo o no'));

/* 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar. */
const parImpar = (num) => (!num) ? console.log('No ingresaste ningún número') : (num % 2 === 0) ? console.log(`El número ${num} es PAR`) : console.log(`El número ${num} es IMPAR`);

parImpar(prompt('Ingresé un número para saber si es par o impar'));

/* 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F. */

const conversor = (temperatura = undefined, escala = undefined) => {
    (!escala) ? console.warn('No introdujo la escala C/F') : console.log(`Introdujo la escala ${escala}`);
    if(escala.length !== 1){
        return console.warn('Valor de escala no reconocido')
    }

    if(escala === 'C'){
        return console.info(`${temperatura}ºC = ${Math.round((temperatura * (9/5)) + 32)}ºF`)
    }else if(escala === 'F'){
        return console.info(`${temperatura}ºF = ${Math.round(((temperatura - 32) * (5/9)))}ºC`)
    }
}

conversor(prompt('Introduzca la temperatura'), prompt('Introduzca la escala'));