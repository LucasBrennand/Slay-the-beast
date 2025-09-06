import { isDragonTurn, setTurns } from "./globals.js";
import { updatePlayerHealth } from "./stats.js";
import { updateTextMenu } from "./ui.js";

export const dragonAttack = () => {
  if (isDragonTurn) {
    dragonMoveFlameBreath();
    setTurns(true, false);
  }
};

const dragonMoveFlameBreath = () => {
  updateTextMenu("The dragon casts flame breath for 30 🗡️")
  updatePlayerHealth(-30);
};
