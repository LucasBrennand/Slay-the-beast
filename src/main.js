const playerUIContainer = document.getElementById("player-ui-container")
const attackBtn = document.querySelector("#attack-btn")
const magicBtn = document.querySelector("#magic-btn")
const itemsBtn = document.querySelector("#items-btn")
const giveUpBtn = document.querySelector("#giveup-btn")
const playersBtnsContainer = document.querySelector("#players-btns-container")

const homeBtns = () => {
    playersBtnsContainer.innerHTML = `
    <button id="attack-btn">Attack</button>
            <button id="magic-btn">Magic</button>
            <button id="items-btn">Items</button>
            <button id="giveup-btn">Give Up</button>
    `
}

attackBtn.addEventListener("click", () => {
    playersBtnsContainer.innerHTML = `
    
            <button id="attack-btn">Raging Sword</button>
            <button id="magic-btn">Slash</button>
            <button id="items-btn">Reckless strike</button>
            <button id="giveup-btn" onClick=homeBtns()>Go Back</button>
    `
})

