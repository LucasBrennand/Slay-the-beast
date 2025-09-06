const playerUIContainer = document.getElementById("player-ui-container");
const playersBtnsContainer = document.querySelector("#players-btns-container");
const dragonHealth = document.querySelector("#dragon-health");
const playerHealth = document.querySelector("#player-health");
const playerMana = document.querySelector("#player-mana");
const textContainer = document.querySelector("#text-container");
const youLoseMsg = document.querySelector(".you-lose");
const youLoseBtn = document.querySelector("#you-lose-btn");
let gameIsActive = true;
let isPlayerTurn = true;
let isDragonTurn = false;

youLoseBtn.addEventListener("click", () => {
  youLoseMsg.style.display = "none";
});

const playerStats = {
  playerCurrentHealth: 100,
  playerCurrentMana: 150,
  playerMaxHealth: 100,
  playerMaxMana: 150,
};
playerHealth.textContent = playerStats.playerMaxHealth;
playerMana.textContent = playerStats.playerMaxMana;

const dragonStats = {
  dragonCurrentHealth: 250,
  dragonMaxHealth: 250,
};
dragonHealth.textContent = dragonStats.dragonMaxHealth;

const homeBtns = () => {
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

const attackMenu = () => {
  playersBtnsContainer.innerHTML = `
    <button id="attack-move-1">
    <h3>Rage</h3>
    <h4>Unleash your anger and strike (+30dmg)</h4>
    </button>
    <button id="attack-move-2">Slash</button>
    <button id="attack-move-3">Cleave</button>
    <button id="goBack-btn">Go Back</button>
    `;
  document.querySelector("#goBack-btn").addEventListener("click", homeBtns);
  document.querySelector("#attack-move-1").addEventListener("click", () => {
    attackMove("rage");
    homeBtns();
  });
  document.querySelector("#attack-move-2").addEventListener("click", () => {
    attackMove("slash");
    homeBtns();
  });
  document.querySelector("#attack-move-3").addEventListener("click", () => {
    attackMove("cleave");
    homeBtns();
  });
};

const attackMove = (option) => {
  switch (option) {
    case "slash":
      updateDragonHealth(-10);
      break;
    case "rage":
      updateDragonHealth(-30);
      break;
    case "cleave":
      let chance = Math.floor(Math.random() * 10 + 1);
      if (chance > 3) {
        updateDragonHealth(-50);
      }
      break;
    default:
      console.log("error");
  }
};
const itemMenu = () => {
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

const itemMove = (option) => {
  switch (option) {
    case "Health Pot":
      updatePlayerHealth(20);
      break;
    case "Mana Pot":
      updatePlayerHealth(-30);
      break;
    case "Full Heal":
      let chance = Math.floor(Math.random() * 10 + 1);
      if (chance > 3) {
        updateDragonHealth(-50);
      }
      break;
    default:
      console.log("error");
  }
};

const magicMenu = () => {
  playersBtnsContainer.innerHTML = `
    <button id="item-move-1">Fireball</button>
    <button id="item-move-2">Barrier</button>
    <button id="item-move-3">Enchant Sword</button>
    <button id="goBack-btn">Go Back</button>
    `;
  document.querySelector("#goBack-btn").addEventListener("click", homeBtns);
};

const updateDragonHealth = (modifier) => {
  dragonStats.dragonCurrentHealth += modifier;
  if (dragonStats.dragonCurrentHealth <= 0) {
    dragonStats.dragonCurrentHealth = 0;
    alert("The dragon was defeated!");
  }
  dragonHealth.textContent = dragonStats.dragonCurrentHealth;
};

const updatePlayerHealth = (modifier) => {
  playerStats.playerCurrentHealth += modifier;
  if (playerStats.playerCurrentHealth <= 0) {
    playerStats.playerCurrentHealth = 0;
    youLoseMsg.style.display = "flex";
  }
};
const updatePlayerMana = (modifier) => {
  playerStats.playerCurrentMana += modifier;
  if (playerStats.playerCurrentMana <= 0) {
    playerStats.playerCurrentMana = 0;
  }
};

const dragonAttack = () => {
  dragonMoveFlameBreath();
};

const dragonMoveFlameBreath = () => {
  if (isDragonTurn) {
    playerStats.playerCurrentHealth -= 30;
  }
};

function main() {
  homeBtns();
}
main();
