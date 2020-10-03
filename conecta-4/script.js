"use strict";
const gameSetupDisplay = document.getElementById("displayGameSetup");
const playingGameDisplay = document.getElementById("displayPlayingGame");
const firstPlayerName = document.getElementById("playerOne");
const secondPlayerName = document.getElementById("playerTwo");
const startBtn = document.getElementById("startGame");
const pressToPlay = document.getElementById("pressToStart");
const currPlayerSpan = document.querySelectorAll("[data-curr-player]");
const tableSloth = document.querySelectorAll("[data-sloth]");
const tableRow = document.querySelectorAll("[data-row]");
const exitGame = document.getElementById("exit");

/*//////////////////////////////////////////////////////////////////*/

const playerColor = ["rgba(211, 25, 25, 0.824)", "rgba(37, 40, 218, 0.824)"];
const names = [firstPlayerName, secondPlayerName];
let gameStatus = false;
let players = [];
let currentPlayers;

const resetGameOnExit = () => {
  startBtn.setAttribute("disabled", "");
  pressToPlay.textContent = "Press To Start";
  pressToPlay.style.color = "black";
  names.forEach((elem) => {
    elem.value = "";
  });
  tableSloth.forEach((color) => {
    color.style.backgroundColor = "white";
  });
  gameStatus = false;
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
    currPlayerSpan[x].textContent = names[x].value;
    currPlayerSpan[x].style.color = playerColor[x];
  }
  players.push([
    { id: 1, name: names[0].value, color: playerColor[0], status: 0 },
    { id: 2, name: names[1].value, color: playerColor[1], status: 0 },
  ]);
  currentPlayers = players[players.length - 1];
};

const setFirstTurn = () => {
  const randomStart = Math.floor(Math.random() * 2);
  currentPlayers[randomStart].status = 1;
  pressToPlay.textContent = `${currentPlayers[randomStart].name} turn`;
  pressToPlay.style.color = currentPlayers[randomStart].color;
};

const playerTurn = () => {
  for (let x = 0; x < currentPlayers.length; x++) {
    if (currentPlayers[x].status === 1) {
      return currentPlayers[x].color;
    }
  }
};

const nextTurn = () => {
  if (currentPlayers[0].status === 1) {
    currentPlayers[0].status = 0;
    currentPlayers[1].status = 1;
    pressToPlay.textContent = `${currentPlayers[1].name} turn`;
    pressToPlay.style.color = currentPlayers[1].color;
    return;
  }
  if (currentPlayers[1].status === 1) {
    currentPlayers[1].status = 0;
    currentPlayers[0].status = 1;
    pressToPlay.textContent = `${currentPlayers[0].name} turn`;
    pressToPlay.style.color = currentPlayers[0].color;
    return;
  }
};

const isColumnFull = (cell) => {
  if (
    tableRow[0].cells[cell].style.backgroundColor === "rgba(211, 25, 25, 0.824)" ||
    tableRow[0].cells[cell].style.backgroundColor === "rgba(37, 40, 218, 0.824)"
  ) {
    return false
  }
  return true
};

const setPlayerChip = (currCell, currPlayerColor) => {
  nextTurn();
  for (let x = 5; x >= 0; x--) {
    if (
      tableRow[x].cells[currCell].style.backgroundColor === "" ||
      tableRow[x].cells[currCell].style.backgroundColor === "white"
    ) {
      return (tableRow[x].cells[
        currCell
      ].style.backgroundColor = currPlayerColor);
    }
  }
};

const checkHorizontalWin = () => {
  for (let x = tableRow.length - 1; x >= 0; x--) {
    for (let y = 0; y < tableRow[x].cells.length; y++) {
      if (condition) {
      }
    }
  }
};

const checkVerticalWin = () => {};

const checkDiagonalWin1 = () => {};

const checkDiagonalWin2 = () => {};

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
  pressToPlay.textContent = "Press To Start";
  setPlayerNames();
});

pressToPlay.addEventListener("click", () => {
  if (gameStatus === false) {
    gameStatus = true;
    setFirstTurn();
  }
});

tableSloth.forEach((sloth) => {
  sloth.addEventListener("click", function () {
    // const currentRow = this.parentElement.rowIndex
    const currentCell = this.cellIndex;
    if (gameStatus === true && isColumnFull(currentCell)) {
      setPlayerChip(currentCell, playerTurn());
    }
  });
});

exitGame.addEventListener("click", () => {
  playingGameDisplay.style.display = "none";
  gameSetupDisplay.style.display = "block";
  resetGameOnExit();
});

// tableSloth.forEach((sloth) => {
//   sloth.addEventListener("mouseover", function () {
//     if (
//       this.style.backgroundColor === ""
//     ) {
//       this.style.backgroundColor = "black";
//     }
//   });
//   sloth.addEventListener("mouseout", function () {
//     if (
//       this.style.backgroundColor === playerColor[0] ||
//       this.style.backgroundColor === playerColor[1]
//     ) {
//       return;
//     } else {
//       this.style.transition = "all 0.1s ease-out";
//       this.removeAttribute("style")
//     }
//   });
// });
