const Bird = require("./Bird.js").Bird
const prompt = require('prompt-sync')();
const testChoice = require('./OtherBird.js').testChoice
const canFly = require('./Flying.js').canFly
const newBird = (birdList) => {
    //todo convert to int
    const playerInput = prompt('Pick a bird: ' + birdList.toString()) 
    return playerInput
} 

let birds = ['penguin', 'bluejay',  'eagle'];
//let flight = true


const birb = newBird(birds);

console.log(new Bird(testChoice(birb, birds), canFly()));
