/* BINGO GAME! */

const bingo = () => {
    let userName;
    let userPoints = 0;
    let userTurns = 0;
    let userCardboard = [
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
        if (startGame === true) menuGame();
        else console.log("Vuelve pronto!");
    }

    const menuGame = () => {
        const userOption = parseInt(prompt("1- Nuevo Carton \n2- ¿Como jugar? \n3- Salir"));
        switch (userOption) {
            case 1:
                let z;
                while (z === true) {
                    const userOption1 = parseInt(prompt("1- No me gusta, dame uno nuevo!, \n2- Este SI! Vamos a jugar"));
                    switch (userOption1) {
                        case 1:
                            getNewCardBoard();
                            break;
                        case 2:

                            break;
                        default:
                            continue;
                    }
                }
                break;
            case 2:

                break;
            case 3:
                console.log("Gracias por jugar, vuelve pronto!");
                break;
            default:
                menuGame();
        }
    }

    const getNewCardBoard = () => {
        for (let i = 0; i < userCardboard.length; i++) {
            while (userCardboard[i].Value.length < 5) {
                let num = generateRandomNumber(userCardboard[i].RangeOfNumbers[1], userCardboard[i].RangeOfNumbers[0]);
                if (userCardboard[i].Value.indexOf(num) === -1) userCardboard[i].Value.push(num);
                else continue;
            }
        }
    }

    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    wellcome()
}


// bingo();
