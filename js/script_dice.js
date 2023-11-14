// var elDiceOne = document.getElementById('dice1');
// var elComeOut = document.getElementById('roll');

// elComeOut.onclick = function () {rollDice();};

// function rollDice() {

// var diceOne = Math.floor((Math.random() * 6) + 1);

// for (var i = 1; i <= 6; i++) {
// elDiceOne.classList.remove('show-' + i);
// if (diceOne === i) {
//     elDiceOne.classList.add('show-' + i);
// }}}
// // setTimeout(rollDice(), 2000);
// // кубик 2

// var elDiceOne = document.getElementById('dice1_2');
// var elComeOut = document.getElementById('roll');

// elComeOut.onclick = function () {rollDice();};

// function rollDice() {

// var diceOne = Math.floor((Math.random() * 6) + 1);

// for (var i = 1; i <= 6; i++) {
// elDiceOne.classList.remove('show-' + i);
// if (diceOne === i) {
//     elDiceOne.classList.add('show-' + i);
// }}}

var elDiceOne = document.getElementById('dice1');
var elDiceTwo = document.getElementById('dice1_2');
var elComeOut = document.getElementById('roll');

elComeOut.onclick = function () {
    rollDice(elDiceOne);
    rollDice(elDiceTwo);
};

function rollDice(element) {
    var diceValue = Math.floor((Math.random() * 6) + 1);

    for (var i = 1; i <= 6; i++) {
        element.classList.remove('show-' + i);
        if (diceValue === i) {
            element.classList.add('show-' + i);
        }
    }
}







