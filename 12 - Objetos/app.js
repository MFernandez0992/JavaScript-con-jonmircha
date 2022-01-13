/* Objetos - Un objeto es una colección de llaves -> valor.

- Pueden contener cualquier tipo de dato en los valores, incluso funciones.
- Dentro de un objeto a las variables se le van a llamar atributos/propiedades, y a las funciones se les llama métodos.
- Si deseo acceder a algún valor del objeto debo primero llamar al objeto y luego a la referencia del valor, por ejemplo: matias.contacto, en este caso accedo primero al objeto llamado 'matías' y luego a la referencia de 'contacto'.
- Cuando se manda a llamar a ún método de una función se debe invocar con paréntesis al final, y puede o no recibir algún valor dependiendo de la función del método.
- La palabra reservada this hace referencia al scope del mismo objeto, o sea hace referencia al mismo objeto, puedo utilizarla para mandar a llamar propiedades del objeto */

const matias = {
    nombre: 'Matías',
    apellido: 'Fernández',
    edad: 29,
    soltero: true,
    pasatiempos: ['Programar', 'Ir al gym', 'Andar en longboard'],
    contacto: {
        mail: '...@...com',
        teléfono: 2532463,
        twitter: '@mfernandez'
    },
    saludar: function(){
        console.log('Hola :)');
    },
    decirMiNombre: function(){
        console.log(`Hola ${this.nombre} ${this.apellido} y tengo ${this.edad} años y me puedes seguir como ${this.contacto.twitter}`);
    }
}

console.log(matias);
console.log(matias.nombre);
console.log(matias.soltero);
console.log(matias.pasatiempos);
console.log(matias.pasatiempos[2]); // Accedo a 'Andar en longboard' con el indice del array 'pasatiempos'
console.log(matias.contacto.mail); // En los objetos accedo con la referencia de puntos
matias.saludar(); // Como la función ya tiene un console.log solo debo invocarla con la referencia.
matias.decirMiNombre();

/* Con Object.keys y Object.values me devuelve todas las llaves y propiedades del objeto */
console.log(Object.keys(matias));
console.log(Object.values(matias));

/* Con hasOwnProperty evaluará si la propiedades que le paso pertenece o no al objeto, devuelve un booleano */
console.log(matias.hasOwnProperty('nombre')); // True
console.log(matias.hasOwnProperty('nacimiento')); // False