(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function a(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(n){if(n.ep)return;n.ep=!0;const s=a(n);fetch(n.href,s)}})();function h(t){const e=document.createElement("div");return e.innerHTML=`
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
    `,e.querySelectorAll("my-button").forEach(o=>{o.addEventListener("navigate",n=>{const s=n.detail.to;t.goTo(`/${s}`)})}),e}function f(t){const e=document.createElement("div"),a=new URL("/assets/reglas-gs8TXJJ3.png",import.meta.url).href;e.className="rules-page",e.innerHTML=`
        <h1 class="rules-page-title">Reglas</h1>
           <img src="${a}" class="rules-page-img" alt="reglas">
            <p class="rules-page-paragran"> Las reglas son simples</p>
           <ol class="rules-page-orderlist">
                <li>El <b> Papel</b> le gana a la <b>Roca</b></li>
                <li>La <b>Roca</b> le gana a las <b>Tijeras</b></li>
                <li>Las <b>Tijeras</b> le gana al <b>Papel</b></li>
           </ol>
           
        <my-button destino="welcome">Menu</my-button>
    `;const o=e.querySelector("my-button");return o&&o.addEventListener("navigate",n=>{const s=n.detail.to;console.log(s),t.goTo(`/${s}`)}),e}function y(t){const e=document.createElement("div"),a=new URL("/assets/piedra-DuFYeu0w.svg",import.meta.url).href,o=new URL("/assets/papel-BxPnimu3.svg",import.meta.url).href,n=new URL("/assets/tijera-D13S6w_M.svg",import.meta.url).href;e.className="inicio__container",e.innerHTML=`
         <p class ="inicio__paragraph">Presioná para jugar y elige la piedra, papel o tijera</p>
            <my-button class="blue"  destino="play">Jugar!</my-button>
         <div class="hands-container">
            <img src="${a}" class="inicio-hand-img" alt="Piedra">
            <img src="${o}" class="inicio-hand-img" alt="Papel">
            <img src="${n}" class="inicio-hand-img" alt="Tijera">
         </div>
    `;const s=e.querySelector("my-button");return s&&s.addEventListener("navigate",r=>{const i=r.detail.to;t.goTo(`/${i}`)}),e}const c={data:{currentGame:{userMove:"",computerMove:""},history:JSON.parse(localStorage.getItem("jugadas")||'{"user": 0, "computer": 0}')},listeners:[],getState(){return this.data},setState(t){this.data=t,localStorage.setItem("jugadas",JSON.stringify(t.history));for(const e of this.listeners)e()},subscribe(t){this.listeners.push(t)},setMove(t){const e=this.getState(),a=this.getComputerMove();e.currentGame.userMove=t,e.currentGame.computerMove=a;const o=this.whoWins(t,a);o==="ganaste"?e.history.user++:o==="perdiste"&&e.history.computer++,this.setState(e)},getComputerMove(){const t=["piedra","papel","tijera"],e=Math.floor(Math.random()*3);return t[e]},whoWins(t,e){return t===e?"empataste":t==="piedra"&&e==="tijera"||t==="papel"&&e==="piedra"||t==="tijera"&&e==="papel"?"ganaste":"perdiste"}};function b(t){const e=document.createElement("div"),a=new URL("/assets/piedra-DuFYeu0w.svg",import.meta.url).href,o=new URL("/assets/papel-BxPnimu3.svg",import.meta.url).href,n=new URL("/assets/tijera-D13S6w_M.svg",import.meta.url).href;e.className="play-page",e.innerHTML=`
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
            <img src="${o}" class="hand-img" data-move="papel" alt="Papel">
            <span class ="play-text">Papel</span>
            </div>
            
            <!--contenedor de tijera-->
            <div class = "container-hand-paper">
            <img src="${n}" class="hand-img" data-move="tijera" alt="Tijera">
            <span class ="play-text">Tijera</span>
            </div>
        </div>
    `;const s=e.querySelector(".hands-title"),r=e.querySelector(".play-page__content"),i=e.querySelector(".hands-container");return e.querySelectorAll(".hand-img").forEach(u=>{u.addEventListener("click",d=>{const m=d.target.dataset.move;console.log("El usuario eligió:",m),i&&s&&(i.style.display="none",s.style.display="none");const g=document.createElement("my-contador");r?.appendChild(g),g.addEventListener("countdown-finished",()=>{console.log("¡El tiempo ha terminado! Es hora de mostrar los resultados."),c.setMove(m),t.goTo("/result")})})}),e}function v(t){const e=c.getState().currentGame.userMove,a=c.getState().currentGame.computerMove,o=c.getState().history.user,n=c.getState().history.computer,s=c.whoWins(e,a),r=document.createElement("div");let i="color:white;";s==="ganaste"?i=`
        color:green;
        text-shadow: 0 0 10px rgba(255, 0, 0, 0.4);
        `:s==="perdiste"&&(i=`
        color:red;
        text-shadow: 0 0 10px rgba(0, 255, 0, 0.4);
        `),r.className="result-page",r.innerHTML=`
        <style>
            .result-page-title{
                ${i}
            }
        </style>
        <div class="result-page-container">
            <h1 class ="result-page-title">${s}</h1>

            <p class="result-page-paragran">
                <span> ${e}</span> VS 
                <span> ${a}</span>
            </p>
            <section class="result-page-section"> 
                <span> Jugador: ${o}  </span>
                <span> Computadora: ${n} </span>
            </section>
           
            <my-button id="play" class="blue" destino="play">Volver a Jugar!</my-button>
            <my-button id="menu" destino="welcome" >Menu</my-button>
        
        </div>
    `;const p=r.querySelector("#play"),u=r.querySelector("#menu");return p&&p.addEventListener("navigate",d=>{const l=d.detail.to;console.log(l),t.goTo(`/${l}`)}),u&&u.addEventListener("navigate",d=>{const l=d.detail.to;console.log(l),t.goTo(`/${l}`)}),r}const w=[{path:/\/welcome/,component:h},{path:/\/rules/,component:f},{path:/\/inicio/,component:y},{path:/\/play/,component:b},{path:/\/result/,component:v}];function L(t){function e(o){history.pushState({},"",o),a(o)}function a(o){for(const n of w)if(n.path.test(o)){const s=n.component({goTo:e});t.firstChild&&t.firstChild.remove(),t.appendChild(s)}}location.pathname==="/"?e("/welcome"):a(location.pathname),window.addEventListener("popstate",()=>a(location.pathname))}function E(){class t extends HTMLElement{shadow=this.attachShadow({mode:"open"});static get observedAttributes(){return["destino","class"]}constructor(){super()}connectedCallback(){const a=this.getAttribute("class");this.render(a)}render(a){let o=" background: white; border: solid 3px #000; color:#000;",n=`
                 background: #fff ;
                 box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            `;a==="blue"&&(o=`
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
                        ${o}
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
            `;const s=this.shadow.querySelector("button");s&&s.addEventListener("click",this.handleClick.bind(this))}handleClick(){const a=this.getAttribute("destino");if(a){const o=new CustomEvent("navigate",{detail:{to:a}});this.dispatchEvent(o)}}}customElements.define("my-button",t)}function S(){class t extends HTMLElement{shadow=this.attachShadow({mode:"open"});constructor(){super()}connectedCallback(){this.render(),this.startCountdown()}startCountdown(){const a=this.shadow.querySelector(".contador-text");let o=3;if(a){a.textContent=o.toString();const n=setInterval(()=>{o--,a.textContent=o.toString(),o<=0&&(clearInterval(n),this.dispatchEvent(new CustomEvent("countdown-finished")))},1e3)}}render(){this.shadow.innerHTML=`
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
