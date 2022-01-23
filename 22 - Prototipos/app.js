/* Prototipos */

/* Programación Orientada a Objetos(POO) 
    Clases - Modelo a seguir
    Objetos - Es una instancia de una clase
    Atributos - Es una característica o propiedad del objeto(son variables dentro de un objeto)
    Métodos - Son las accione que un objeto puede realizar (son funciones dentro de un objeto) */

const animal = {
    nombre: 'Snoopy',
    sonar(){
        console.log('Hago sonidos por que estoy vivo');
    }
}

const animal2 = {
    nombre: 'Titán',
    sonar(){
        console.log('Hago sonidos por que estoy vivo');
    }
}

console.log(animal);
console.log(animal2);

// Función constructora - Por que la construyo una sola vez y a partir de ella voy a generar nuevas instancias(objetos) que sean de este tipo de función constructora

function Animal(nombre, genero){
    // Atributos
    this.nombre = nombre;
    this.genero = genero;

    // Métodos
    this.sonar = function(){
        console.log('Hago sonidos por que estoy vivo');
    }
}

/* IMPORTANTE
Función constructora donde asignamos los métodos al Prototipo, no a la función como tal, esto evita que los métodos se repitan en cada nuevo objeto creado */
function Animal2(nombre, genero){
    // Atributos
    this.nombre = nombre;
    this.genero = genero;
}

// Métodos agregados al prototipo de la función constructora
Animal2.prototype.sonar = function(){
    console.log('Hago sonidos por que estoy vivo');
}

const titan = new Animal('Titán', 'Macho'),
      pope = new Animal('Pope', 'Hembra');

console.log(titan);
console.log(pope);

titan.sonar();
pope.sonar();