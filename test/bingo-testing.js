

let throwNumbers = [];
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

console.log(userCardboard[0].Value);
console.log(userCardboard[1].Value);
console.log(userCardboard[2].Value);
console.log(userCardboard[3].Value);
console.log(userCardboard[4].Value);
// console.log(`${userCardboard[0].Value[0]}\t${userCardboard[1].Value[0]}\t${userCardboard[2].Value[0]}\t${userCardboard[3].Value[0]}\t${userCardboard[4].Value[0]}`);
// console.log(`${userCardboard[0].Value[1]}\t${userCardboard[1].Value[1]}\t${userCardboard[2].Value[1]}\t${userCardboard[3].Value[1]}\t${userCardboard[4].Value[1]}`);
// console.log(`${userCardboard[0].Value[2]}\t${userCardboard[1].Value[2]}\t${userCardboard[2].Value[2]}\t${userCardboard[3].Value[2]}\t${userCardboard[4].Value[2]}`);
// console.log(`${userCardboard[0].Value[3]}\t${userCardboard[1].Value[3]}\t${userCardboard[2].Value[3]}\t${userCardboard[3].Value[3]}\t${userCardboard[4].Value[3]}`);
// console.log(`${userCardboard[0].Value[4]}\t${userCardboard[1].Value[4]}\t${userCardboard[2].Value[4]}\t${userCardboard[3].Value[4]}\t${userCardboard[4].Value[4]}`);



let line1 = userCardboard[0].Value.map(newAr => newAr) 
let line2 = userCardboard[1].Value.map(newAr => newAr)
let line3 = userCardboard[2].Value.map(newAr => newAr)
let line4 = userCardboard[3].Value.map(newAr => newAr)
let line5 = userCardboard[4].Value.map(newAr => newAr)

const newDisplay = () => {
 


return "hello"
}

console.log(newDisplay());


const ballDispenserTest = () => {
    let getLetter = generateRandomNumber(0, 4)
    let getNumber = generateRandomNumber(userCardboard[getLetter].RangeOfNumbers[1], userCardboard[getLetter].RangeOfNumbers[0]);
    let checkedNumber = userCardboard[getLetter].letter + "-" + getNumber
    if (throwNumbers.indexOf(checkedNumber) === -1) {
        throwNumbers.push(checkedNumber)
    } else ballDispenserTest()
}
console.log(throwNumbers.length);



ballDispenserTest()
ballDispenserTest()
ballDispenserTest()
ballDispenserTest()
ballDispenserTest()
ballDispenserTest()
ballDispenserTest()
ballDispenserTest()
ballDispenserTest()
ballDispenserTest()
ballDispenserTest()
ballDispenserTest()
ballDispenserTest()
ballDispenserTest()
ballDispenserTest()
ballDispenserTest()
ballDispenserTest()
ballDispenserTest()
ballDispenserTest()
ballDispenserTest()
ballDispenserTest()
ballDispenserTest()
ballDispenserTest()
ballDispenserTest()
ballDispenserTest()
ballDispenserTest()
ballDispenserTest()
ballDispenserTest()
ballDispenserTest()
ballDispenserTest()
ballDispenserTest()
ballDispenserTest()
ballDispenserTest()
ballDispenserTest()
ballDispenserTest()
ballDispenserTest()
ballDispenserTest()
ballDispenserTest()
ballDispenserTest()
ballDispenserTest()
ballDispenserTest()
ballDispenserTest()
ballDispenserTest()
ballDispenserTest()
ballDispenserTest()
ballDispenserTest()
ballDispenserTest()
ballDispenserTest()
ballDispenserTest()
ballDispenserTest()
ballDispenserTest()
ballDispenserTest()
ballDispenserTest()
ballDispenserTest()
ballDispenserTest()
ballDispenserTest()
ballDispenserTest()
ballDispenserTest()
ballDispenserTest()
ballDispenserTest()
ballDispenserTest()
ballDispenserTest()
ballDispenserTest()
ballDispenserTest()
ballDispenserTest()
ballDispenserTest()
ballDispenserTest()
ballDispenserTest()
ballDispenserTest()
ballDispenserTest()
ballDispenserTest()
ballDispenserTest()
ballDispenserTest()
ballDispenserTest()
ballDispenserTest()
ballDispenserTest()
ballDispenserTest()
ballDispenserTest()
ballDispenserTest()
ballDispenserTest()
ballDispenserTest()
ballDispenserTest()
ballDispenserTest()
ballDispenserTest()
ballDispenserTest()
ballDispenserTest()
ballDispenserTest()
ballDispenserTest()
ballDispenserTest()
ballDispenserTest()
console.log(throwNumbers.length);



console.log(throwNumbers);






























































