"use strict";
const gameSetupDisplay = document.getElementById("displayGameSetup");
const playingGameDisplay = document.getElementById("displayPlayingGame");

const firstPlayerName = document.getElementById("playerOne");
const secondPlayerName = document.getElementById("playerTwo");
const startBtn = document.getElementById("startGame");

const currPlayer = document.querySelectorAll("[data-curr-player]");

const tableSloth = document.querySelectorAll("[data-sloth]");
const tableRow = document.querySelectorAll("[data-row]");

const exitGame = document.getElementById("exit");

/*//////////////////////////////////////////////////////////////////*/

const names = [firstPlayerName, secondPlayerName];
const playerColor = ["rgba(211, 25, 25, 0.822)", "rgba(37, 40, 218, 0.822)"];
let players = [];
let currentPlayers;


const resetGame = () => {
  startBtn.setAttribute("disabled", "");
  names.forEach((elem) => {
    elem.value = "";
  });
};

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
};

const setPlayerNames = () => {
  for (let x = 0; x < names.length; x++) {
    currPlayer[x].textContent = names[x].value;
    currPlayer[x].style.color = playerColor[x];
  }
  players.push([
    { id: 1, name: names[0].value, color: playerColor[0] },
    { id: 2, name: names[1].value, color: playerColor[1] },
  ]);
  currentPlayers = [players[players.length - 1]];
};

const playerTurn = () => {};

const setPlayerChip = (currCell) => {
  for (let x = 5; x >= 0; x--) {
    if (
      tableRow[x].cells[currCell].style.backgroundColor === "" ||
      tableRow[x].cells[currCell].style.backgroundColor === "white"
    ) {
      return (tableRow[x].cells[currCell].style.backgroundColor =
        "rgba(211, 25, 25, 0.822)");
    }
  }
};

/*//////////////////////////////////////////////////////////////////*/

names.forEach((elem) => {
  elem.addEventListener("keyup", (event) => {
    const key = event.key;
    checkGameSetup(key);
  });
});

startBtn.addEventListener("click", () => {
  gameSetupDisplay.style.display = "none";
  playingGameDisplay.style.display = "flex";
  setPlayerNames();
  playerTurn();
});

exitGame.addEventListener("click", () => {
  playingGameDisplay.style.display = "none";
  gameSetupDisplay.style.display = "block";
  resetGame();
});

tableSloth.forEach((sloth) => {
  sloth.addEventListener("click", function () {
    const currentRow = this.parentElement.rowIndex;
    const currentCell = this.cellIndex;
    setPlayerChip(currentCell);
  });
});

// tableSloth.forEach(sloth => {
//   sloth.addEventListener("mouseover", function () {
//     if (this.style.backgroundColor === "" || this.style.backgroundColor === "white") {
//       this.style.backgroundColor = "green";
//     }
//   });
//   sloth.addEventListener("mouseout", function () {
//     this.style.backgroundColor = "white"
//     this.style.transition = "all 0.1s ease-out";
//   })
// })