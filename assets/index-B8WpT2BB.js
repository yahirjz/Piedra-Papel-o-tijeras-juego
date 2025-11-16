(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function s(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=s(o);fetch(o.href,a)}})();function h(t){const e=document.createElement("div");return e.innerHTML=`
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
    `,e.querySelectorAll("my-button").forEach(n=>{n.addEventListener("navigate",o=>{const a=o.detail.to;t.goTo(`/${a}`)})}),e}function f(t){const e=document.createElement("div"),s=new URL("/Piedra-Papel-o-tijeras-juego/assets/reglas-gs8TXJJ3.png",import.meta.url).href;e.className="rules-page",e.innerHTML=`
        <h1 class="rules-page-title">Reglas</h1>
           <img src="${s}" class="rules-page-img" alt="reglas">
            <p class="rules-page-paragran"> Las reglas son simples</p>
           <ol class="rules-page-orderlist">
                <li>El <b> Papel</b> le gana a la <b>Roca</b></li>
                <li>La <b>Roca</b> le gana a las <b>Tijeras</b></li>
                <li>Las <b>Tijeras</b> le gana al <b>Papel</b></li>
           </ol>
           
        <my-button destino="welcome">Menu</my-button>
    `;const n=e.querySelector("my-button");return n&&n.addEventListener("navigate",o=>{const a=o.detail.to;console.log(a),t.goTo(`/${a}`)}),e}function y(t){const e=document.createElement("div"),s=new URL("/Piedra-Papel-o-tijeras-juego/assets/piedra-DuFYeu0w.svg",import.meta.url).href,n=new URL("/Piedra-Papel-o-tijeras-juego/assets/papel-BxPnimu3.svg",import.meta.url).href,o=new URL("/Piedra-Papel-o-tijeras-juego/assets/tijera-D13S6w_M.svg",import.meta.url).href;e.className="inicio__container",e.innerHTML=`
         <p class ="inicio__paragraph">Presioná para jugar y elige la piedra, papel o tijera</p>
            <my-button class="blue"  destino="play">Jugar!</my-button>
         <div class="hands-container">
            <img src="${s}" class="inicio-hand-img" alt="Piedra">
            <img src="${n}" class="inicio-hand-img" alt="Papel">
            <img src="${o}" class="inicio-hand-img" alt="Tijera">
         </div>
    `;const a=e.querySelector("my-button");return a&&a.addEventListener("navigate",r=>{const i=r.detail.to;t.goTo(`/${i}`)}),e}const c={data:{currentGame:{userMove:"",computerMove:""},history:JSON.parse(localStorage.getItem("jugadas")||'{"user": 0, "computer": 0}')},listeners:[],getState(){return this.data},setState(t){this.data=t,localStorage.setItem("jugadas",JSON.stringify(t.history));for(const e of this.listeners)e()},subscribe(t){this.listeners.push(t)},setMove(t){const e=this.getState(),s=this.getComputerMove();e.currentGame.userMove=t,e.currentGame.computerMove=s;const n=this.whoWins(t,s);n==="ganaste"?e.history.user++:n==="perdiste"&&e.history.computer++,this.setState(e)},getComputerMove(){const t=["piedra","papel","tijera"],e=Math.floor(Math.random()*3);return t[e]},whoWins(t,e){return t===e?"empataste":t==="piedra"&&e==="tijera"||t==="papel"&&e==="piedra"||t==="tijera"&&e==="papel"?"ganaste":"perdiste"}};function b(t){const e=document.createElement("div"),s=new URL("/Piedra-Papel-o-tijeras-juego/assets/piedra-DuFYeu0w.svg",import.meta.url).href,n=new URL("/Piedra-Papel-o-tijeras-juego/assets/papel-BxPnimu3.svg",import.meta.url).href,o=new URL("/Piedra-Papel-o-tijeras-juego/assets/tijera-D13S6w_M.svg",import.meta.url).href;e.className="play-page",e.innerHTML=`
        <div class="play-page__content">
            <!-- El contador se mostrará aquí cuando el usuario elija una mano -->
        </div>
            <p class ="hands-title"> Elige una opción</p>
        <div class="hands-container">

             <!--contenedor de piedra-->
            <div class = "container-hand-paper">
            <img src="${s}" class="hand-img" data-move="piedra" alt="Piedra">
            <span class ="play-text">Piedra</span>
            </div>

             <!--contenedor de papel-->
            <div class = "container-hand-paper">
            <img src="${n}" class="hand-img" data-move="papel" alt="Papel">
            <span class ="play-text">Papel</span>
            </div>
            
            <!--contenedor de tijera-->
            <div class = "container-hand-paper">
            <img src="${o}" class="hand-img" data-move="tijera" alt="Tijera">
            <span class ="play-text">Tijera</span>
            </div>
        </div>
    `;const a=e.querySelector(".hands-title"),r=e.querySelector(".play-page__content"),i=e.querySelector(".hands-container");return e.querySelectorAll(".hand-img").forEach(u=>{u.addEventListener("click",d=>{const m=d.target.dataset.move;console.log("El usuario eligió:",m),i&&a&&(i.style.display="none",a.style.display="none");const g=document.createElement("my-contador");r?.appendChild(g),g.addEventListener("countdown-finished",()=>{console.log("¡El tiempo ha terminado! Es hora de mostrar los resultados."),c.setMove(m),t.goTo("/result")})})}),e}function v(t){const e=c.getState().currentGame.userMove,s=c.getState().currentGame.computerMove,n=c.getState().history.user,o=c.getState().history.computer,a=c.whoWins(e,s),r=document.createElement("div");let i="color:white;";a==="ganaste"?i=`
        color:green;
        text-shadow: 0 0 10px rgba(255, 0, 0, 0.4);
        `:a==="perdiste"&&(i=`
        color:red;
        text-shadow: 0 0 10px rgba(0, 255, 0, 0.4);
        `),r.className="result-page",r.innerHTML=`
        <style>
            .result-page-title{
                ${i}
            }
        </style>
        <div class="result-page-container">
            <h1 class ="result-page-title">${a}</h1>

            <p class="result-page-paragran">
                <span> ${e}</span> VS 
                <span> ${s}</span>
            </p>
            <section class="result-page-section"> 
                <span> Jugador: ${n}  </span>
                <span> Computadora: ${o} </span>
            </section>
           
            <my-button id="play" class="blue" destino="play">Volver a Jugar!</my-button>
            <my-button id="menu" destino="welcome" >Menu</my-button>
        
        </div>
    `;const p=r.querySelector("#play"),u=r.querySelector("#menu");return p&&p.addEventListener("navigate",d=>{const l=d.detail.to;console.log(l),t.goTo(`/${l}`)}),u&&u.addEventListener("navigate",d=>{const l=d.detail.to;console.log(l),t.goTo(`/${l}`)}),r}const w=[{path:/\/welcome/,component:h},{path:/\/rules/,component:f},{path:/\/inicio/,component:y},{path:/\/play/,component:b},{path:/\/result/,component:v}];function L(t){function e(n){history.pushState({},"",n),s(n)}function s(n){for(const o of w)if(o.path.test(n)){const a=o.component({goTo:e});t.firstChild&&t.firstChild.remove(),t.appendChild(a)}}location.pathname==="/"?e("/welcome"):s(location.pathname),window.addEventListener("popstate",()=>s(location.pathname))}function E(){class t extends HTMLElement{shadow=this.attachShadow({mode:"open"});static get observedAttributes(){return["destino","class"]}constructor(){super()}connectedCallback(){const s=this.getAttribute("class");this.render(s)}render(s){let n=" background: white; border: solid 3px #000; color:#000;",o=`
                 background: #fff ;
                 box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            `;s==="blue"&&(n=`
                    background:#006CFC;
                    border-style:none;
                    color:#fff;
                    transition: background 0.3s ease;
                `,o=`
                background: #0681ff ;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            `),this.shadow.innerHTML=`
                <style>
                    button{
                        ${n}
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
                        ${o}
                    } 
                </style>
                <button><slot></slot></button>
            `;const a=this.shadow.querySelector("button");a&&a.addEventListener("click",this.handleClick.bind(this))}handleClick(){const s=this.getAttribute("destino");if(s){const n=new CustomEvent("navigate",{detail:{to:s}});this.dispatchEvent(n)}}}customElements.define("my-button",t)}function S(){class t extends HTMLElement{shadow=this.attachShadow({mode:"open"});constructor(){super()}connectedCallback(){this.render(),this.startCountdown()}startCountdown(){const s=this.shadow.querySelector(".contador-text");let n=3;if(s){s.textContent=n.toString();const o=setInterval(()=>{n--,s.textContent=n.toString(),n<=0&&(clearInterval(o),this.dispatchEvent(new CustomEvent("countdown-finished")))},1e3)}}render(){this.shadow.innerHTML=`
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
            `}}customElements.define("my-contador",t)}(function(){E(),S();const t=document.querySelector(".root");t&&L(t)})();
