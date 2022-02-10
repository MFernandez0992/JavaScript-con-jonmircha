/* 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10. */
function contarCaracteres(cadena = ""){
    if(!cadena){
        console.warn('No ingresaste ninguna cadena');
    }else{
        console.info(`La cadena ${cadena} tiene ${cadena.length} carácteres`);
    }
}

contarCaracteres();
contarCaracteres('Hola Mundo');

// Solución con Arrow Function
const contarCaracteres2 = (cadena = "") => (!cadena) ? console.warn('No ingresaste ninguna cadena') : console.info(`La cadena ${cadena} tiene ${cadena.length} carácteres`);

/* -------------------------------------------- */

/* 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola". */
function recortarCadena(cadena = "", veces = undefined){
    if(!cadena){
        return console.log('No ingresaste ninguna cadena');
    }else{
        return console.log(cadena.slice(0 , veces));
    }
}

recortarCadena(prompt('Introduce un texto a recortar'), prompt('Cuántos carácteres quieres cortarle?'));

// Solución con Arrow Function
const recortarCadena2 = (cadena = "", longitud = undefined) => (!cadena) ? console.log('No ingresaste ninguna cadena') : console.log(cadena.slice(0, longitud));
recortarCadena2(prompt('Introduce un texto a recortar'), prompt('Cuántos carácteres quieres cortarle?'));

recortarCadena2('Hola Mundo', 2);
recortarCadena2();
recortarCadena2('Hola Mundo');

/* -------------------------------------------- */

/* 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal']. */

function separarCadena(cadena = ""){
    if(!cadena){
        return console.log('No ingresaste ninguna cadena');
    }else{
        return console.log(cadena.split(' '));
    }
}

separarCadena(prompt('Introduce un texto'));

// Solución con Arrow Function
const separarCadena2 = (cadena = "", separador = undefined) => (!cadena) ? console.log('No ingresaste ninguna cadena') : console.log(cadena.split(separador));

/* -------------------------------------------- */

/* 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.  */

const repetirCadena = (cadena = "", rep = undefined) => {
    if(!texto){
        return console.warn('No ingresaste el texto');
    }

    if(rep === undefined){
        return console.warn('No ingresaste la cantidad de repeticiones');
    }

    if(rep === 0){
        return console.error('El número de veces no puede ser 0');
    }

    if(Math.sign(veces) === -1){
        return console.error('El número de veces no puede ser negativo');
    }

    for(let i = 1; i <= veces; i++){
        console.info(`${texto}, ${i}`);
    }
}

repetirCadena(prompt('Introduce el texto a repetir'), prompt('Introduce la cantidad de veces'));