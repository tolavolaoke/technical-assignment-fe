console.log("yeah it works!");

let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scores_div = document.querySelector (".scores");

const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const result_p = document.querySelector(".result > p");

//function to get computer choice
function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3); //Math.random gives random numbers between 0 and 3, Math.floor rounds the number to a whole number
    return choices[randomNumber]; //returns random element r,p,s from the array 

}

function convertToWord (letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
 }

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = compScore;
    result_p.innerHTML = convertToWord(userChoice) + " beats " + convertToWord(computerChoice) + ". You win! ";
}
function loose(userChoice, computerChoice){
    compScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = compScore;
    result_p.innerHTML = convertToWord(userChoice) + " looses " + convertToWord(computerChoice) + ". You lost! ";
}
function draw(userChoice, computerChoice){
    result_p.innerHTML = convertToWord(userChoice) + " equals " + convertToWord(computerChoice) + ". Its a draw! ";
}


//Defines Game function
//(takes the users input which is the users choice) when button is clicked take the value of the button ('r', 'p', 's') and compare it against the computers choice, and get the result back
function game(userChoice){
    const computerChoice = getComputerChoice();
    // console.log("user choice is" + userChoice); //Test the userchoice 
    // console.log("computer choice is" + computerChoice); //Test the computerchoice

    //switch statements for win loose draw conditions
    switch (userChoice + computerChoice){
        case "rs":
                case "pr":
                        case "sp":
                            // console.log("user wins!");
                            win(userChoice, computerChoice);
                            break;
                            case "rp":
                                    case "ps":
                                            case "sr":
                                                    // console.log("user looses!");
                                                    loose(userChoice, computerChoice);
                                                    break;
                                                    case "rr":
                                                            case "pp":
                                                                    case "ss":
                                                                            // console.log("user draws!");
                                                                            draw(userChoice, computerChoice);
                                                                            break;

    }


} 


function main() {
    rock_div.addEventListener('click', function() {
        // console.log("hey you clicked on rock");
        game("r");
    })
    paper_div.addEventListener('click', function() {
        // console.log("hey you clicked on paper");
        game("p");
    })
    scissors_div.addEventListener('click', function() {
        // console.log("hey you clicked on scissors");
        game("s");
    })
}

main(); // to run the main function