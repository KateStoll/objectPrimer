const canFly = (playerInput, flight) => {

    
    if (playerInput == 'penguin') {
        flight = false
    } else if (playerInput == 'bluejay') {
         return flight
    } else if (playerInput == 'eagle') {
         return flight
    }
    
    return flight

    }
    
    exports.canFly = canFly