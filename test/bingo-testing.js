

let ballDispenserNumbers = [];
let num = 0;
let userCardboard = [
    { RangeOfNumbers: [1, 20], Value: [], MatchLine: false, letter: "B" },
    { RangeOfNumbers: [21, 40], Value: [], MatchLine: false, letter: "I" },
    { RangeOfNumbers: [41, 60], Value: [], MatchLine: false, letter: "N" },
    { RangeOfNumbers: [61, 80], Value: [], MatchLine: false, letter: "G" },
    { RangeOfNumbers: [81, 100], Value: [], MatchLine: false, letter: "O" },
];

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
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

generateNewCardboard()

let line1 = userCardboard[0].Value.map(newAr => newAr) 
let line2 = userCardboard[1].Value.map(newAr => newAr)
let line3 = userCardboard[2].Value.map(newAr => newAr)
let line4 = userCardboard[3].Value.map(newAr => newAr)
let line5 = userCardboard[4].Value.map(newAr => newAr)

const generateBallDispenser = () => {
    for (let i = 0; i < userCardboard.length; i++) {
        for (let o = userCardboard[i].RangeOfNumbers[0]; o <= userCardboard[i].RangeOfNumbers[1]; o++) {
            ballDispenserNumbers.push(userCardboard[i].letter + "-" + o)
        }
    }
}

generateBallDispenser()
console.log(ballDispenserNumbers);






















































