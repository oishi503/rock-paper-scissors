let userScore = 0;
let compScore = 0;

const msg = document.querySelector("#msg");
const user = document.querySelector("#user");
const comp = document.querySelector("#comp");


const genCompChoice = (() =>{
    options = ["Rock", "Paper", "Scissors"];
    rdmId = Math.floor(Math.random() * 3);
    return options[rdmId];
})

const playGame = ((userChoice) =>{
    console.log("user choice is:", userChoice);
    const compChoice = genCompChoice();
    console.log("computer choice is:", compChoice);

    showWinner = (userWin) =>{
        if(userWin === true){
            userScore++;
            user.innerText = userScore;
            console.log("You win!");
            msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
            msg.style.backgroundColor = "rgb(41, 83, 70)";
        } else{
            console.log("You lose, AI win!");
            compScore++;
            comp.innerText = compScore;
            msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
            msg.style.backgroundColor = "#c03e3e";
            
        }
    }
    if(userChoice === compChoice){
        console.log("game was draw");
        msg.innerText = "Game was draw. Play again";
        msg.style.backgroundColor = "rgba(68, 58, 58, 0.171)"
    } else{
        let userWin = true;
        if(userChoice === "Rock"){
            userWin = compChoice === "Paper"? false : true;
        } else if(userChoice === "Paper"){
            userWin = compChoice === "Scissors"? false: true;
        } else{
            userWin = compChoice === "Rock"? false : true;
        }
        showWinner(userWin);
    }

})

const choices = document.querySelectorAll(".choice");
choices.forEach((choice) =>{
    choice.addEventListener(("click"), () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})