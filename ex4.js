


//Ask the user to input the temperature as a number (store in variable FTEMP), and convert it to celcius (store in variable CTEMP)
// Log the message FTEMP Fahrenheit equals CTEMP in Celcius
// Use the following line of code for the conversion (this uses a Math function which we will discuss more in future lessons):
// var CTEMP = Math.round((FTEMP - 32) * 5 / 9);


var FTEMP = prompt("what is the temperature in Fahrenheit?");

var CTEMP = Math.round((FTEMP - 32) * 5 / 9);

alert(FTEMP + " Fahrenheit equals " + CTEMP + " in Celcius.");
console.log( FTEMP + " Fahrenheit equals " + CTEMP + " in Celcius.");

//console logging and alerting user, can they collide and create problems?
// can you call from the console logged message to alert the message?