/* Ciclos/Bucles - Se repetirá el código hasta que la variable evaluada llegue al valor deseado, siempre se debe incrementar/decrementar la variable sino se producirá un ciclo infinito que nunca termina */

/* While - Se ejecutará el ciclo mientras que la condición sea verdadera */

let contador = 0;

while (contador < 10) {
    console.log('While ' + contador);
    contador++;
}

/* Do...While - El código se va a ejecutar una vez y luego evaluará la condición */

do{
    console.log('Do...While ' + contador);
    contador++;
}while(contador < 10);