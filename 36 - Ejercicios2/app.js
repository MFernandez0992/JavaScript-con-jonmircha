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


/* 9) Programa una función que obtenga un numero aleatorio entre 501 y 600. */
function numerosAleatorios(min = 501,max = 600){
    const aleatorio = Math.random() * (max - min) + min;
    return Math.floor(aleatorio);
}

console.log(numerosAleatorios());

/* 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true. */


/* 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120. */