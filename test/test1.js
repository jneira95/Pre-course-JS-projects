let rowPlayerOne = [];
let rowPlayerTwo = [];
for (let x = tableRow.length - 1; x >= 0; x--) {
  console.log(rowPlayerOne, rowPlayerTwo);
  if (rowPlayerOne.length === 3) console.log("Win1");
  if (rowPlayerTwo.length === 3) console.log("Win2");
  rowPlayerOne, (rowPlayerTwo = []);
  for (let y = 0; y < tableRow[x].cells.length; y++) {
    if (
      tableRow[x].cells[y].style.backgroundColor ===
        currentPlayers[0].color &&
      tableRow[x].cells[y + 1].style.backgroundColor ===
        currentPlayers[0].color
    ) {
      rowPlayerOne.push(currentPlayers[0].color);
    }
    if (
      tableRow[x].cells[y].style.backgroundColor ===
        currentPlayers[1].color &&
      tableRow[x].cells[y + 1].style.backgroundColor ===
        currentPlayers[1].color
    ) {
      rowPlayerTwo.push(currentPlayers[1].color);
    }
  }
}
