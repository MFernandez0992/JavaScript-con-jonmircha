/* Objeto Math */
console.log(Math);

// .abs devuelve el valor absoluto, el valor absoluto de un número es la cantidad como tal sin importar si es negativo o positivo
console.log(Math.abs(-7.8));

// .ceil() - Redondea al número entero mayor
console.log(Math.ceil(7.2));

// .floor() - Redondea al número entero menor
console.log(Math.floor(7.9));

// .round() - Redondea al número entero más cercano
console.log(Math.round(7.62));

// .sqrt() - Raíz cuadrada de un número
console.log(Math.sqrt(81));

// .pow() - Elevar potencias, el primero número es la base y el segunda el exponente
console.log(Math.pow(2, 5));

// .sign() - Indica si el valor es negativo(-1), positivo(1) o 0
console.log(Math.sign(-7.8)); // Devuelve -1 por ser negativo

// .random() - Devuelve un valor aleatorio entre 0 y 1, para tener un valor random más grande se debe utilizar el método .round() y dentro hacer el .random() * número máximo
console.log(Math.random());
console.log(Math.round(Math.random() * 1000));