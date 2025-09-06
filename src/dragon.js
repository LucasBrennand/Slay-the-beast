import { isDragonTurn, setTurns } from "./globals.js";
import { updatePlayerHealth } from "./stats.js";

export const dragonAttack = () => {
  if (isDragonTurn) {
    dragonMoveFlameBreath();
    setTurns(true, false);
  }
};

const dragonMoveFlameBreath = () => {
  alert("The dragon casts flame breath!");
  updatePlayerHealth(-30);
};
