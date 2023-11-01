import '../../styles/layout/Instructions.scss';

function Instructions() {
  return (
    <section className="instructions">
      <p>
        El juego del Ahorcado es un juego de adivinanza de palabras en el que un
        jugador trata de adivinar una palabra oculta eligiendo letras una por
        una. El objetivo del juego es adivinar la palabra antes de que se dibuje
        por completo una representación de un ahorcado.
      </p>
      <p>
       1. El jugador comienza a adivinar letras una por una. Si la letra adivinada
        está en la palabra, el moderador la revela en su posición
        correspondiente en la palabra. Por ejemplo, si la palabra es "CASA" y el
        jugador adivina "A", se mostrará como "_ _ A _".
       </p> 
       <p>2.Si el jugador adivina mal, la letra fallada aparecera en la lista de letras falladas.
        Por cada letra fallada el muñequit se irá pintando.se irá completando el dibujo del ahorcado.
       </p><p> 3.El juego termina cuando el jugador adivina la palabra correctamente o cuando se completa el dibujo del ahorcado.

      </p>
    </section>
  );
}

export default Instructions;
