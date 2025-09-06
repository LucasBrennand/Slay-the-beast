import * as dragon from "./dragon.js";
import { playerStats, dragonStats } from "./stats.js";
import { homeBtns } from "./ui.js";

export const playerUIContainer = document.getElementById("player-ui-container");
export const playersBtnsContainer = document.querySelector(
  "#players-btns-container"
);
export const dragonHealth = document.querySelector("#dragon-health");
export const playerHealth = document.querySelector("#player-health");
export const playerMana = document.querySelector("#player-mana");
export const textContainer = document.querySelector("#text-container");
export const youLoseMsg = document.querySelector(".you-lose");
export const youLoseBtn = document.querySelector("#you-lose-btn");

export let gameIsActive = true;
export let isPlayerTurn = true;
export let isDragonTurn = false;

export const setTurns = (player, dragon) => {
  isPlayerTurn = player;
  isDragonTurn = dragon;
};

export const resetGame = () => {
  playerStats.playerCurrentHealth = playerStats.playerMaxHealth;
  playerStats.playerCurrentMana = playerStats.playerMaxMana;
  dragonStats.dragonCurrentHealth = dragonStats.dragonMaxHealth;
  playerHealth.textContent = playerStats.playerMaxHealth;
  playerMana.textContent = playerStats.playerMaxMana;
  dragonHealth.textContent = dragonStats.dragonMaxHealth;
  gameIsActive = true;
  isPlayerTurn = true;
  isDragonTurn = false;
  youLoseMsg.style.display = "none";
  textContainer.innerHTML = "";
  homeBtns();
};
