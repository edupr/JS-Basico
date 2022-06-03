var numero = 1

switch (numero) {
    case 1:
        console.log("Soy uno"); // Si se cumple la condición, se ejecuta el código";    
        break;
    case 10:
        console.log("Soy un 10") // Si se cumple la condición, se ejecuta el código";
        break;
    case 100:
        console.log("Soy un 100") // Si se cumple la condición, se ejecuta el código";
        break;
    default:
        console.log("No soy ninguno de los anteriores"); // Si no se cumple ninguna de las anteriores, se ejecuta el código";
}



var hombre = "piedra"
var maquina = "papel"

prompt("Elige piedra, papel o tijera");

jugada = hombre + maquina

switch (jugada) {
    case "piedravspiedra":
        console.log("Empate");
        break;
    case "piedravspapel":
        console.log("Gana el papel");
        break;
    case "piedravstijera":
        console.log("Gana la piedra");
        break;
    case "papelvspiedra":
        console.log("Empate");
        break;
    case "papelvspapel":
        console.log("Empate");
        break;
    case "papelvstijera":
        console.log("Gana la tijera");
        break;
    case "tijeravspiedra":
        console.log("Gana la piedra");
        break;
    case "tijeravspapel":
        console.log("Gana la tijera");
        break;
    case "tijeravstijera":
        console.log("Empate");
        break;
}