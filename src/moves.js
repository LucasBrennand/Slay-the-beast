import {
  updateDragonHealth,
  updatePlayerHealth,
  updatePlayerMana,
  playerStats,
} from "./stats.js";
import { setTurns, gameState, endPlayerTurn } from "./globals.js";
import { dragonAttack } from "./dragon.js";
import { updateTextMenu } from "./ui.js";

export const attackMove = (option) => {
  try {
    let dmgValue = 0;
    switch (option) {
      case "slash":
        dmgValue = -10;
        updateDragonHealth(dmgValue);
        updateTextMenu(`You attacked with slash for ${Math.abs(dmgValue)} 🗡️`);
        endPlayerTurn()
        break;
      case "rage":
        dmgValue = -30;
        updateDragonHealth(dmgValue);
        updatePlayerHealth(-10);
        updateTextMenu(
          `You used ${10} ❤️ and attacked with rage for ${Math.abs(
            dmgValue
          )} 🗡️`
        );
        endPlayerTurn()
        break;
      case "cleave":
        dmgValue = -50;
        let chance = Math.floor(Math.random() * 10 + 1);
        if (chance > 3) {
          updateDragonHealth(dmgValue);
          updateTextMenu(
            `You attacked with cleave for ${Math.abs(dmgValue)} 🗡️`
          );
        } else {
          updateTextMenu("You missed!");
        }
        endPlayerTurn()
        break;
      default:
        throw new Error();
    }
  } catch (error) {
    console.error(error);
  }
};

export const itemMove = (option) => {
  try {
    switch (option) {
      case "Health Pot":
        if (playerStats.playerHealthPots > 0) {
          playerStats.playerHealthPots -= 1;
          updatePlayerHealth(40);
          updateTextMenu("You used a health pot and healed for 40 ❤️")
          updateTextMenu(`You have ${playerStats.playerHealthPots} health pots left`)
          endPlayerTurn()
        } else {
          alert("You don't have any healh pots left!");
        }
        break;
      case "Mana Pot":
        if (playerStats.playerManaPots > 0) {
          playerStats.playerManaPots -= 1;
          updatePlayerMana(40)
          updateTextMenu("You used a mana pot and regained 40 💙")
          updateTextMenu(`You have ${playerStats.playerManaPots} mana pots left`)
          endPlayerTurn()
        } else {
          alert("You don't have any mana pots left!");
        }
        break;
      case "Full Heal":
        if (playerStats.playerFullHealPot > 0) {
          playerStats.playerFullHealPot -= 1;
          updatePlayerHealth(playerStats.playerMaxHealth)
          updateTextMenu("You used a full heal pot")
          updateTextMenu(`You have ${playerStats.playerFullHealPot} full heal pots left`)
          endPlayerTurn()
        } else {
          alert("You don't have any full heal pots left!");
        }
        break;
      default:
        throw new error();
    }
  } catch (error) {
    console.error(error);
  }
};

export const magicMove = (option) => {
  try {
    switch (option) {
      case "Fireball":
        if (playerStats.playerCurrentMana < 40) {
          alert("Not enough mana!");
        } else {
          updateDragonHealth(-40);
          updatePlayerMana(-40);
          updateTextMenu("You cast fireball and did 40 🗡️")
          endPlayerTurn()
        }
        break;
      case "Barrier":
        updatePlayerMana(30);
        setTurns(false, true);
        dragonAttack();
        gameState.currentTurn++;
        break;
      case "Enchant Sword":
        playerStats.playerCurrentHealth = playerStats.playerMaxHealth;
        updatePlayerHealth(0);
        endPlayerTurn()
        break;
      default:
        throw new error();
    }
  } catch (error) {
    console.error("error found", error);
  }
};
