// import Math;
function computerMove(){
    let randomnumber=Math.round(Math.random() *10);
    let computermove='';
    if(randomnumber>=0&&randomnumber<=3){
        computermove='rock';
    }
    else if(randomnumber>=4&&randomnumber<=7){
        computermove='paper';
    }
    else{
        computermove='scissor';
    }
    return computermove;
}


let score=JSON.parse(localStorage.getItem('score'));
function playerMove(i){
    let result;
    let playermove='';
    if(i==1){
        playermove='rock';
    }
    else if(i==2){
        playermove='paper';
    }
    else if(i==3){
        playermove='scissor';
    }
    let cm=computerMove();
    if(playermove=='paper'){
        if(cm=='paper'){
            score.ties+=1;
            result='Tie';
        }
        else if(cm=='rock'){
            score.loses+=1;
            result='Won'
        }
        else if(cm=='scissor'){
            result='Lose';
            score.wins+=1;
        } 
    }
    if(playermove=='scissor'){
        if(cm=='paper'){
            score.wins+=1;
            result='Won';
        }
        else if(cm=='rock'){
            score.loses+=1;
            result='Lose'
        }
        else if(cm=='scissor'){
            result='Tie';
            score.ties+=1;
        } 
    }
    if(playermove=='rock'){
        if(cm=='paper'){
            score.wins+=1;
            result='Won';
        }
        else if(cm=='rock'){
            score.ties+=1;
            result='Tie'
        }
        else if(cm=='scissor'){
            result='Won';
            score.wins+=1;
        }
        
    }
    localStorage.setItem('score',JSON.stringify(score));
    alert(`You picked ${playermove}.Computer picked ${cm}. You ${result} \n Wins: ${score.wins} Loses: ${score.loses} Ties: ${score.ties}`);

}
function reset(){
    score={
        wins:0,
        loses:0,
        ties:0  
    }
}

