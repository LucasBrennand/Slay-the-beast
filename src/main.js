import { homeBtns } from "./ui.js";
import { playerStats, dragonStats } from "./stats.js";
import {
  playerHealth,
  playerMana,
  dragonHealth,
  youLoseBtn,
  youLoseMsg,
  youWinBtn,
  resetGame,
} from "./globals.js";

function main() {
  homeBtns();

  playerHealth.textContent = playerStats.playerMaxHealth;
  playerMana.textContent = playerStats.playerMaxMana;
  dragonHealth.textContent = dragonStats.dragonMaxHealth;

  youLoseBtn.addEventListener("click", () => {
    resetGame();
  });

  youWinBtn.addEventListener("click", () => {
    resetGame()
  })
}

main();
