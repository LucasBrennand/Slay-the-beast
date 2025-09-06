import { updateDragonHealth, updatePlayerHealth, updatePlayerMana, playerStats } from "./stats.js";
import { setTurns } from "./globals.js";
import { dragonAttack } from "./dragon.js";

export const attackMove = (option) => {
  switch (option) {
    case "slash":
      updateDragonHealth(-10);
      setTurns(false, true);
      dragonAttack();
      break;
    case "rage":
      updateDragonHealth(-30);
      setTurns(false, true);
      dragonAttack();
      break;
    case "cleave":
      let chance = Math.floor(Math.random() * 10 + 1);
      if (chance > 3) {
        updateDragonHealth(-50);
      }
      setTurns(false, true);
      dragonAttack();
      break;
    default:
      console.log("error");
  }
};

export const itemMove = (option) => {
  switch (option) {
    case "Health Pot":
      updatePlayerHealth(20);
      setTurns(false, true);
      dragonAttack();
      break;
    case "Mana Pot":
      updatePlayerMana(30); // fixed from updatePlayerHealth(-30)
      setTurns(false, true);
      dragonAttack();
      break;
    case "Full Heal":
      playerStats.playerCurrentHealth = playerStats.playerMaxHealth;
      updatePlayerHealth(0); // refresh display
      setTurns(false, true);
      dragonAttack();
      break;
    default:
      console.log("error");
  }
};
