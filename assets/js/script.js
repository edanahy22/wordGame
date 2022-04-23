var startButton = document.querySelector(".start-button");
var timer = document.querySelector(".timer-count");
var words = ['javascript', 'array', 'object', 'string', 'function'];
var blanks = document.querySelector(".word-blanks");

startButton.addEventListener("click", setTime);

function setTime() {
    var countdown = 10;
    
    var timeInterval = setInterval(function() {
        countdown--;
        timer.textContent = countdown;

        if (countdown >= 0) {
            if (countdown > 0) {
                console.log("win/loss");
            }
        }

        if (countdown === 0) {
            clearInterval(timeInterval);
            console.log("gameover");
        }
        
    } , 1000); 

}

function wordGuess () {
    var randomIndex = Math.floor(Math.random() * words.length);
    var randomWord = words[randomIndex];
    var userWord = '';
    for (var i=0; i < randomWord.length; i++) {
       userWord += '_';
    }
    console.log(randomWord);
    console.log(userWord);
}

// wordGuess();

