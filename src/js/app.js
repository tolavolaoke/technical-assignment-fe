console.log("yeah it works!");

const userScore = 0;
const compScore = 0;
const userScore_span = document.getElementById("user-score");
const compterScore_span = document.getElementById("computer-score");
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

//Defines Game function
//(takes the users input which is the users choice) when button is clicked take the value of the button ('r', 'p', 's') and compare it against the computers choice, and get the result back
function game(userChoice){


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