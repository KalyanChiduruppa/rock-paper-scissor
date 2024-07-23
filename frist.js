let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorepara=document.querySelector("#user_score");
const compScorepara=document.querySelector("#comp_score");
const drawGame = () => {
    // console.log("game was draw.");
    msg.innerText='draw';
    msg.style.backgroundColor = "black";
    msg.style.color= '#fff';
};
const gencompchoice =  ()=>{
    const options=['rock','paper','scissor'];
    const randIdx=Math.floor( Math.random() * 3) ;
    return options[randIdx];
};
const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        userScore++;
        userScorepara.innerText=userScore;
        msg.innerText='You win!';
        msg.style.backgroundColor = "green";
        msg.style.color="white";
    }else{
        compScore++;
        compScorepara.innerText=compScore;
        // console.log('You lost!');
        msg.innerText='You lost!';
        msg.style.backgroundColor = "red";
        msg.style.color="white";
    }
}
const playgame = (userChoice)=>{
    // console.log("user Choice = ",userChoice);
    const compChoice = gencompchoice();
    // console.log("compChoice = ", compChoice);
    if(userChoice === compChoice){
                drawGame();
    } else{
        let userWin= true;
        if(userChoice==='rock'){
            userWin = compChoice=== 'paper'?false:true;
        } 
        else if(userChoice==='paper'){
            userWin = compChoice=== 'scissor'?false:true;
        } else{
            userWin = compChoice=== 'rock'?false:true;
        }
        showWinner (userWin,userChoice,compChoice);
    }
};
choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        const userChoice=choice.getAttribute("id");
    playgame(userChoice);
    });
});



