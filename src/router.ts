import { initPagesWelcome } from "./pages/welcome/welcome";
import { initRules } from "./pages/rules/rules";
import { initInicio } from "./pages/inicio/inicio";
import { initPlay } from "./pages/play/play";
import { initResult } from "./pages/result/result";

const routes = [
  { path: /^\/welcome$/, component: initPagesWelcome },
  { path: /^\/rules$/, component: initRules },
  { path: /^\/inicio$/, component: initInicio },
  { path: /^\/play$/, component: initPlay },
  { path: /^\/result$/, component: initResult },
];

export function initRouter(container: Element) {
  const basePath = "/Piedra-Papel-o-tijeras-juego";

  function getCleanPathFromURL() {
    const fullPath = window.location.pathname;
    console.log({fullPath});
    if (fullPath.startsWith(basePath)) {
      return fullPath.replace(basePath, "") || "/";
    }
    return fullPath;
  }

  function handleRoute(route: string) {
    const routeFound = routes.find((r) => r.path.test(route));
    if (!routeFound) {
      goTo("/welcome"); // Redirige si no encuentra la ruta
      return;
    }

    container.innerHTML = ""; // Limpiamos el container
    const el = routeFound.component({ goTo });
    container.appendChild(el); // Agregamos el componente
  }

  function renderPath(path: string) {
    handleRoute(path); // Llama a handleRoute con la ruta
  }
  
// Función para renderizar el contenido en base al path actual.
  function goTo(path: string) {
    history.pushState({}, "", basePath + path);
    renderPath(path); // Usamos renderPath aquí
  }

  const initialPath = getCleanPathFromURL();
  console.log({initialPath});
  if (initialPath === "/") {
    goTo("/welcome");
  } else {
    renderPath(initialPath); // Usamos renderPath aquí
  }

  window.addEventListener("popstate", () => {
    const path = getCleanPathFromURL();
    renderPath(path); // Usamos renderPath aquí
  });
}
