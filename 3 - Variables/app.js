/* Scope o Ámbito de las Variables

Var - Las variable con var son de ámbito global, por lo que se puede acceder a ellas desde cualquier parte del código, incluso si se encuentran dentro de bloques de código
*/

var musica = 'Rock';
console.log('Variable Música antes del bloque', musica);

{
    var musica = 'Pop';
    console.log('Variable Música dentro del Bloque', musica);
}

console.log('Variable Música después del Bloque', musica);


/* 
Let - Las variables declaradas con Let son de ámbito local, por lo que solo viven dentro del documento o bloque de código, por ejemplo si mando a llamar musica2 aún después del bloque de código, se mostrará el resultado de la variable FUERA del bloque sin importar que el nombre de la variable interior sea el mismo */
let musica2 = 'Rock';
console.log('Variable Música antes del bloque', musica2);

{
    let musica2 = 'Pop';
    console.log('Variable Música dentro del Bloque', musica2);
}

console.log('Variable Música después del Bloque', musica2);