(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(n){if(n.ep)return;n.ep=!0;const o=a(n);fetch(n.href,o)}})();function h(t){const e=document.createElement("div");return e.innerHTML=`
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
    `,e.querySelectorAll("my-button").forEach(s=>{s.addEventListener("navigate",n=>{const o=n.detail.to;t.goTo(`/${o}`)})}),e}function f(t){const e=document.createElement("div"),a=new URL("/Piedra-Papel-o-tijeras-juego/assets/reglas-gs8TXJJ3.png",import.meta.url).href;e.className="rules-page",e.innerHTML=`
        <h1 class="rules-page-title">Reglas</h1>
           <img src="${a}" class="rules-page-img" alt="reglas">
            <p class="rules-page-paragran"> Las reglas son simples</p>
           <ol class="rules-page-orderlist">
                <li>El <b> Papel</b> le gana a la <b>Roca</b></li>
                <li>La <b>Roca</b> le gana a las <b>Tijeras</b></li>
                <li>Las <b>Tijeras</b> le gana al <b>Papel</b></li>
           </ol>
           
        <my-button destino="welcome">Menu</my-button>
    `;const s=e.querySelector("my-button");return s&&s.addEventListener("navigate",n=>{const o=n.detail.to;console.log(o),t.goTo(`/${o}`)}),e}function y(t){const e=document.createElement("div"),a=new URL("/Piedra-Papel-o-tijeras-juego/assets/piedra-DuFYeu0w.svg",import.meta.url).href,s=new URL("/Piedra-Papel-o-tijeras-juego/assets/papel-BxPnimu3.svg",import.meta.url).href,n=new URL("/Piedra-Papel-o-tijeras-juego/assets/tijera-D13S6w_M.svg",import.meta.url).href;e.className="inicio__container",e.innerHTML=`
         <p class ="inicio__paragraph">Presioná para jugar y elige la piedra, papel o tijera</p>
            <my-button class="blue"  destino="play">Jugar!</my-button>
         <div class="hands-container">
            <img src="${a}" class="inicio-hand-img" alt="Piedra">
            <img src="${s}" class="inicio-hand-img" alt="Papel">
            <img src="${n}" class="inicio-hand-img" alt="Tijera">
         </div>
    `;const o=e.querySelector("my-button");return o&&o.addEventListener("navigate",i=>{const r=i.detail.to;t.goTo(`/${r}`)}),e}const p={data:{currentGame:{userMove:"",computerMove:""},history:JSON.parse(localStorage.getItem("jugadas")||'{"user": 0, "computer": 0}')},listeners:[],getState(){return this.data},setState(t){this.data=t,localStorage.setItem("jugadas",JSON.stringify(t.history));for(const e of this.listeners)e()},subscribe(t){this.listeners.push(t)},setMove(t){const e=this.getState(),a=this.getComputerMove();e.currentGame.userMove=t,e.currentGame.computerMove=a;const s=this.whoWins(t,a);s==="ganaste"?e.history.user++:s==="perdiste"&&e.history.computer++,this.setState(e)},getComputerMove(){const t=["piedra","papel","tijera"],e=Math.floor(Math.random()*3);return t[e]},whoWins(t,e){return t===e?"empataste":t==="piedra"&&e==="tijera"||t==="papel"&&e==="piedra"||t==="tijera"&&e==="papel"?"ganaste":"perdiste"}};function b(t){const e=document.createElement("div"),a=new URL("/Piedra-Papel-o-tijeras-juego/assets/piedra-DuFYeu0w.svg",import.meta.url).href,s=new URL("/Piedra-Papel-o-tijeras-juego/assets/papel-BxPnimu3.svg",import.meta.url).href,n=new URL("/Piedra-Papel-o-tijeras-juego/assets/tijera-D13S6w_M.svg",import.meta.url).href;e.className="play-page",e.innerHTML=`
        <div class="play-page__content">
            <!-- El contador se mostrará aquí cuando el usuario elija una mano -->
        </div>
            <p class ="hands-title"> Elige una opción</p>
        <div class="hands-container">

             <!--contenedor de piedra-->
            <div class = "container-hand-paper">
            <img src="${a}" class="hand-img" data-move="piedra" alt="Piedra">
            <span class ="play-text">Piedra</span>
            </div>

             <!--contenedor de papel-->
            <div class = "container-hand-paper">
            <img src="${s}" class="hand-img" data-move="papel" alt="Papel">
            <span class ="play-text">Papel</span>
            </div>
            
            <!--contenedor de tijera-->
            <div class = "container-hand-paper">
            <img src="${n}" class="hand-img" data-move="tijera" alt="Tijera">
            <span class ="play-text">Tijera</span>
            </div>
        </div>
    `;const o=e.querySelector(".hands-title"),i=e.querySelector(".play-page__content"),r=e.querySelector(".hands-container");return e.querySelectorAll(".hand-img").forEach(d=>{d.addEventListener("click",l=>{const m=l.target.dataset.move;console.log("El usuario eligió:",m),r&&o&&(r.style.display="none",o.style.display="none");const g=document.createElement("my-contador");i?.appendChild(g),g.addEventListener("countdown-finished",()=>{console.log("¡El tiempo ha terminado! Es hora de mostrar los resultados."),p.setMove(m),t.goTo("/result")})})}),e}function v(t){const e=p.getState().currentGame.userMove,a=p.getState().currentGame.computerMove,s=p.getState().history.user,n=p.getState().history.computer,o=p.whoWins(e,a),i=document.createElement("div");let r="color:white;";o==="ganaste"?r=`
        color:green;
        text-shadow: 0 0 10px rgba(255, 0, 0, 0.4);
        `:o==="perdiste"&&(r=`
        color:red;
        text-shadow: 0 0 10px rgba(0, 255, 0, 0.4);
        `),i.className="result-page",i.innerHTML=`
        <style>
            .result-page-title{
                ${r}
            }
        </style>
        <div class="result-page-container">
            <h1 class ="result-page-title">${o}</h1>

            <p class="result-page-paragran">
                <span> ${e}</span> VS 
                <span> ${a}</span>
            </p>
            <section class="result-page-section"> 
                <span> Jugador: ${s}  </span>
                <span> Computadora: ${n} </span>
            </section>
           
            <my-button id="play" class="blue" destino="play">Volver a Jugar!</my-button>
            <my-button id="menu" destino="welcome" >Menu</my-button>
        
        </div>
    `;const c=i.querySelector("#play"),d=i.querySelector("#menu");return c&&c.addEventListener("navigate",l=>{const u=l.detail.to;console.log(u),t.goTo(`/${u}`)}),d&&d.addEventListener("navigate",l=>{const u=l.detail.to;console.log(u),t.goTo(`/${u}`)}),i}const w=[{path:/^\/welcome$/,component:h},{path:/^\/rules$/,component:f},{path:/^\/inicio$/,component:y},{path:/^\/play$/,component:b},{path:/^\/result$/,component:v}];function L(t){const e="/Piedra-Papel-o-tijeras-juego";function a(){const r=window.location.pathname;return console.log({fullPath:r}),r.startsWith(e)?r.replace(e,"")||"/":r}function s(r){const c=w.find(l=>l.path.test(r));if(!c){o("/welcome");return}t.innerHTML="";const d=c.component({goTo:o});t.appendChild(d)}function n(r){s(r)}function o(r){history.pushState({},"",e+r),n(r)}const i=a();console.log({initialPath:i}),i==="/"?o("/welcome"):n(i),window.addEventListener("popstate",()=>{const r=a();n(r)})}function P(){class t extends HTMLElement{shadow=this.attachShadow({mode:"open"});static get observedAttributes(){return["destino","class"]}constructor(){super()}connectedCallback(){const a=this.getAttribute("class");this.render(a)}render(a){let s=" background: white; border: solid 3px #000; color:#000;",n=`
                 background: #fff ;
                 box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            `;a==="blue"&&(s=`
                    background:#006CFC;
                    border-style:none;
                    color:#fff;
                    transition: background 0.3s ease;
                `,n=`
                background: #0681ff ;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            `),this.shadow.innerHTML=`
                <style>
                    button{
                        ${s}
                        border-radius:10px;
                        width:322px;
                        height:87px;
                        font-family:'Roboto',san serif;
                        font-size:30px;
                        font-weight:400;
                        margin-top:50px;
                        cursor:pointer;
                    }
                    button:hover{
                        ${n}
                    } 
                </style>
                <button><slot></slot></button>
            `;const o=this.shadow.querySelector("button");o&&o.addEventListener("click",this.handleClick.bind(this))}handleClick(){const a=this.getAttribute("destino");if(a){const s=new CustomEvent("navigate",{detail:{to:a}});this.dispatchEvent(s)}}}customElements.define("my-button",t)}function E(){class t extends HTMLElement{shadow=this.attachShadow({mode:"open"});constructor(){super()}connectedCallback(){this.render(),this.startCountdown()}startCountdown(){const a=this.shadow.querySelector(".contador-text");let s=3;if(a){a.textContent=s.toString();const n=setInterval(()=>{s--,a.textContent=s.toString(),s<=0&&(clearInterval(n),this.dispatchEvent(new CustomEvent("countdown-finished")))},1e3)}}render(){this.shadow.innerHTML=`
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
            `}}customElements.define("my-contador",t)}(function(){P(),E();const t=document.querySelector(".root");t&&L(t)})();
