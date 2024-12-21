const rockButton = document.querySelector('.rock-btn');
const paperButton = document.querySelector('.paper-btn');
const scissorsButton = document.querySelector('.scissors-btn');
const userHandIcon = document.querySelector('.user.hand-icon')
const computerHandIcon = document.querySelector('.computer.hand-icon')
const result = document.querySelector('.result');
const userScore = document.querySelector('.user-score');
const computerScore =document.querySelector('.computer-score');

const rockIcon = '✊';
const paperIcon = '✋';
const scissorIcon = '✌️';


const computerIcon = [rockIcon,paperIcon,scissorIcon];

function calculateResult(selectedIcon,winingIcon){
    userHandIcon.innerText ='🤜';
    computerHandIcon.innerText ='🤛';
    result.innerText=" ";
    userHandIcon.classList.add('shakeUserHands');
    computerHandIcon.classList.add('shakeComputerHands');
 
    setTimeout(()=>{
    
     userHandIcon.classList.remove('shakeUserHands');
    computerHandIcon.classList.remove('shakeComputerHands');
    userHandIcon.innerText = selectedIcon;
    computerHandIcon.innerText = computerIcon[Math.floor(Math.random()*3)]
    if(  userHandIcon.innerText === computerHandIcon.innerText){
       result.innerText = 'Draw👾 ';
    }
    else if(computerHandIcon.innerText === winingIcon){
      result.innerText ='You Won 🏆'
         userScore.innerText = +userScore.innerText + 1;
     
     }
      else{
         
         result.innerText = ' Computer Won !!! 🖥️';
         computerScore.innerText = +computerScore.innerText + 1;
      }
 
    },1000)
}


rockButton.addEventListener('click',() => {
   calculateResult(rockIcon,scissorIcon);
});

paperButton.addEventListener('click',() => {
   calculateResult(paperIcon,rockIcon);
});


scissorsButton.addEventListener('click',()  =>{
   calculateResult(scissorIcon,paperIcon);
});



