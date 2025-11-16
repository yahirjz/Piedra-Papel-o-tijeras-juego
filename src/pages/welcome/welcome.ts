import "./welcome.css";

export function initPagesWelcome(params: { goTo: (path: string) => void }){
  const welcome = document.createElement('div')
      welcome.innerHTML = `
      <div class = "welcome__container">
        <h1 class ="welcome__title">
          <span class="title-word">Piedra</span>
          <span class="title-word colored">Papel</span>
          <span class="title-word">Tijera</span>
        </h1>
        <div class ="welcome__container-btn">
            <my-button class="blue" destino="inicio">Comenzar</my-button>
            <my-button destino="rules">Reglas</my-button>
        </div>
      </div>
    `

    // PARTE CLAVE: CONECTANDO EL COMPONENTE HIJO (BOTÓN) CON EL PADRE (PÁGINA)

    // 1. SELECCIONAMOS LOS COMPONENTES
    // Buscamos dentro del 'div' que acabamos de crear todos los elementos <my-button>.
    // Esto nos devuelve una lista de nuestros componentes de botón.
    const buttons = welcome.querySelectorAll("my-button");

    // 2. AÑADIMOS UN "ESCUCHA" (EVENT LISTENER) A CADA UNO
    // Recorremos la lista de botones para trabajar con cada uno individualmente.
    buttons.forEach(button => {
        // A cada botón, le decimos que "escuche" un evento llamado 'navigate'.
        // Este no es un evento estándar como 'click', es el evento personalizado que
        // nosotros mismos creamos y disparamos desde 'my-button.ts'.
        button.addEventListener('navigate', (e: any) => {
            // 3. EJECUTAMOS UNA ACCIÓN CUANDO ESCUCHAMOS EL EVENTO
            // Esta función se ejecuta solo cuando el botón dispara el evento 'navigate'.
            // 'e' es el objeto del evento, que contiene la información que enviamos.
            // Extraemos el destino de la propiedad 'detail' del evento (e.detail.to).
            const path = e.detail.to;
            // 4. LA PÁGINA TOMA EL CONTROL Y NAVEGA
            // Usamos la función 'goTo' (que nos pasó el router) para cambiar de página.
            params.goTo(`/${path}`);
        });
    });
    
    return welcome;
}