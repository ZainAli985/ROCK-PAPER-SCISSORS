console.log("Welcome Rock Paper Scissors Game");

let userScore = 0;
let compScore = 0;

// PARAGRAPH TAG 
const msg = document.querySelector("#msg");
// User Score 
const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");

// Random Computer Choices
const choices = document.querySelectorAll(".choice");
const genCompChoice = () =>{
    const options = ["rock" , "paper", "scissors"];
    const randIdx =  Math.floor(Math.random()*3);
    return options[randIdx];
}

// Draw Game Condition 
const drawGame = () =>{
    msg.innerText = "Game Was Draw. Play Again!";
    msg.style.backgroundColor = "#081b31"
}

// Show Winner Function 

const showWinner = (userWin, userChoice, compChoice)=>{
    if(userWin){
        userScore ++;
        userScorePara.innerText = userScore; 
       msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
       msg.style.backgroundColor = "green";
    }
    else{
        compScore ++;
        computerScorePara.innerText = compScore;
        msg.innerText = `You Lost! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

// Executes Result      // Generate Computer Choice  -> modular programming
const playGame = (userChoice)=>{
    const compChoice = genCompChoice();
    console.log(`User Choice = ${userChoice}`);
    console.log(`Comp Choice = ${compChoice}`);
    
    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissors, paper
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
           userWin =  compChoice === "scissors" ? false : true;
        }
        else{
          userWin =  compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
    
}

// Executes All Funtion Comands 

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id")
        console.log("Choice was clicked",userChoice);
        playGame(userChoice);
    });
});