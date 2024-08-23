let userScore=0;
let compScore=0;
const choices=document.querySelectorAll('.choice');
const msg=document.querySelector('#msg');
const score1=document.querySelector('#compScore');
const score2=document.querySelector('#userScore');




let b=document.querySelector('#mode');
let mode='light';
b.addEventListener("click",()=>{  
      if(mode==='light'){
        mode='dark';
      document.querySelector('body').classList.add('dark');
      document.querySelector('body').classList.remove('light');

    }
        else{
            mode='light';
            document.querySelector('body').classList.add('light');
            document.querySelector('body').classList.remove('dark');

        }
    console.log(mode)} 
    );








const genCompChoice=()=>{
    const options=['rock','paper','scissor'];
    const randIdx= Math.floor(Math.random()*3);
    return options[randIdx];

}

const drawGame=()=>{
    console.log("the game is draw");
    msg.innerText="The Game Was Draw! try again";
    msg.style.backgroundColor=' #A5B452';
      

}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        console.log("you win!");
        msg.innerText=`You win! your choice ${userChoice} beats comp choice ${compChoice}`;
        msg.style.backgroundColor='rgb(24, 197, 24)'
        userScore++;
        score2.innerText=userScore;

    }else{
        console.log("you lose!");
        msg.innerText=`You lose! comp choice ${userChoice} beats your choice ${compChoice}`;
        msg.style.backgroundColor='rgb(237, 62, 62)'
        compScore++;
        score1.innerText=compScore;
    }
}

const playGame=(userChoice)=>{
    //comp choice
    const compChoice=genCompChoice();
    console.log('choice was generated ie.',compChoice);

    if(compChoice===userChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            //scissor,paper
            userWin=compChoice==='paper'? false:true;
        }else if(userChoice==="paper"){
            //rock,scissor
            userWin=compChoice==='scissor'? false:true;
        }else{// else yaani user:sciss
            //rock.paper
            userWin=compChoice==='rock'?false:true;
        }showWinner(userWin,userChoice,compChoice)
    }

}


choices.forEach((choice)=>{
    choice.addEventListener('click',()=>{
        const userChoice=choice.getAttribute('id');
        console.log('choice was clicked ie.',userChoice);
        playGame(userChoice);
    })
})

