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
        const userOption = prompt("1- Nuevo Carton \n2- ¿Como jugar? \n3- Salir");
        switch (userOption) {
            /* ///////////////////////////////////////////////////// */
            case "1":
                let z = false;
                    do {
                        const userOption1 = prompt("1-Generar nuevo carton! \n2- Vamos a jugar! \nAtras");
                        z = false
                        switch (userOption1) {
                            case "1":
                                cleanCardboard()
                                generateNewCardboard();
                                showCardBoard()
                                break;
                            case "2":

                                break;
                            case "3":
                                menuGame()
                                break;
                            default:
                                z = true
                                alert("Introduce una de las opciones disponibles")
                        }
                    } while (z);
                break;
            /* ///////////////////////////////////////////////////// */
            case "2":
                console.log("Informacion Adicional");
                break;
            /* ///////////////////////////////////////////////////// */
            case "3":
                console.log("Gracias por jugar, vuelve pronto!");
                break;
            default:
                menuGame();
        }
    }

    const cleanCardboard = () => {
      userCardboard[0].Value      
      userCardboard[1].Value  
      userCardboard[2].Value  
      userCardboard[3].Value  
      userCardboard[4].Value      
    }

    const generateNewCardboard = () => {
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

    const showCardBoard = () => {
        console.log(`${userCardboard[0].Value.join("\t")}`)
        console.log(`${userCardboard[1].Value.join("\t")}`)
        console.log(`${userCardboard[2].Value.join("\t")}`)
        console.log(`${userCardboard[3].Value.join("\t")}`)
        console.log(`${userCardboard[4].Value.join("\t")}`)
    }

    wellcome()
}


// bingo()
