import {
  updateDragonHealth,
  updatePlayerHealth,
  updatePlayerMana,
  playerStats,
} from "./stats.js";
import { setTurns } from "./globals.js";
import { dragonAttack } from "./dragon.js";
import { updateTextMenu } from "./ui.js";

export const attackMove = (option) => {
  let dmgValue = 0;
  switch (option) {
    case "slash":
      dmgValue = -10;
      updateDragonHealth(dmgValue);
      updateTextMenu(`You attacked with slash for ${Math.abs(dmgValue)} 🗡️`);
      setTurns(false, true);
      dragonAttack();
      break;
    case "rage":
      dmgValue = -30;
      updateDragonHealth(dmgValue);
      updatePlayerHealth(-10);
      updateTextMenu(`You used ${10} ❤️ and attacked with rage for ${Math.abs(dmgValue)} 🗡️`);
      setTurns(false, true);
      dragonAttack();
      break;
    case "cleave":
        dmgValue = -50
      let chance = Math.floor(Math.random() * 10 + 1);
      if (chance > 3) {
        updateDragonHealth(dmgValue);
        updateTextMenu(`You attacked with cleave for ${Math.abs(dmgValue)} 🗡️`);
      }
      else{
        updateTextMenu("You missed!")
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
      if (playerStats.playerHealthPots > 0) {
        playerStats.playerHealthPots -= 1;
        updatePlayerHealth(40);
        setTurns(false, true);
        dragonAttack();
      } else {
        alert("You don't have any healh pots left!");
      }
      break;
    case "Mana Pot":
      if (playerStats.playerManaPots > 0) {
        playerStats.playerManaPots -= 1;
        setTurns(false, true);
        dragonAttack();
      } else {
        alert("You don't have any mana pots left!");
      }
      break;
    case "Full Heal":
      if (playerStats.playerFullHealPot > 0) {
        playerStats.playerFullHealPot -= 1;
        playerStats.playerCurrentHealth = playerStats.playerMaxHealth
        setTurns(false, true);
        dragonAttack();
      } else {
        alert("You don't have any full heal pots left!");
      }
      break;
    default:
      console.log("error");
  }
};

export const magicMove = (option) => {
  switch (option) {
    case "Fireball":
      if (playerStats.playerCurrentMana < 40) {
        alert("Not enough mana!");
      } else {
        updateDragonHealth(-40);
        updatePlayerMana(-40);
        setTurns(false, true);
        dragonAttack();
      }
      break;
    case "Barrier":
      updatePlayerMana(30);
      setTurns(false, true);
      dragonAttack();
      break;
    case "Enchant Sword":
      playerStats.playerCurrentHealth = playerStats.playerMaxHealth;
      updatePlayerHealth(0);
      setTurns(false, true);
      dragonAttack();
      break;
    default:
      console.log("error");
  }
};
