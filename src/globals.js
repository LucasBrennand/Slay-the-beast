import * as dragon from "./dragon.js";
import { dragonAttack } from "./dragon.js";
import { playerStats, dragonStats } from "./stats.js";
import {
  homeBtns,
  playerHealthBar,
  playerManaBar,
  dragonHealthBar,
} from "./ui.js";

export const playerUIContainer = document.getElementById("player-ui-container");
export const playersBtnsContainer = document.querySelector(
  "#players-btns-container"
);
export const dragonHealth = document.querySelector("#dragon-health");
export const playerHealth = document.querySelector("#player-health");
export const playerMana = document.querySelector("#player-mana");
export const textContainer = document.querySelector("#text-container");
export const youLoseMsg = document.querySelector(".you-lose");
export const youWinMsg = document.querySelector(".you-win");
export const youLoseBtn = document.querySelector("#you-lose-btn");
export const youWinBtn = document.querySelector("#you-win-btn");

export const gameState = {
  gameIsActive: true,
  isPlayerTurn: true,
  isDragonTurn: false,
  currentTurn: 0,
};

export const setTurns = (player, dragon) => {
  gameState.isPlayerTurn = player;
  gameState.isDragonTurn = dragon;
};

export const endPlayerTurn = () => {
  setTurns(false, true);
  gameState.currentTurn++;
  setTimeout(() => {dragonAttack()}, 1000);
}

export const resetGame = () => {
  try {
    playerStats.playerCurrentHealth = playerStats.playerMaxHealth;
    playerStats.playerCurrentMana = playerStats.playerMaxMana;
    dragonStats.dragonCurrentHealth = dragonStats.dragonMaxHealth;
    playerHealth.textContent = playerStats.playerMaxHealth;
    playerMana.textContent = playerStats.playerMaxMana;
    playerStats.playerFullHealPot = 1;
    playerStats.playerHealthPots = 2;
    playerStats.playerManaPots = 2;
    playerHealthBar.style.width = "100%";
    playerManaBar.style.width = "100%";
    dragonHealthBar.style.width = "100%";
    dragonHealth.textContent = dragonStats.dragonMaxHealth;
    dragonStats.dragonHardenedSkin = false;
    gameState.gameIsActive = true;
    gameState.isPlayerTurn = true;
    gameState.isDragonTurn = false;
    youLoseMsg.style.display = "none";
    youWinMsg.style.display = "none"
    textContainer.innerHTML = "";
    homeBtns();
  } catch (error) {
    console.error(error);
  }
};
