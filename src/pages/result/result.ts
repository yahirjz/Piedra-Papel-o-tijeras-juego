import { state } from "../../state";
import "./result.css";
export function initResult(params: {goTo: (path:string) => void}){
    const moveJugador = state.getState().currentGame.userMove;
    const moveComputer = state.getState().currentGame.computerMove;
    const scoreJugador = state.getState().history.user;
    const scoreComputer = state.getState().history.computer;
    const winnner =  state.whoWins(moveJugador as "piedra" | "papel" | "tijera", moveComputer as "piedra" | "papel" | "tijera")
    const resutl = document.createElement('div');

    let winnnerStyle =`color:white;` 
    if(winnner === "ganaste"){
        winnnerStyle = `
        color:green;
        text-shadow: 0 0 10px rgba(255, 0, 0, 0.4);
        `
    }else if(winnner === "perdiste"){
        winnnerStyle = `
        color:red;
        text-shadow: 0 0 10px rgba(0, 255, 0, 0.4);
        `
    }
    resutl.className = "result-page"
    resutl.innerHTML = `
        <style>
            .result-page-title{
                ${winnnerStyle}
            }
        </style>
        <div class="result-page-container">
            <h1 class ="result-page-title">${winnner}</h1>

            <p class="result-page-paragran">
                <span> ${moveJugador}</span> VS 
                <span> ${moveComputer}</span>
            </p>
            <section class="result-page-section"> 
                <span> Jugador: ${scoreJugador}  </span>
                <span> Computadora: ${scoreComputer} </span>
            </section>
           
            <my-button id="play" class="blue" destino="play">Volver a Jugar!</my-button>
            <my-button id="menu" destino="welcome" >Menu</my-button>
        
        </div>
    `

    
    //-- Boton Para volver a jugar / menu
    const btnReturnPlay = resutl.querySelector("#play");
    const btnReturnMenu = resutl.querySelector("#menu");
  
    if(btnReturnPlay){
        btnReturnPlay.addEventListener('navigate', (e: any) => {
            const path = e.detail.to;
            console.log(path)
            params.goTo(`/${path}`);
        })
    }
    if(btnReturnMenu){
        btnReturnMenu.addEventListener('navigate', (e: any) =>{
            const path = e.detail.to;
            console.log(path)
            params.goTo(`/${path}`);
        })
    }
    return resutl;
}