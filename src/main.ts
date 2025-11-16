import "./index.css";
import {initRouter} from "./router";
import { initMyButton } from "./components/my-button/my-button";
import { initContador } from "./components/contador/contador";

(function(){    
    initMyButton();
    initContador(); // Registramos el componente del contador
    const root = document.querySelector('.root');

    if(root){
        initRouter(root);
    }
})()

