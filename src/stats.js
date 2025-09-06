import { dragonHealth, playerHealth, playerMana, youLoseMsg } from "./globals.js";

export const playerStats = {
  playerCurrentHealth: 100,
  playerCurrentMana: 150,
  playerMaxHealth: 100,
  playerMaxMana: 150,
  playerHealthPots: 2,
  playerManaPots: 2,
  playerFullHealPot: 1
};

export const dragonStats = {
  dragonCurrentHealth: 250,
  dragonMaxHealth: 250,
};

export const updateDragonHealth = (modifier) => {
  dragonStats.dragonCurrentHealth += modifier;
  if (dragonStats.dragonCurrentHealth <= 0) {
    dragonStats.dragonCurrentHealth = 0;
    alert("The dragon was defeated!");
  }
  dragonHealth.textContent = dragonStats.dragonCurrentHealth;
};

export const updatePlayerHealth = (modifier) => {
  playerStats.playerCurrentHealth += modifier;
  if (playerStats.playerCurrentHealth <= 0) {
    playerStats.playerCurrentHealth = 0;
    youLoseMsg.style.display = "flex";
  }
  playerHealth.textContent = playerStats.playerCurrentHealth;
};

export const updatePlayerMana = (modifier) => {
  playerStats.playerCurrentMana += modifier;
  if (playerStats.playerCurrentMana <= 0) {
    playerStats.playerCurrentMana = 0;
  }
  playerMana.textContent = playerStats.playerCurrentMana;
};
