document.getElementById('demo').innerHTML = 'Welcome to the Coding Quiz!';
var startQuiz = document.querySelector("#startQuizBtn");
var timeEl = document.querySelector("#time");
var questionEl = document.querySelector("#question");
var optionsEl = document.querySelector("#options");

startQuiz.addEventListener("click", timer);
//time counter
var minute = 5 ;
var secondsLeft = "00";

function timer(event){
    event.preventDefault();  //otherwise timer would start without event "click";
    var timeInterval= setInterval(function(){
        timeEl.innerHTML =  minute + ":" + secondsLeft;     
            if(secondsLeft == 0){
                minute--;
                secondsLeft=59;
                if(minute == 0){
                clearInterval(timeInterval);
                timeEl.textContent = 'TimeUP!Better Luck Next time';
                }
            }else if(secondsLeft < 10 ){
                secondsLeft = "0" + secondsLeft;
                secondsLeft--;
            }else
                secondsLeft--; 
    }, 1000);
    askQuestion();    
}

function askQuestion(){

    var question = "Which coding language uses <HTML> tags?";
    var optionsArray = ["HTML","Javascript","CSS","None of the above"];

    questionEl.textContent = question;
    // console.log(optionsArray);
    for(i=0 ; i<(optionsArray.length);i++) { 
        optionsEl.textContent += optionsArray[i];
    }

}