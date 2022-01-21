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

/* For - */

for (let i = 0; i < 10; i++) {
    console.log(i);    
}

let numeros = [10, 20, 30 ,40];
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
    
}

/* For in - Es un ciclo que me permite recorrer las propiedades de un objeto*/

const matias = {
    nombre: 'Matías',
    apellido: 'Fernández',
    edad: 29
}

for(const propiedad in matias){
    console.log(`Key:  ${propiedad}, Value: ${matias[propiedad]}`);
}

/* For of - Es un ciclo que permite recorrer todos los elementos de cualquier objeto */

for (const datos of matias) {
    console.log(datos);
}