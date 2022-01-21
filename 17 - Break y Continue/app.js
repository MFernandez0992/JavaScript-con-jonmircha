const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/* Break - El break sirve para salir de la estructura en dónde está, por ejemplo cuando encuentra el 5 rompe el ciclo for, o también en los switch, cuando encuentra el break ya no sigue evaluando. */
for (let i = 0; i < numeros.length; i++) {  
    if (i === 5) {
        break;
    }

    console.log(numeros[i]);
}

/* Continue - Cuando encuentra un continue detiene la ejecución del código omitiendo esa iteración y sigue en la siguiente iteración */ 

for (let i = 0; i < numeros.length; i++) {  
    if (i === 5) {
        continue;
    }

    console.log(numeros[i]);
}