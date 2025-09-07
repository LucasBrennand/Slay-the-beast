import {
  playersBtnsContainer,
  youLoseMsg,
  textContainer,
  youLoseBtn,
  resetGame,
} from "./globals.js";
import { attackMove, itemMove, magicMove } from "./moves.js";

export const playerHealthBar = document.querySelector(".player-health");
export const playerManaBar = document.querySelector(".player-mana");
export const dragonHealthBar = document.querySelector(".dragon-health");

export const homeBtns = () => {
  playersBtnsContainer.innerHTML = `
    <button id="attack-btn">Attack</button>
    <button id="magic-btn">Magic</button>
    <button id="items-btn">Items</button>
    <button id="giveup-btn">Give Up</button>
  `;
  document.querySelector("#attack-btn").addEventListener("click", attackMenu);
  document.querySelector("#items-btn").addEventListener("click", itemMenu);
  document.querySelector("#magic-btn").addEventListener("click", magicMenu);
  document.querySelector("#giveup-btn").addEventListener("click", () => {
    youLoseMsg.style.display = "flex";
  });
};

export const attackMenu = () => {
  playersBtnsContainer.innerHTML = `
    <button id="attack-move-1">Slash</button>
    <button id="attack-move-2">Rage</button>
    <button id="attack-move-3">Cleave</button>
    <button id="goBack-btn">Go Back</button>
  `;
  document.querySelector("#goBack-btn").addEventListener("click", homeBtns);
  document.querySelector("#attack-move-1").addEventListener("click", () => {
    attackMove("slash");
    homeBtns();
  });
  document.querySelector("#attack-move-2").addEventListener("click", () => {
    attackMove("rage");
    homeBtns();
  });
  document.querySelector("#attack-move-3").addEventListener("click", () => {
    attackMove("cleave");
    homeBtns();
  });
};

export const itemMenu = () => {
  playersBtnsContainer.innerHTML = `
    <button id="item-move-1">Health Pot</button>
    <button id="item-move-2">Mana Pot</button>
    <button id="item-move-3">Full Heal</button>
    <button id="goBack-btn">Go Back</button>
  `;
  document.querySelector("#goBack-btn").addEventListener("click", homeBtns);
  document.querySelector("#item-move-1").addEventListener("click", () => {
    itemMove("Health Pot");
    homeBtns();
  });
  document.querySelector("#item-move-2").addEventListener("click", () => {
    itemMove("Mana Pot");
    homeBtns();
  });
  document.querySelector("#item-move-3").addEventListener("click", () => {
    itemMove("Full Heal");
    homeBtns();
  });
};

export const magicMenu = () => {
  playersBtnsContainer.innerHTML = `
    <button id="magic-move-1">Fireball</button>
    <button id="magic-move-2">Barrier</button>
    <button id="magic-move-3">Enchant Sword</button>
    <button id="goBack-btn">Go Back</button>
  `;
  document.querySelector("#goBack-btn").addEventListener("click", homeBtns);
  document.querySelector("#magic-move-1").addEventListener("click", () => {
    magicMove("Fireball");
    homeBtns();
  });
  document.querySelector("#magic-move-2").addEventListener("click", () => {
    magicMove("Barrier");
    homeBtns();
  });
  document.querySelector("#magic-move-3").addEventListener("click", () => {
    magicMove("Enchant Sword");
    homeBtns();
  });
};

export const updateTextMenu = (comment) => {
  let newLine = document.createElement("p");
  newLine.textContent = comment;
  textContainer.appendChild(newLine);
};
