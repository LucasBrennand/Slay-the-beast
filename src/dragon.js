import { setTurns, gameState } from "./globals.js";
import { updatePlayerHealth, dragonStats } from "./stats.js";
import { updateTextMenu } from "./ui.js";

export const dragonAttack = () => {
  if (gameState.isDragonTurn) {
    let dragonMoveChance = Math.floor(Math.random() * 10 + 1);
    console.log("Dragon chance: ", dragonMoveChance);
    if (dragonMoveChance > 3) {
      dragonMoveFlameBreath();
    } else if (dragonMoveChance < 4 && dragonMoveChance > 2) {
      dragonMoveHarden();
    } else {
      updateTextMenu("The dragon is gathering it's strength");
    }
    setTurns(true, false);
  }
};

const dragonMoveFlameBreath = () => {
  updateTextMenu("The dragon casts flame breath for 30 🗡️");
  updatePlayerHealth(-30);
};

const dragonMoveHarden = () => {
  updateTextMenu("The dragon hardens it's skin");
  dragonStats.dragonHardenedSkin = true;
  dragonStats.dragonHardenedSkinDuration = 3;
};
