
let userScore = 0;
let compScore = 0;
let remainingClicks = 5; // Set the number of remaining clicks

const choises = document.querySelectorAll(".box");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randInd = Math.floor(Math.random() * 3);
    return options[randInd];
}

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    const compChoice = genCompChoice();
    console.log("computer choice = ", compChoice);

    if (userChoice === compChoice) {
        console.log("Draw");
        msg.style.backgroundColor = "#9A348E";
        msg.innerText = `Draw!, Comp Choice is ${compChoice}`;
    } else if (userChoice === "rock" && compChoice === "scissors" ||
        userChoice === "paper" && compChoice === "rock" ||
        userChoice === "scissors" && compChoice === "paper") {
        console.log("User Win");
        msg.style.backgroundColor = "green";
        msg.innerText = `You Win, Comp Choice is ${compChoice}`;
        userScore++;
        userScorePara.innerText = userScore;

    } else {
        console.log("Comp is win");
        msg.style.backgroundColor = "red";
        msg.innerText = `You lose, Comp Choice is ${compChoice}`;
        compScore++;
        compScorePara.innerText = compScore;
    }

    // Decrease the remaining clicks
    remainingClicks--;

    const endGame = () => {
    // Check who wins the overall game and display a message
    if (userScore > compScore) {
        msg.innerText = "You are the overall winner!";
    } else if (userScore < compScore) {
        msg.innerText = "You lost the overall game!";
    } else {
        msg.innerText = "The game ended in a draw!";
    }
}

    // Remove the event listener if remaining clicks are zero
    if (remainingClicks === 0) {
        debugger;
        endGame();
        choises.forEach((choice) => {
            choice.removeEventListener("click", clickHandler);
        });
    }
}

// Define a separate function for the click handler
const clickHandler = (event) => {
    debugger;
    const userChoice = event.target.getAttribute("id");
    playGame(userChoice);
}



// Add the event listener to each choice
choises.forEach((choice) => {
    debugger;
    choice.addEventListener("click", clickHandler);
});
























































   