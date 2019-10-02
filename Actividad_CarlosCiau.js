
//Carlos Daniel Ciau Nahuat

//COMPLETO
//Ejercicio #1-Eliminar todas las palabras que tengan una longitud de 7 o mas letras.
let mensaje = "El año de 1983 microsft anuncio, el lanzamiento de sus sistema operativo Windows compatible con la ms/2";
let newMensaje = mensaje.replace(/[a-z]{7,}/g, "");
console.log(newMensaje);




//COMPLETO

//Ejercicio#2-Expresiones que no finalicen con una vocal
let mensaje = "El año de 1983 microsft anuncio el lanzamiento de su sistema operativo Windows compatible con la ";
let newMensaje = mensaje.replace(/[aeiou\s]\b /g," ");
console.log(newMensaje);




//COMPLETO
//Ejercicio#3-Las palabras que inicien con M donde la segunda letra no sea vocal
let mensaje = "El año de 1983 microsft anuncio, mcdonals el lanzamiento de su sistema operativo Windows con la";
let newMensaje = mensaje.replace(/[m][^aeiou][a-z]{0,}/g,"*");
console.log(newMensaje);




//COMPLETO
//Ejercicio#4-Expresiones encerradas en comillas
let mensaje = "El año de 1983 'microsft' anuncio, el lanzamiento de su sistema operativo 'windows' compatible con la";
let newMensaje = mensaje.replace(/[''?][a-z]{0,}/g," ");
console.log(newMensaje);




//COMPLETO
//Ejercicio#5-Ip's
let mensaje = "Una direccion Ip es una direccion unica para cada equipo, un ejemplo de Ip es  192.168.0.1,  por lo general esta Ip le pertenece a un router en especifico este no es una ip 1928.168.0.1 ";
let newMensaje = mensaje.replace(/\b\d{1,3}[.]\d{1,3}[.]\d{1,3}[.]\d{1,3}\b/g,"");
console.log(newMensaje);




//COMPLETO
//Ejercicio#6-Horas
let mensaje = "Para poder obtener informacion sobre el empleo que usted quiere solicitar, favor de cominucarse con Carlos Ciau, A patir de las 10:30am no a las 10:40";
let newMensaje = mensaje.replace(/\d+:\d+[am|pm]+/g, " ");
console.log(newMensaje);




//COMPLETO
//Ejercicio#7-Telefonos
let mensaje = "985-125-87-13 es mi numero no 985-125-87-15";
let newMensaje = mensaje.replace(/\b\d{3}[-]\d{3}[-]\d{2}[-]\d{2}\b/g, "");
console.log(newMensaje);




//COMPLETO
//Ejercicio#8-Correos Electronicos
let mensaje = "Para poder obtener informacion sobre el empleo que usted quiere solicitar, favor de cominucarse con Carlos Ciau en su correo carlos.ciaunahuat@itsva.edu.mx";
let newMensaje = mensaje.replace(/[a-z.@]{18,}/g, "");
console.log(newMensaje);



//COMPLETO
//Ejercicio#9-url´s
let mensaje = "Una url es un identificador, como por ejemplo http://www.google.com o https://www.youtube.com, NO www.yaske45.as ";
let newMensaje = mensaje.replace(/[https|http]+:..w{3}[.].*?[.]com/g," ");
console.log(newMensaje);




//COMPLETO
//Ejercicio#10-Codigo Postal
let mensaje = "El codigo postal fue usado por primera vez en Ucrania, en el año de 1932, El codigo postal de mi localidad es 97760, no 977608  ni tampoco 9760, el de valladolid es 97780";
let newMensaje = mensaje.replace(/\b[0-9]{5}\b/g,"");
console.log(newMensaje);


