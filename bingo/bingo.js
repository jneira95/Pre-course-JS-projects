/* BINGO GAME! */

const bingo = () => {
    let userName;
    let userPlaying = false;
    let userPoints = 0;
    let userTurns = 0;
    let ballDispenserNumbers = [];
    let cardBoard = [
        { RangeOfNumbers: [1, 20], Value: [], MatchLine: false, letter: "B" },
        { RangeOfNumbers: [21, 40], Value: [], MatchLine: false, letter: "I" },
        { RangeOfNumbers: [41, 60], Value: [], MatchLine: false, letter: "N" },
        { RangeOfNumbers: [61, 80], Value: [], MatchLine: false, letter: "G" },
        { RangeOfNumbers: [81, 100], Value: [], MatchLine: false, letter: "O" },
    ];
    console.log(ballDispenserNumbers);

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
               secondMenuGame()
                break;
            case "2":
                alert("Bienvenido a BINGO GAME! \nEl juego es muy sencillo, iran saliendo numeros aleatorios de nuestra bola virtual. \nGana quien complete el tablero en la menor cantidad de turnos. \nCompletar la primera linea, resta 5 puntos a tu contador de turnos! \nSe podran visualizar todas las bolas que vayan saliendo a lo largo del juego. \nDicho esto! a JUGAR!");
                mainMenuGame()
                break;
            case "3":
                console.log(`Gracias por jugar ${userName}, vuelve pronto!`);
                break;
            default:
                alert("Introduce una de las opciones disponibles")
                mainMenuGame();
        }
    }

    const secondMenuGame = () => {
        const userOption = prompt("1- Generar nuevo carton! \n2- Vamos a jugar! \n3- Atras");
        switch (userOption) {
            case "1":
                cleanCardboard()
                generateNewCardboard();
                showCardBoard()
                break;
            case "2":
                
                break;
            case "3":
                mainMenuGame()
                break;
            default:
                alert("Introduce una de las opciones disponibles")
                secondMenuGame()
        }
    }

    const cleanCardboard = () => {
        cardBoard[0].Value = [];
        cardBoard[0].MatchLine = false;              
        cardBoard[1].Value = [];
        cardBoard[1].MatchLine = false;     
        cardBoard[2].Value = [];
        cardBoard[2].MatchLine = false;     
        cardBoard[3].Value = [];
        cardBoard[3].MatchLine = false;     
        cardBoard[4].Value = [];
        cardBoard[4].MatchLine = false;             
    }

    const generateBallDispenser = () => {
        for (let i = 0; i < cardBoard.length; i++) {
            for (let o = cardBoard[i].RangeOfNumbers[0]; o <= cardBoard[i].RangeOfNumbers[1]; o++) {
                ballDispenserNumbers.push(cardBoard[i].letter + "-" + o)
            }
        }
    }

    const generateNewCardboard = () => {
        for (let i = 0; i < cardBoard.length; i++) {
            while (cardBoard[i].Value.length < 5) {
                let num = generateRandomNumber(cardBoard[i].RangeOfNumbers[1], cardBoard[i].RangeOfNumbers[0]);
                if (cardBoard[i].Value.indexOf(num) === -1) cardBoard[i].Value.push(num);
                else continue;
            }
        }
    }


    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const showCardBoard = () => {
        console.clear()
        let bingoName = cardBoard.map(function(letter) {
            return letter.letter;
        })
        console.log(`\t\t${bingoName.join("\t\t")}`);
        for (let x = 0; x < 5; x++) {
            console.log(`\t\t${cardBoard[x].Value.join("\t\t")}`);
        }
        if (userPlaying === false) secondMenuGame();
    }

    const showCardBoardOnPlay = () => {
        showCardBoard()
    }

    wellcome();
    generateBallDispenser();
}


// bingo()
