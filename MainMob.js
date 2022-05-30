const Mob = require("./Mob.js").Mob
const prompt = require('prompt-sync')();


const getRandomInt = (min, max) => {
    return Math.random() * (max-min) + min;
}

const mobHP = () => {
    //todo convert to int
    const playerInput = prompt('Enter HP: ');

    return playerInput

}

let r = Math.round(getRandomInt(1, 100))
console.log(new Mob(r,mobHP()));


