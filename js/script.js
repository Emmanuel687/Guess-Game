// Variable That Stores the secret Number
let secretNumber = Math.trunc(Math.random()*20+1)
let score = 20
let highscore = 0


// Selected check class which is a button.
// Added an event listener to it with click and function.
document.querySelector(`.check`).addEventListener(`click`, function(){
    // Created a guess variable that selects guess class which is an input.
    // The value fetches the type of input which is a number.
    let guess = Number(document.querySelector(`.guess`).value);
    
        // Checked for condition if no guess value Output will be No guess.
    if(!guess){
        document.querySelector(`.message`).textContent ='No Number'
        // Checked for condition if guess value is equal to secret number Output will be correct number 
    }else if(guess === secretNumber){
        document.querySelector(`.message`).textContent=`Correct Number`
        score=score+1
        document.querySelector(`.score`).textContent=score
        // Selected the element From HTML document with ClassName,Put new text content
        document.querySelector(`.number`).textContent=secretNumber;

        document.querySelector(`body`).style.backgroundColor = `#60b347`;
        document.querySelector(`.number`).style.width = `30rem`;

        if(score>highscore){
            highscore=score;
            document.querySelector(`.highscore`).textContent=highscore;
        }

        // Checked for condition if guess value is greater than secret value output Too high
    }else if(guess>secretNumber){
        if(score>1){
            document.querySelector(`.message`).textContent=`Too High`
            score=score-1
            document.querySelector(`.score`).textContent=score
        }else{
            document.querySelector(`.message`).textContent=`You lost`
            document.querySelector(`.score`).textContent=0
        }

        // Checked for condition if guess value is low than secret value output Too Low
    }else if(guess<secretNumber){
        if(score>1){
            document.querySelector(`.message`).textContent=`Too Low`
            score=score-1
            document.querySelector(`.score`).textContent=score
        }else{
            document.querySelector(`.message`).textContent=`You lost`
            document.querySelector(`.score`).textContent=0
        }
    }else if(score<0){
        document.querySelector(`.message`).textContent=`You Lost`
    }


}
)

document.querySelector(`.again`).addEventListener(`click`,()=>{
    secretNumber = Math.trunc(Math.random()*20+1) 
    document.querySelector(`body`).style.backgroundColor = ` #222`;
    document.querySelector(`.number`).style.width = `15rem`;
    document.querySelector(`.number`).textContent = `?`;
    document.querySelector(`.guess`).value =``;

})
