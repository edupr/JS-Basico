var edad = 18;

if (edad === 18) {
  console.log("Puedes votar");
} else if (edad > 18) {
    console.log("Puedes votar de nuevo");
} else {
    console.log("No puedes votar");
}

if (true) {
    console.log("Hola");
} else if (false) {
    console.log("Soy falso");
}




condition ? true : false;

var numero = 1;

var resultado = numero === 1 ? "Soy uno" : "No soy uno";




// Language: javascript
// Path: if.js
// Ejercicio: Lógica del juego: Piedra, Papel o Tijera

var jugador;
var computador;

if (jugador == "tijeras"  && computador == "papel") 
{
    console.log("Ganaste");
}
elseif (jugador == "Piedra"  && computador == "tijeras") 
{
    console.log("Ganaste");
}
elseif (jugador == "papel"  && computador == "piedra") 
{
    console.log("Ganaste");
}
elseif (jugador == computador ) 
{
    console.log("empate");
}
else {
    console.log("Perdiste")
}