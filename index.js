function genRandomNum(n = 100) {
    return Math.trunc(Math.random() * n + 1)
}


// TODO: THE GUESS ATTEMPT IS OFF BY ONE

function guessNumber(randomNum, attempts = 10) {

    let msg = ''
    let total = attempts
    let guess = parseInt(prompt('Please guess a number from 1 to 100'))
    while (guess !== randomNum && attempts > 1) {

        if (isNaN(guess)) {
            msg = 'Value is not a number try again'
        }
        else {
            attempts--
        }

        if (guess < randomNum) {
            msg = `Guess is less than the random number, you have ${attempts} attempts remaining`
        }
        else if (guess > randomNum) {
            msg = `Guess is greater than the random number you have ${attempts} attempts remaining`
        }

        window.alert(msg)
        guess = parseInt(prompt('Please guess a number from 1 to 100'))
    }

    return attempts > 1 ? `You guessed ${randomNum} correctly in ${total - attempts} attempts.` : 'You used all of your attempts, try again!'

}

window.alert(guessNumber(genRandomNum()))