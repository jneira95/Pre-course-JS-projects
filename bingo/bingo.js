/* BINGO GAME! */

const bingo = () => {
    let userName;
    let userPlaying = false;
    let userTurns = 0;
    let lineMatch = false
    let bingoMatch = false
    let newDisplay = [[], [], []];
    let lines = [[], [], []];
    let ballDispenserNumbers = [];
    let cardBoard = [
        { RangeOfNumbers: [1, 9], Value: [] },
        { RangeOfNumbers: [10, 19], Value: [] },
        { RangeOfNumbers: [20, 29], Value: [] },
        { RangeOfNumbers: [30, 39], Value: [] },
        { RangeOfNumbers: [40, 49], Value: [] },
        { RangeOfNumbers: [50, 59], Value: [] },
        { RangeOfNumbers: [60, 69], Value: [] },
        { RangeOfNumbers: [70, 79], Value: [] },
        { RangeOfNumbers: [80, 90], Value: [] },
    ];

    const wellcome = () => {
        do {
            userName = prompt("Bienvenido a BINGO GAME! \nInserte su nombre para comenzar a jugar!");
        } while (isFinite(userName) || userName == null);

        const startGame = confirm(`Bienvenido ${userName}! \nListo para jugar?`);
        if (startGame === true) mainMenuGame();
        else console.log("Vuelve pronto!");
    }

    const mainMenuGame = () => {
        const userOption = prompt("1- Comenzar \n2- ¿Como jugar? \n3- Salir");
        switch (userOption) {
            case "1":
               secondMenuGame();
                break;
            case "2":
                alert("Bienvenido a BINGO GAME! \nEl juego es muy sencillo, iran saliendo numeros aleatorios de nuestra bola virtual. \nGana quien complete el tablero en la menor cantidad de turnos. \nCompletar la primera linea, resta 5 puntos a tu contador de turnos! \nSe podran visualizar todas las bolas que vayan saliendo a lo largo del juego. \nDicho esto! a JUGAR!");
                mainMenuGame();
                break;
            case "3":
                console.log(`Gracias por jugar ${userName}, vuelve pronto!`);
                break;
            default:
                alert("Introduce una de las opciones disponibles");
                mainMenuGame();
        }
    }

    const secondMenuGame = () => {
        const userOption = prompt("1- Generar nuevo carton! \n2- Vamos a jugar! \n3- Atras");
        switch (userOption) {
            case "1":
                clearStoredData();
                cleanCardBoard();
                generateNewCardboard();
                showCardBoard();
                break;
            case "2":
                if (cardBoard[0].Value.length === 0) {
                    generateBallDispenser();
                    generateNewCardboard();
                    showCardBoard();
                    playingTheGame();
                } else {
                    clearStoredData();
                    generateBallDispenser()
                    playingMenuGame();
                }
                break;
            case "3":
                mainMenuGame();
                break;
            default:
                alert("Introduce una de las opciones disponibles");
                secondMenuGame();
        }
    }

    const playingMenuGame = () => {
        alert("Listos para jugar! \nPara sacar un numero, simplemente dale a Aceptar en cada turno, \nde lo contrario dale a Cancelar para volver al menu principal");
        userPlaying = true;
        do {
            const playingCheck = confirm("Sacar Numero!");
            switch (playingCheck) {
                case true:
                    playingTheGame();
                    break;
                case false:
                    userPlaying = false;
                    console.clear();
                    cleanCardBoard();
                    break;
            }
        } while (userPlaying === true);
        secondMenuGame();
    }

    const clearStoredData = () => {
        // userPlaying = false;
        userTurns = 0;
        lineMatch = false;
        bingoMatch = false;
        ballDispenserNumbers = [];
        // newDisplay = [[], [], []];
        lines = [[], [], []];
    }

    const cleanCardBoard = () => {
        for (let x = 0; x < cardBoard.length; x++) {
            cardBoard[x].Value = [];
            cardBoard[x].MatchLine = false;
        }
        newDisplay = [[], [], []];
    }

    const generateBallDispenser = () => {
        for (let x = 1; x <= 90 ; x++) {
            ballDispenserNumbers.push(x)
        }
    }
    
    const generateNewCardboard = () => {
        for (let x = 0; x < cardBoard.length; x++) {
            while (cardBoard[x].Value.length < 3) {
                let num = generateRandomNumber(cardBoard[x].RangeOfNumbers[0], cardBoard[x].RangeOfNumbers[1]);
                if (cardBoard[x].Value.indexOf(num) === -1) cardBoard[x].Value.push(num);
                else continue;
            }
        }
        for (let x = 0; x < cardBoard.length; x++) {
            for (let z = 0; z < cardBoard[x].Value.length; z++) {
                newDisplay[z].push(cardBoard[x].Value[z]);
            }
        }
        let n;
        for (let x = 0; x < 3; x++) {
            n = 0;
            while (n < 4) {
                let randomFillCardBoard = generateRandomNumber(0, 8)
                if (newDisplay[x][randomFillCardBoard] !== `#`) {
                    newDisplay[x].splice(randomFillCardBoard, 1, `#`)
                    n++
                } else continue;
            }
        }
    }
    
    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    
    const showCardBoard = () => {
        console.clear()
        for (let i = 0; i < newDisplay.length; i++) {
            console.log(`\t\t|\t${newDisplay[i].join("\t")}\t|`);
        }
        if (userPlaying === false) secondMenuGame();
    }
    
    const playingTheGame = () => {
        showCardBoard();
        userTurns = userTurns + 1;
        let randomIndexBall = generateRandomNumber(0, ballDispenserNumbers.length - 1);
        let getBall = ballDispenserNumbers[randomIndexBall]
        for (let x = 0; x < newDisplay.length; x++) {
            for (let z = 0; z < newDisplay[x].length; z++) {
                if (newDisplay[x][z] == getBall) {
                    newDisplay[x][z] = "X"
                    lines[x].push("X")
                }
            }
        }
        if (ballDispenserNumbers.length > 0) {
            console.log(`\t\t\tBola N.º: ${ballDispenserNumbers[randomIndexBall]} Turnos: ${userTurns} linea: ${lineMatch ? "Si" : "No"}`);
            ballDispenserNumbers.splice(randomIndexBall, 1);
        }
        if (lineMatch === false) {
            for (let x = 0; x < lines.length; x++) {
                if (lines[x].length == 5) {
                    lineMatch = true;
                    alert("Has conseguido completar una LINEA! \nSe restarán 7 puntos de tu contador de turnos en el proximo turno!");
                }                
            }1
        }
        if (bingoMatch === false) {
            if (lines[0].length == 5 && lines[1].length == 5 && lines[1].length == 5) {
                lineMatch = true;
                alert(`BINGO, Hasta ganado con un total de ${userTurns}`);
                bingoMatch = true;
                userPlaying = false
            }
        }

    }
    wellcome();
}


// bingo()
