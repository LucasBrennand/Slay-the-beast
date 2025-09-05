const playerUIContainer = document.getElementById("player-ui-container")
const playersBtnsContainer = document.querySelector("#players-btns-container")

const homeBtns = () => {
    playersBtnsContainer.innerHTML = `
            <button id="attack-btn">Attack</button>
            <button id="magic-btn">Magic</button>
            <button id="items-btn">Items</button>
            <button id="giveup-btn">Give Up</button>
    `
    document.querySelector("#attack-btn").addEventListener("click", attackMenu)
    document.querySelector("#items-btn").addEventListener("click", itemMenu)
    document.querySelector("#magic-btn").addEventListener("click", magicMenu)
}

const attackMenu = () => {
    playersBtnsContainer.innerHTML = `
    <button id="attack-move-1">Raging Sword</button>
    <button id="attack-move-2">Slash</button>
    <button id="attack-move-3">Reckless strike</button>
    <button id="goBack-btn">Go Back</button>
    `
    document.querySelector("#goBack-btn").addEventListener("click", homeBtns)
}

const itemMenu = () => {
    playersBtnsContainer.innerHTML = `
    <button id="item-move-1">Health Pot</button>
    <button id="item-move-2">Mana Pot</button>
    <button id="item-move-3">Full Heal</button>
    <button id="goBack-btn">Go Back</button>
    `
    document.querySelector("#goBack-btn").addEventListener("click", homeBtns)
}

const magicMenu = () => {
    playersBtnsContainer.innerHTML = `
    <button id="item-move-1">Fireball</button>
    <button id="item-move-2">Barrier</button>
    <button id="item-move-3">Enchant Sword</button>
    <button id="goBack-btn">Go Back</button>
    `
    document.querySelector("#goBack-btn").addEventListener("click", homeBtns)
}

function main(){
    homeBtns()
}

main()