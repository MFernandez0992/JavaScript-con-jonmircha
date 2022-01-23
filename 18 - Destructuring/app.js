/* Destructuring - Nos da una manera de extraer datos de objetos o arrays y asignarlos a variables, es muy importante que cuando se trata de destructurar objetos la variable que intento crear debe coincidir con el nombre de la propiedad del objeto */

const pasatiempos = ['Aprender a programar', 'Sacar fotos', 'Andar en bicicleta'];
const persona = {
    nombre: 'Matías',
    apellido: 'Fernández',
    edad: 29
}

// Sin destructuring
let one = pasatiempos[0],
    two = pasatiempos[0],
    three = pasatiempos[0];
console.log(one, two, three);

let namePerson = persona.nombre,
    lastName = persona.apellido,
    age = persona.edad;
console.log(namePerson, lastName, age);

// Con destructuring
const [uno, dos, tres] = pasatiempos;
console.log(uno, dos, tres);

let { nombre, apellido, edad } = persona;
console.log(nombre, apellido, edad);