import "./rules.css";
export function initRules(params: { goTo: (path: string) => void }){
    const rules = document.createElement('div')
    const rulesImg = new URL("../../img/reglas.png", import.meta.url).href;
    rules.className = "rules-page";
    rules.innerHTML =`
        <h1 class="rules-page-title">Reglas</h1>
           <img src="${rulesImg}" class="rules-page-img" alt="reglas">
            <p class="rules-page-paragran"> Las reglas son simples</p>
           <ol class="rules-page-orderlist">
                <li>El <b> Papel</b> le gana a la <b>Roca</b></li>
                <li>La <b>Roca</b> le gana a las <b>Tijeras</b></li>
                <li>Las <b>Tijeras</b> le gana al <b>Papel</b></li>
           </ol>
           
        <my-button destino="welcome">Menu</my-button>
    `
    const btnRulesMenu = rules.querySelector('my-button');
    if(btnRulesMenu){
        btnRulesMenu.addEventListener('navigate', (e: any)=>{
            const path = e.detail.to;
            console.log(path)
            params.goTo(`/${path}`);
        })
    }
    return rules;
}