// let dice = document.getElementById('dice');
// let elComeOut = document.getElementById('roll');
// let outputDiv = document.getElementById('diceResult');

// elComeOut.onclick = function () {
//     rollDice();
// };

// function rollDice() {
//     let result = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
//     dice.dataset.side = result;
//     dice.classList.toggle("reRoll");

//     console.log(result);
// }

let dice = document.getElementById('dice');
let dice_2 = document.getElementById('dice_2');
let elComeOut = document.getElementById('roll');
let outputDiv = document.getElementById('diceResult');
let outputDiv_2 = document.getElementById('diceResult_2');

elComeOut.onclick = function () {
    rollDice(dice);
    rollDice(dice_2);
};

function rollDice(currentDice) {
    let result = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    currentDice.dataset.side = result;
    currentDice.classList.toggle("reRoll");

    console.log(result);
}


// outputDiv.classList.remove("reveal");
    // outputDiv.classList.add("hide");
    // outputDiv.innerHTML = "You've got " + result;
    // setTimeout(function(){ outputDiv.classList.add("reveal"); }, 1500);
