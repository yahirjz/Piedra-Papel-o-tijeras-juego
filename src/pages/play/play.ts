import "./play.css";
import {state} from "../../state"

type Move = "piedra" | "papel" | "tijera";
export function initPlay(params: { goTo: (path: string) => void }) {
    const play = document.createElement('div');
    const rockURL = new URL("../../img/piedra.svg", import.meta.url).href;
    const paperURL = new URL("../../img/papel.svg", import.meta.url).href;
    const scissorsURL = new URL("../../img/tijera.svg", import.meta.url).href;

    play.className = "play-page";
    play.innerHTML = `
        <div class="play-page__content">
            <!-- El contador se mostrará aquí cuando el usuario elija una mano -->
        </div>
            <p class ="hands-title"> Elige una opción</p>
        <div class="hands-container">

             <!--contenedor de piedra-->
            <div class = "container-hand-paper">
            <img src="${rockURL}" class="hand-img" data-move="piedra" alt="Piedra">
            <span class ="play-text">Piedra</span>
            </div>

             <!--contenedor de papel-->
            <div class = "container-hand-paper">
            <img src="${paperURL}" class="hand-img" data-move="papel" alt="Papel">
            <span class ="play-text">Papel</span>
            </div>
            
            <!--contenedor de tijera-->
            <div class = "container-hand-paper">
            <img src="${scissorsURL}" class="hand-img" data-move="tijera" alt="Tijera">
            <span class ="play-text">Tijera</span>
            </div>
        </div>
    `;

    // --- LÓGICA DEL JUEGO ---
    const text = play.querySelector(".hands-title") as HTMLAnchorElement
    const contentEl = play.querySelector(".play-page__content");
    const handsContainerEl = play.querySelector(".hands-container")as HTMLElement;
    const handImages = play.querySelectorAll(".hand-img");

    // 1. Añadimos un listener a cada imagen de mano.
    handImages.forEach(hand => {
        hand.addEventListener('click', (e) => {
            const target = e.target as HTMLElement;
            //Buscamos el dato del movimineto 
            const userMove = target.dataset.move as Move;

            // 2. Guardamos la jugada del usuario (por ahora en consola).
            console.log("El usuario eligió:", userMove);

            // 3. Ocultamos las manos para dar paso al contador.
            if (handsContainerEl && text) {
                handsContainerEl.style.display = 'none'; 
                text.style.display = 'none'
            }

            // 4. Creamos el componente contador y lo añadimos a la página.
            const contadorEl = document.createElement('my-contador');
            contentEl?.appendChild(contadorEl);

            // 5. Escuchamos cuando el contador termina su cuenta.
            contadorEl.addEventListener('countdown-finished', () => {
                console.log("¡El tiempo ha terminado! Es hora de mostrar los resultados.");
                // AQUÍ: Lógica para generar la jugada de la máquina,
                // comparar y navegar a la página de resultados.
                // params.goTo("/results");
                state.setMove(userMove);
                params.goTo("/result")
            });
        });
    });


    return play;
}