/* Métodos estáticos - se pueden ejecutar sin la necesidad de instanciar la clase */

class Animal{
    // El constructor es un método especial que se ejecuta en el momento de instanciar la clase
    constructor(nombre, genero){
        this.nombre = nombre;
        this.genero = genero;
    }
    
    // Métodos - En los prototipos los métodos era aconsejable que estuviesen fuera del prototipo sino se repetirían por cada vez que se mande a llamar el prototipo afectando el rendimiento, en las Clases JavaScript lo hace automáticamente por lo que podemos escribirlos dentro de la clase

    sonar(){
        console.log('Hago sonidos por que estoy vivo');
    }

    saludar(){
        console.log(`Hola me llamo ${this.nombre}`);
    }
}

// Herencia
class Perro extends Animal{
    constructor(nombre, genero, tamano){
        // Con el método super() se manda a llamar el constructor de la clase padre
        super(nombre, genero);
        this.tamano = tamano;
        this.raza = null;
    }

    sonar(){
        console.log('Soy un perro y mi sonido es un ladrido');
    }

    ladrar(){
        console.log('Guauu Guauu!');
    }

    static queEres(){
        console.log('Los perros somos considerados los mejores amigos del hombre');
    }

    // Los setters y getters son métodos especiales que nos permiten establecer y obtener los valores de atributos de nuestra clase
}

// Titan hereda las propiedades de perro y mostrará el método ladrar del constructor perro
const titan = new Perro('Titan', 'Macho', 'Grande');

// Pope no hereda las propiedades de perro por lo que solamente mostrará los métodos originales del prototipo padre Animal
const pope = new Animal('Pope', 'Hembra');

console.log(titan);
console.log(pope);

titan.sonar();
titan.saludar();
pope.sonar();
pope.saludar();