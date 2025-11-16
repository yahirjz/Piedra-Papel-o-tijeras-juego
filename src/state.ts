type Move = "piedra" | "papel" | "tijera";
type GameResult = "ganaste" | "perdiste" | "empataste";

type StateData = {
    currentGame: {
        userMove: string;
        computerMove: string;
    };
    history: {
        user: number;
        computer: number;
    };
};

const state ={
    data:{
        currentGame: {
            userMove: "",
            computerMove: ""
        },
        // Obtenemos el historial de localStorage o creamos uno nuevo si no existe.
        history: JSON.parse(localStorage.getItem('jugadas') || '{"user": 0, "computer": 0}')
    } as StateData,
    listeners: [] as (() => void)[],

    //'getState' es el metodo que permite al componentes leer el stado actual
    getState(){
        return  this.data;
    },

    //'setState' es el componenete que permite a los componentes leer el estado actual
    setState(newState: StateData){
        this.data = newState;
        //recorremos el array el array de listeners
        // Guardamos el objeto 'history' en localStorage para persistir la puntuación.
        localStorage.setItem('jugadas', JSON.stringify(newState.history));
        for(const cd of this.listeners){
            cd();
        }
    },

    //'subscribe'  es el metodo que hace los componentes para escuchar y registrar los cambios.
    subscribe(callback: () => void){
        this.listeners.push(callback);
    },

    setMove(move: Move){
        const currentState = this.getState();
        const computerMove = this.getComputerMove();

        currentState.currentGame.userMove = move;
        currentState.currentGame.computerMove = computerMove;

        const result = this.whoWins(move, computerMove);
        if(result === "ganaste"){
            currentState.history.user++;
        }else if(result === "perdiste"){
            currentState.history.computer++;
        }

        this.setState(currentState);
    },

    getComputerMove(){
        const moves: Move[] = ["piedra", "papel", "tijera"];
        const randomIndex = Math.floor(Math.random() * 3);
        return moves[randomIndex];
    },

    whoWins(userMove: Move, computerMove: Move): GameResult {
        if(userMove === computerMove){
            
            return "empataste"
        }
        if(
            (userMove === "piedra" && computerMove === "tijera") ||
            (userMove === "papel" && computerMove === "piedra") ||
            (userMove === "tijera" && computerMove === "papel") 
        ){
            return "ganaste"
        }
        return "perdiste"
    }

}

export{state};