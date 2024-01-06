const rockChoose = document.querySelector(".rockChoose");
const paperChoose = document.querySelector(".paperChoose");
const scissorChoose = document.querySelector(".scissorChoose");
const playAgain = document.querySelector(".playAgain");

var yourMove='';
var compMove='';
var results='';
function compMoveFunction(){
    let random=Math.random();
    if (random>=0 && random<=1/3){
        compMove='Rock';
    }
    else if (random>=1/3 && random<=2/3){
        compMove='Paper';
    } 
    else{
        compMove='Scissor';
    }
    return compMove;
}

rockChoose.addEventListener("click", e=>{
    yourMove='Rock';
    if (compMoveFunction()==='Rock'){
        results="Draw! the Comp also chose rock.";
    }
    else if(compMoveFunction()==='Paper'){
        results="You Lose! The Comp chose Paper.";
    }
    else{
        results="You Win! The Comp chose Scissor.";
    }
    console.log(yourMove);
    dis2.innerHTML += results;
    display2.style.visibility='visible';
});

paperChoose.addEventListener("click", e=>{
    yourMove='Paper';
    if (compMoveFunction()==='Rock'){
        results="You Win! The Comp chose Rock";
    }
    else if(compMoveFunction()==='Paper'){
        results="Draw! The Comp also chose Paper";
    }
    else{
        results="You Lose! The Comp chose Scissor";
    }
    console.log(yourMove);
    dis2.innerHTML += results;
    display2.style.visibility='visible';
});

scissorChoose.addEventListener("click", e=>{
    yourMove='Scissor';
    if (compMoveFunction()==='Rock'){
        results="You Lose! the comp chose rock.";
    }
    else if(compMoveFunction()==='Paper'){
        results="You Win! The Comp chose Paper";
    }
    else{
        results="Draw! The Comp also chose Scissor";
    }
    console.log(yourMove);
    dis2.innerHTML += results;
    display2.style.visibility='visible';
});

playAgain.addEventListener("click", e=>{
    dis2.innerHTML = '';
});