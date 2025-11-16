import "./inicio.css";
export function initInicio(params: { goTo: (path: string) => void }){
    const inicio = document.createElement('div');
    // Obtenemos las URLs de las imágenes. Parcel se encargará de procesarlas.
    // Asumo que tienes los archivos piedra.svg y tijera.svg en la carpeta img.
    const rockURL = new URL("../../img/piedra.svg", import.meta.url).href;
    const paperURL = new URL("../../img/papel.svg", import.meta.url).href;
    const scissorsURL = new URL("../../img/tijera.svg", import.meta.url).href;

    // Asignamos la clase directamente al div que creamos, en lugar de crear uno anidado.
    inicio.className = "inicio__container";
    inicio.innerHTML =`
         <p class ="inicio__paragraph">Presioná para jugar y elige la piedra, papel o tijera</p>
            <my-button class="blue"  destino="play">Jugar!</my-button>
         <div class="hands-container">
            <img src="${rockURL}" class="inicio-hand-img" alt="Piedra">
            <img src="${paperURL}" class="inicio-hand-img" alt="Papel">
            <img src="${scissorsURL}" class="inicio-hand-img" alt="Tijera">
         </div>
    `;

    // Buscamos el botón "Jugar!" que acabamos de crear.
    const playButton = inicio.querySelector("my-button");

    if (playButton) {
        // Le decimos al botón que escuche el evento 'navigate'.
        playButton.addEventListener('navigate', (e: any) => {
            const path = e.detail.to;
            params.goTo(`/${path}`);
        });
    }

    return inicio;
}