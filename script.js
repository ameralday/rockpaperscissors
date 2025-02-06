function getComputerChoice() {
    /* variable for result
    let result = 0

    variable for math.random? nope

    create a button that activates the function, not yet

    create a random number generator and multiply it by 100 before rounding down so that it returns a whole number (math.floor)

    Have it return the string "rock" when the number is <3 (that will give 3 chances: 0,1,2)

    Have it return the string "paper" when the number is >=3 but also <6 so that it will give 3 chances (3,4,5)

    Have it return the string "scissors" when the number is <9 (also 3 chances: 6,7,8)

    console.log the result
    */

    let result = Math.floor(Math.random() * 10); 

    switch (true){
        case (result < 3):
            console.log("rock");
            break;
        case (result < 6):
            console.log("paper");
            break;
        default:
            console.log("scissors");
            break;
    }
}

console.log(getComputerChoice());

function getHumanChoice() {
    /* create variable for human choice
    create prompt
    create return of human choice*/

    let choice = prompt("Choose: rock, paper, scissors");
    return choice;
}

console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

