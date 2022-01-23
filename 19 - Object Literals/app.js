/* Object Literals - Una nueva forma de escribir atributos y métodos en los objetos */

let nombre = 'Titán',
    edad = 6;

const perro = {
    nombre: nombre,
    edad: edad,
    ladrar: function(){
        console.log('Guau guau guauu!');
    }
}

console.log(perro);
perro.ladrar();

const dog = {
    nombre,
    edad,
    raza: 'Callejero',
    ladrar(){
        console.log('Guau Guau!');
    }
}

console.log(dog);
dog.ladrar();