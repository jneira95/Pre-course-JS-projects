/* BINGO GAME! */

const bingo = () => {
    let userName;
    let userPlaying = false;
    let userTurns = 0;
    let line = "No"
    let newDisplay = [[], [], []];
    let ballDispenserNumbers = [];
    let cardBoard = [
        { RangeOfNumbers: [1, 9], Value: [], MatchLine: false},
        { RangeOfNumbers: [10, 19], Value: [], MatchLine: false},
        { RangeOfNumbers: [20, 29], Value: [], MatchLine: false },
        { RangeOfNumbers: [30, 39], Value: [], MatchLine: false },
        { RangeOfNumbers: [40, 49], Value: [], MatchLine: false },
        { RangeOfNumbers: [50, 59], Value: [], MatchLine: false },
        { RangeOfNumbers: [60, 69], Value: [], MatchLine: false },
        { RangeOfNumbers: [70, 79], Value: [], MatchLine: false },
        { RangeOfNumbers: [80, 90], Value: [], MatchLine: false },
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
                clearStoredData(), cleanCardBoard();
                generateNewCardboard();
                showCardBoard();
                break;
            case "2":
                playingMenuGame();
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
        newDisplay = [[], [], []];
    }

    const cleanCardBoard = () => {
        for (let x = 0; x < cardBoard.length; x++) {
            cardBoard[x].Value = [];
            cardBoard[x].MatchLine = false;
        }
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
        for (let x = 0; x < 3; x++) {
            for (let z = 0; z < 4; z++) {
                let randomFillCardBoard = generateRandomNumber(0, 8)
                newDisplay[x][randomFillCardBoard] = "#";
            }
        }

    }
    
    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    
    const showCardBoard = () => {
        console.clear()

        for (let i = 0; i < newDisplay.length; i++) {
            console.log(`\t\t|\t${newDisplay[i].join("\t\t")}\t|`);
        }
        if (userPlaying === false) secondMenuGame();
    }
    
    const playingTheGame = () => {
        clearStoredData();
        showCardBoard();
        userTurns = userTurns + 1;
        let randomBall = generateRandomNumber(0, ballDispenserNumbers.length -1);
        let matchNumber
        if (ballDispenserNumbers.length > 0) {
            matchNumber = ballDispenserNumbers[randomBall].replace(/\D/g, '');
            console.log(`\t\t\tBola N.º: ${ballDispenserNumbers[randomBall]} Turnos: ${userTurns} linea: ${line}`);
            ballDispenserNumbers.splice(randomBall, 1);
        }
        for (let x = 0; x < cardBoard.length; x++) {
            for (let z = 0; z < cardBoard[x].Value.length; z++) {
                if (cardBoard[x].Value[z] == matchNumber) cardBoard[x].Value[z] = "X";
            }            
        }
    }
    
    generateBallDispenser();
    wellcome();
}


// bingo()
