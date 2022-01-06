import Game from "./Game.js";
import GameView from "./GameView.js";


let game = new Game();
let gameView = new GameView();

const restartBtn = document.querySelector(".restart");

restartBtn.addEventListener("click", () => {
  newGame();
});

const tiles = document.querySelectorAll(".board-tile");
tiles.forEach((tile, idx) => {
  tile.addEventListener("click", (e) => {
    // console.log(tile.dataset.index)
      onTileClick(idx);
  });
});

function onTileClick(idx) {
  // do something
  game.makeMove(idx);
  gameView.updateBoard(game);
}

function newGame() {
  game = new Game();
  gameView.updateBoard(game);

  tiles.forEach((tile) => {
    tile.classList.remove("tile-winner");
  });
}
