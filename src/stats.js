import {
  dragonHealth,
  playerHealth,
  playerMana,
  youLoseMsg,
} from "./globals.js";
import { playerHealthBar, playerManaBar, dragonHealthBar } from "./ui.js";

export const playerStats = {
  playerCurrentHealth: 200,
  playerCurrentMana: 150,
  playerMaxHealth: 200,
  playerMaxMana: 150,
  playerHealthPots: 2,
  playerManaPots: 2,
  playerFullHealPot: 1,
};

export const dragonStats = {
  dragonCurrentHealth: 250,
  dragonMaxHealth: 250,
  dragonHardenedSkin: false,
  dragonHardenedSkinDuration: 0,
};

export const updateDragonHealth = (modifier) => {
  dragonStats.dragonCurrentHealth += modifier;

  if (
    dragonStats.dragonHardenedSkin &&
    dragonStats.dragonHardenedSkinDuration !== 0
  ) {
    dragonStats.dragonCurrentHealth += 20;
    dragonStats.dragonHardenedSkinDuration--;
  }

  if (dragonStats.dragonCurrentHealth > dragonStats.dragonMaxHealth) {
    dragonStats.dragonCurrentHealth = dragonStats.dragonMaxHealth;
  }
  if (dragonStats.dragonCurrentHealth <= 0) {
    dragonStats.dragonCurrentHealth = 0;
    alert("The dragon was defeated!");
  }

  const percentage =
    (dragonStats.dragonCurrentHealth / dragonStats.dragonMaxHealth) * 100;

  dragonHealthBar.style.width = `${percentage}%`;

  dragonHealth.textContent = dragonStats.dragonCurrentHealth;
};

export const updatePlayerHealth = (modifier) => {
  playerStats.playerCurrentHealth += modifier;

  if (playerStats.playerCurrentHealth >= playerStats.playerMaxHealth) {
    playerStats.playerCurrentHealth = playerStats.playerMaxHealth;
    playerHealthBar.style.width = `100%`;
  }
  if (
    playerStats.playerCurrentHealth < 0 ||
    playerStats.playerCurrentHealth === 0
  ) {
    playerStats.playerCurrentHealth = 0;
    youLoseMsg.style.display = "flex";
  }

  const percentage =
    (playerStats.playerCurrentHealth / playerStats.playerMaxHealth) * 100;
  playerHealthBar.style.width = `${percentage}%`;

  playerHealth.textContent = playerStats.playerCurrentHealth;
};

export const updatePlayerMana = (modifier) => {
  playerStats.playerCurrentMana += modifier;

  if (playerStats.playerCurrentMana >= playerStats.playerMaxMana) {
    playerStats.playerCurrentMana = playerStats.playerMaxMana;
    playerManaBar.style.width = `100%`;
  }
  if (
    playerStats.playerCurrentMana < 0 ||
    playerStats.playerCurrentMana === 0
  ) {
    playerStats.playerCurrentMana = 0;
    playerManaBar.style.width = `0%`;
  }

  const percentage =
    (playerStats.playerCurrentMana / playerStats.playerMaxMana) * 100;
  playerManaBar.style.width = `${percentage}%`;

  playerMana.textContent = playerStats.playerCurrentMana;
};
