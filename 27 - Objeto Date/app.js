let fecha = new Date();
console.log(fecha);

// Utilizar el día del mes
console.log(fecha.getDate());

// Día de la semana DLMMiJVS -> 0 1 2 3 4 5 6
console.log(fecha.getDay());

// Obtener el mes, empiezan en la posición 0
console.log(fecha.getMonth());

// Obtener el año
console.log(fecha.getFullYear());

// Obtener la hora
console.log(fecha.getMilliseconds());
console.log(fecha.getSeconds());
console.log(fecha.getMinutes());
console.log(fecha.getHours());

// Obtener un string con la fecha completa
console.log(fecha.toString());

// Con toDateString() obtengo solamente la fecha
console.log(fecha.toDateString());

// Acceder a la fecha y hora en formato local
console.log(fecha.toLocaleString());

// Acceder solamente a la fecha en formato local
console.log(fecha.toLocaleDateString());

// Acceder a la hora en formato local
console.log(fecha.toLocaleTimeString);

// Muestra los segundos que han pasado desde el 1 de enero de 1970
console.log(Date.now());