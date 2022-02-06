/* Funciones Anónimas Autoejecutables - Son funciones anónimas que se ejecutan a la misma vez que se cargan */

 (function (){
    console.log("Mi primera Función Anónima Autoejecutada");
 })();

 (function (d, w, c){
    console.log("Mi segunda Función Anónima Autoejecutada");
    console.log(d);
    console.log(w);
    c.log('Este es un console.log');
 })(document, window, console);