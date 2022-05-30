
const { test, expect } = require('@jest/globals');
const testChoice = require('../OtherBird.js').testChoice

describe("testChoice", () => {

    test("will return an error when the playerInput is not in the list", () => {
      let birdList = ['eagle' , 'penguin', 'bluejay']
      
    
      expect(testChoice('umu', birdList)).toEqual('Error: Invalid Choice');
    });
  
    test("will return playerInput when playerinput is included in the list", () => {
      let birdList = ['eagle' , 'penguin', 'bluejay']
      
    
      expect(testChoice('penguin', birdList)).toEqual('penguin');
    });
  
  });

