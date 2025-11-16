import { initPagesWelcome } from "./pages/welcome/welcome";
import { initRules} from "./pages/rules/rules";
import { initInicio} from "./pages/inicio/inicio";
import { initPlay } from "./pages/play/play";
import { initResult } from "./pages/result/result";
const routes = [
    {
        path: /\/welcome/,
        component: initPagesWelcome,
    },{
        path: /\/rules/,
        component: initRules,
    },{
        path: /\/inicio/,
        component: initInicio,
    },{
        path: /\/play/,
        component: initPlay,
    },{
        path: /\/result/,
        component: initResult,
    }
]

export function initRouter(container :Element){
    // 'goTo' nos permite navegar en las paginas
    function goTo(path: string){
      
        //cambiamos la barra del navegador sin recargar la pagina 
        history.pushState({}, "", path);
        // Después de cambiar la URL, llamamos a handleRoute para que muestre la página correcta.
        handleRoute(path)
    }

    function handleRoute(route: string){
        //Recorrermos el array de las rutas definidas
        for(const r of routes){
            //comporbamos si la ruta existe con el path
            if(r.path.test(route)){
                  // Si hay coincidencia, llamamos a la función 'component' asociada 
                   // Le pasamos un objeto con la función 'goTo' para que la página pueda navegar a otros lugares.
                   const el = r.component({goTo: goTo});

                   //Limpiamos la pagina antes
                   if(container.firstChild){
                    container.firstChild.remove();
                   }
                   container.appendChild(el);
            }

        }

    }   

    // 1. Maneja la ruta inicial: Cuando la página carga, comprobamos la ruta.
    // Si es la raíz ("/"), navegamos a "/welcome".
    // "location.pathname" es "/" por eso verificamos si es verdadero le ingresamos "/welcome"
    if (location.pathname === "/") {
        goTo("/welcome");
    } else {
        handleRoute(location.pathname);
    }
   
    // 2. Escucha los cambios en el historial: El evento "popstate" se dispara cuando el usuario
    // usa los botones de "atrás" o "adelante" del navegador. Al escucharlo, nos aseguramos
    // de que nuestra app reaccione y muestre la página correcta.
    window.addEventListener("popstate", () => handleRoute(location.pathname));
}
