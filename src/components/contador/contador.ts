export function initContador(){
    class Contador extends HTMLElement {
        shadow = this.attachShadow({mode: "open"});
        
        constructor(){
            super();
        }

        // El ciclo de vida connectedCallback se ejecuta cuando el componente se añade al DOM.
        connectedCallback(){
            // 1. Primero renderizamos el HTML y los estilos.
            this.render();
            // 2. Luego, iniciamos la cuenta atrás.
            this.startCountdown();
        }

        startCountdown(): void {
            // Buscamos el elemento del contador DESPUÉS de que se haya renderizado.
            const contadorEl = this.shadow.querySelector(".contador-text");
            let count = 3;

            if (contadorEl) {
                // Asignamos el valor inicial como string.
                contadorEl.textContent = count.toString();
    
                const intervalId = setInterval(() => {
                    count--;
                    contadorEl.textContent = count.toString();
    
                    if (count <= 0) {
                        clearInterval(intervalId); // Detenemos el contador cuando llega a 0.
                        // Avisamos a la página que el contador ha terminado.
                        this.dispatchEvent(new CustomEvent('countdown-finished'));
                    }
                }, 1000); // Se ejecuta cada segundo.
            }
        }

        render(){
            this.shadow.innerHTML =`
                <style>
                    .contador-text {
                        font-size: 100px;
                        font-family: var(--font);
                        display:flex;
                        align-items:center;
                        justify-content:center;
                        color:#fff;
                       padding-top:250px;
                    }
                </style>
                <div class="contador-text"></div>
            `;
        }
    }
    // Corregimos el nombre de la etiqueta para que sea consistente.
    customElements.define("my-contador", Contador);
}