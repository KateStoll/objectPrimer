const testChoice = (playerInput, birdList) => {

console.log(birdList[0] == playerInput);

if (birdList.includes(playerInput) == true) {
    return playerInput
} else {
    return 'Error: Invalid Choice'
}

}

exports.testChoice = testChoice