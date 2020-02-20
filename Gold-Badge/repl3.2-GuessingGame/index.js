let randomMin = prompt("I'll pick a random number...Choose a minimum number");
let randomMax = prompt("...Choose a maximum number");

getRandomInt(randomMin, randomMax);

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let randomNumber = Math.floor(Math.random() * (max - min)) + min;

    let randomText = randomNumber.toString();
    console.log(randomNumber);

    let gameLost = false;

    for (i = 3; i > 0; i--) {

        iText = "You have " + i.toString() + " guesses";
        // let guess = prompt("Please enter a number between 1 and 10", "Number between 1 & 10");
        guess = prompt("Please enter a number between 1 and 10", iText);

        console.log(parseInt(guess, 10));
        let guessDigital = parseInt(guess, 10);
        console.log(guessDigital == randomNumber);

        
         if (guessDigital == randomNumber) {
            alert("You guessed it!!")
            break;
        } else if (i == 1) {
            gameLost = true;
            alert("Sorry. You lose")
            break;
        } else if (isNaN(guessDigital)) {
            console.log("count: ", i)
            alert("That's not a number"); 

        } else if (guessDigital > 10 || guessDigital < 0) {
            console.log("count: ", i)
            alert("That number is out of range")
        } else if (guessDigital > randomNumber) {
            console.log("count: ", i)
            alert("Guess lower")

        } else if (guessDigital < randomNumber) {
            console.log("count: ", i)
            alert("Guess higher")

        }
    }

    // if (guessDigital == NaN) {
    //     alert("That's not a number");
    // } else if (guessDigital > randomNumber) {
    //         alert("Guess lower")
    //     } else if (guessDigital < randomNumber) {
    //         alert("Guess higher")
    //         } else if (guessDigital == randomNumber) {
    //             alert("You guessed it!!")
    //             break;
    //             }

    //         let alertText = "You selected number " + guess.toString();
    // alert(alertText);
}


/*
What is needed for a guessing game?

1. A range for our user to guess between. This should be 1-10.
2. A randomized computer answer.
3. A user guess that will provide a prompt
4. A guess count (for loop variable declaration)
5. let gameLost = false
6. The user will have 3 guesses to guess the correct answer.

Logic

1. A way to validate the user guess
2. Check if the user guess === the computer answer and alert that he / she won
3. If the user guess is greater than the computer answer - nudge him or her to guess lower
4. If the user guess is lower than the computer answer - nudge him or her to guess higher
5. Handle the case when a user loses

*** You will need to explore documentation on parseInt(), prompt, alert, Math.floor(), and Math.random()
*** You will not need to use the provided HTML or CSS file - just JS!

Write a function that does the following:
Sets a randomized computer answer between 1-10.
A variable to hold the status if the game has been won or lost.
Has a for loop that sets a guess count, and subtracts from that guess count each time the guess is incorrect.
Has logic to check if the guess is outside the range of 1-10, and then alert the user if so.
Has logic to check if you have guessed correctly. If you have not guessed correctly, you should be alerted to guess higher or lower depending on what your guess was compared to the computers answer
*/