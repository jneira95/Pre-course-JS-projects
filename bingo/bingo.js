/* BINGO GAME! */

const bingo = () => {
    let userName;
    let userPlaying = false;
    let userPoints = 0;
    let userTurns = 0;
    let bingo = ["B", "I", "N", "G", "O"];
    let cardBoard = [
        { RangeOfNumbers: [1, 20], Value: [], MatchLine: false },
        { RangeOfNumbers: [21, 40], Value: [], MatchLine: false },
        { RangeOfNumbers: [41, 60], Value: [], MatchLine: false },
        { RangeOfNumbers: [61, 80], Value: [], MatchLine: false },
        { RangeOfNumbers: [81, 100], Value: [], MatchLine: false },
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
               secondMenuGame()
                break;
            case "2":
                alert("Bienvenido a BINGO GAME! \nEl juego es muy sencillo, ");
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
        console.log(`\t\t${bingo.join("\t\t")}`);
        for (let x = 0; x < 5; x++) {
            console.log(`\t\t${cardBoard[x].Value.join("\t\t")}`);
        }
        if (userPlaying === false) secondMenuGame();
    }

    const showCardBoardOnPlay = () => {
        showCardBoard()
    }

    wellcome()
}


// bingo()
