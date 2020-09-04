

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

const newDisplay = () => {
return "hello"
}
let counter = []
for (let z = 1; z <= 100; z++) {
    counter.push(z)
}
console.log(counter);

let testnum = []
const generateBallDispenser = () => {
    for (let i = 0; i < userCardboard.length; i++) {
        for (let o = userCardboard[i].RangeOfNumbers[0]; o <= userCardboard[i].RangeOfNumbers[1]; o++) {
            ballDispenserNumbers.push(userCardboard[i].letter + "-" + o)
        }
    }
}

generateBallDispenser()
console.log(ballDispenserNumbers);


const ballDispenserTest = () => {
    let getLetter = generateRandomNumber(0, 4)
    let getNumber = generateRandomNumber(userCardboard[getLetter].RangeOfNumbers[1], userCardboard[getLetter].RangeOfNumbers[0]);
    let checkedNumber = userCardboard[getLetter].letter + "-" + getNumber

    if (throwNumbers.indexOf(checkedNumber) === -1) {
        throwNumbers.push(checkedNumber)
    } else ballDispenserTest()
}


























































