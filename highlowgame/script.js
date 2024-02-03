var randomNum;
var numOfGuesses = 1;
var diffNum;
var chosenDiff;
var limitOfGuesses = 5;
var diffSet;

function playGame(){
    numOfGuesses = numOfGuesses + 1;
    var userGuess = Number(document.getElementById("guess-input").value);
    if(diffSet == true){
        if(userGuess == randomNum && numOfGuesses != limitOfGuesses){
            document.getElementById("answer").innerHTML="Correct!";
        } else if(userGuess < randomNum && numOfGuesses != limitOfGuesses){
            document.getElementById("answer").innerHTML="Too low, try again!";
        } else if(userGuess > randomNum && numOfGuesses != limitOfGuesses){
            document.getElementById("answer").innerHTML="Too high, try again!";
        } else if(numOfGuesses == limitOfGuesses){
            document.getElementById("answer").innerHTML="Out of guesses!";
        }
    } else {
        document.getElementById("answer").innerHTML="You must pick a difficulty!";
    }
}

function diffEasy(){
    randomNum = getRandomInt(50);

    document.getElementById("intro").innerHTML="You must guess the number between 1 & 50, you have 5 guesses.";
    document.getElementById("diff").innerHTML="You have chosen the diffictuly: Easy!";
    diffSet = true;
}

function diffMed(){
    randomNum = getRandomInt(100);

    document.getElementById("intro").innerHTML="You must guess the number between 1 & 100, you have 5 guesses.";
    document.getElementById("diff").innerHTML="You have chosen the difficulty: Medium!";
    diffSet = true;
}

function diffHard(){
    randomNum = getRandomInt(300);

    document.getElementById("intro").innerHTML="You must guess the number between 1 & 300, you have 5 guesses.";
    document.getElementById("diff").innerHTML="You have chosen the difficulty: Hard!";
    diffSet = true;
}

function getRandomInt(max){
    return Math.floor(Math.random() * max);
}
