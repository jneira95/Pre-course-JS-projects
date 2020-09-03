/* BINGO GAME! */

const bingo = () => {
    let userName;
    let userPoints = 0;
    let userTurns = 0;
    let userCardboard = {
        B: { RangeNumbers: [1, 20], Value: [] },
        I: { RangeNumbers: [21, 40], Value: [] },
        N: { RangeNumbers: [41, 60], Value: [] },
        G: { RangeNumbers: [61, 80], Value: [] },
        O: { RangeNumbers: [81, 100], Value: [] },
    }

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
        const arBingoLetters = ["B", "I", "N", "G", "O"]
        for (let r = 0; r < arBingoLetters.length; r++) {
            for (let c = 0; c < 5; c++) {
                let num = randomIntFromInterval(userCardboard[arBingoLetters[r]].RangeNumbers[0], userCardboard[arBingoLetters[r]].RangeNumbers[1])
                console.log(num);
            }
        }

        function randomIntFromInterval(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }

    }



    wellcome()
}


// bingo();
