import "bootstrap";
import "./style.css";

window.onload = function() {
  // Crea un array con los palos y los numeros de cartas.
  // Create an array with the suits and card numbers.

  let palos = ["♦", "♥", "♠", "♣"];
  let cartas = ["A", "2", "3", "4", "5", "6", "7", "J", "Q", "K"];

  // Selecciona una carta de forma aleatoria.
  // Select a card at random.

  let indiceCarta = Math.floor(Math.random() * cartas.length);
  let indicePalos = Math.floor(Math.random() * palos.length);

  // Incrusta la carta seleccionado de forma aleatoria en el elemento indicado por la función -  document.getElementById("elemento");
  // Embed the randomly selected card in the element indicated by the function - document.getElementById("element");
  document.getElementById("iconosuperior").innerHTML = palos[indicePalos];
  document.getElementById("numeroCuerpo").innerHTML = cartas[indiceCarta];
  document.getElementById("iconoinferior").innerHTML = palos[indicePalos];

  // Rota el icono inferior 180grados.
  // Rotate the bottom icon 180 degrees.
  document.getElementById("iconoinferior").style.transform = "rotate(180deg)";

  // comprueba el palo de la carta, si es picas o corazones asigna el color rojo a la carta.
  // checks the suit of the card, if it is spades or hearts, assigns the color red to the card.
  if (palos[indicePalos] === "♦" || palos[indicePalos] === "♥") {
    document.getElementById("iconosuperior").classList.add("text-danger");
    document.getElementById("numeroCuerpo").classList.add("text-danger");
    document.getElementById("iconoinferior").classList.add("text-danger");
  }
};
