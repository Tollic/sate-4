const rollBtn = document.querySelector('.go'),
        diceContainer = document.querySelector('.dice-container'),
        dice = document.querySelector('.dice'),    
        dice_2 = document.querySelector('.dice_2'),  
        rollMax = 8

let angleX = 0,
    angleY = 0,
    result = 1,
    delay = 0,
    canRoll = true

let angleX2 = 0,
    angleY2 = 0,
    result2 = 1,
    delay2 = 0,
    canRoll2 = true

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
}


const roll = () =>{

    canRoll = false

    console.log('let\'s roll')
        
    const xTurn = 5 + getRandomInt(rollMax),
    yTurn = 5 + getRandomInt(rollMax)

    delay = Math.max(xTurn, yTurn)*300

    angleX += 90 * xTurn
    angleY += 90 * yTurn

    if(angleX%180){
        getRandomInt(3) > 1 && (angleX += 90)}
    
    dice.style.transform = "rotateX(" + angleX + "deg) rotateY(" + angleY + "deg)"
    dice.style.transitionDuration = delay + 'ms'
        
    let x = angleX%360,
    y = angleY%360
        
    if(x === 0 || x === 180){
        switch ((x+y)%360) {
    case 0: result = 1
            break
    case 90: result = 5
            break
            case 180: result = 6
            break
            case 270: result = 2
            break
            default:
        console.error(123456);
        }
    }
    else if( x === 90){
        result = 4
    }
    else if( x === 270){
        result = 3
    }

    setTimeout(() => canRoll = true, delay)

    console.log('result:', result)
    return(result)
}

const roll2 = () =>{

    canRoll2 = false

    console.log('let\'s roll_2')
        
    const xTurn = 5 + getRandomInt(rollMax),
    yTurn = 5 + getRandomInt(rollMax)

    delay2 = Math.max(xTurn, yTurn)*280

    angleX2 += 90 * xTurn
    angleY2 += 90 * yTurn

    if(angleX2%180){
        getRandomInt(3) > 1 && (angleX2 += 90)}
    
    dice_2.style.transform = "rotateX(" + angleX2 + "deg) rotateY(" + angleY2 + "deg)"
    dice_2.style.transitionDuration = delay2 + 'ms'
        
    let x = angleX2%360,
    y = angleY2%360
        
    if(x === 0 || x === 180){
        switch ((x+y)%360) {
    case 0: result2 = 1
            break
    case 90: result2 = 5
            break
            case 180: result2 = 6
            break
            case 270: result2 = 2
            break
            default:
        console.error(123456);
        }
    }
    else if( x === 90){
        result2 = 4
    }
    else if( x === 270){
        result2 = 3
    }

    setTimeout(() => canRoll2 = true, delay2)

    console.log('result2:', result2)
    return(result2)
}


rollBtn.addEventListener('click', () => canRoll && roll())
rollBtn.addEventListener('click', () => canRoll2 && roll2())