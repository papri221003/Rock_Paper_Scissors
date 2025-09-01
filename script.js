let userscore=0;
let compscore=0;
let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let userscorepara=document.querySelector("#user_score");
let comscorepara=document.querySelector("#comp_score");
let resetGame=document.querySelector(".Reset");

resetGame.addEventListener("click",()=>{
    userscore=0;
    compscore=0;
    userscorepara.innerText=userscore;
    comscorepara.innerText=compscore;
    msg.innerText="Play your move";
})

let drawGame=()=>{
    msg.innerText="The game was Draw..Play again";
    msg.style.backgroundColor="rgb(0, 0, 49)";
   
}
let showwinner=(userwin,userChoice,comChoice)=>
{
    if(userwin)
    {
        userscore++;
        userscorepara.innerText=userscore;
        msg.innerText=`You win!!Your ${userChoice} beats ${comChoice}`;
        msg.style.backgroundColor="rgba(0, 58, 13, 1)";
        
    }
    else{
        compscore++;
        comscorepara.innerText=compscore;
        msg.innerText=`You lost!!${comChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="rgba(134, 9, 0, 1)";
        
    }
}
let gencompchoice=()=>{
    //rock,paper,scissors
    let options=["Rock","Paper","Scissors"];
    let randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}
let playGame=(userChoice)=>{
     console.log(`User choice ${userChoice}`);
     //generate computer choice
     let comChoice=gencompchoice();
     console.log(`Computer choice ${comChoice}`); 
     
     if(userChoice===comChoice)
     {
          drawGame();
     }
     else{
        let userwin=true;
        if(userChoice===Rock)
        {
            //comchoice either scissor or paper (not rock if it is rock then it will be print draw previously)
            userwin=comChoice==="Paper"?false:true;
        }
        else if(userChoice==="Paper")
        {
            userwin=comChoice==="Scissors"?false:true;
        }
        else{
            userwin=comChoice==="Rock"?false:true;
        }
        showwinner(userwin,userChoice,comChoice);

     }
}

choices.forEach((choice)=>
{
    console.log(choice);
    choice.addEventListener("click",()=>{
           let userChoice=choice.getAttribute("id");
           console.log(`choice was clickes ${userChoice}`);
           playGame(userChoice);
    });
});