'useStrict'
// background-color: rgb(195, 19, 19);

const gameSetupDisplay = document.getElementById("displayGameSetup");
const playingGameDisplay = document.getElementById("displayPlayingGame");

const firstPlayerName = document.getElementById("playerOne");
const secondPlayerName = document.getElementById("playerTwo"); 
const startBtn = document.getElementById("startGame");

const currPlayer = document.querySelectorAll("[data-curr-player]");

const tableSloth = document.querySelectorAll("[data-sloth]")
const tableRow = document.querySelector("[data-row]");

const exitGame = document.getElementById("exit");

/*//////////////////////////////////////////////////////////////////*/

const names = [firstPlayerName, secondPlayerName];
let players = []

const resetGame = () => {
  startBtn.setAttribute("disabled", "");
  names.forEach(elem => {
    elem.value = ""
  })
}

// class Players {
//   constructor(first, second) {
//     return players.push({
//       firstPlayer: first,
//       secondPlayer: second
//     })
//   }
// }

// function getPlayerNames() {
//   names.forEach(elem => {
//     elem.value
//   })
//   const x = firstPlayerName.value
//   const y = secondPlayerName.value
//   // if ()
//   new Players(x, y)
// }

const checkGameSetup = (event) => {
  const key = event;
  const firstName = names[0].value;
  const secondName = names[1].value;
  if (key != "Backspace") {
    if (firstName.length >= 2 && secondName.length >= 2) {
      startBtn.removeAttribute("disabled");
    }
  }
  if (key === "Backspace") {
    if (firstName.length < 2 || secondName.length < 2) {
      startBtn.setAttribute("disabled", "");
    }
  }
}

const setPlayerNames = () => {
  for (let x = 0; x < names.length; x++) {
    currPlayer[x].textContent = names[x].value
  }
}

/*//////////////////////////////////////////////////////////////////*/

names.forEach(elem => {
  elem.addEventListener("keyup", (event) => {
    const key = event.key
    checkGameSetup(key);
  })
});

startBtn.addEventListener("click", () => {
  gameSetupDisplay.style.display = "none";
  playingGameDisplay.style.display = "flex";
  setPlayerNames()
})

exitGame.addEventListener("click", () => {
  playingGameDisplay.style.display = "none";
  gameSetupDisplay.style.display = "block"
  resetGame();
})

tableSloth.forEach(sloth =>  {
  sloth.addEventListener("click", function () {
    console.log(this.parentElement.rowIndex);
    console.log(this.cellIndex);
  })
})