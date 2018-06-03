

//When the form opens, only start button and instructions are displayed on the screen
//Did not get a chance to hide the 'submit' button on the initial screen

//this is setting out timer in seconds
var number = 60;

var intervalId;

$("#submit").on("click", stop);

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }


  function decrement() {

    number--;

    $("#timer").html("<h2>" + "Seconds Remaining: " + number + "</h2>");

    if (number === 0) {

        stop();

        alert("Time's Up!");
    }
  }

  function stop() {

    clearInterval(intervalId);
    showResults();
    
  }





// html tags to store references in the variables



const startButton = document.getElementById('start');

const gameContainer = document.getElementById('game');

const resultsContainer = document.getElementById('results');

const submitButton = document.getElementById('submit');



// when start button is clicked, questions and answers are displayed with radio buttons
//user can only click on one answer choice 
$("#start").on("click", function () {

    for (let i = 0; i < questions.length; i++) {

        $("#game").append(questions[i].question + "<br> <br>")

        for (let y = 1; y < 5; y++) {

            $("#game").append("<input type = 'radio' class='clicks' name = ' " + i + " '> " + questions[i].answers[y] + "<br>")
        
        start.style.display="none";
        }
    }

})





// List of questions 

var questions = [

    {
        question: "What is Chandler's middle name?",
        answers: {
            1: 'Ned',
            2: 'Muriel',
            3: 'Clyde',
            4: 'Matthew'
        },

        correct: '2'
    },
    {
        question: "What was the name of Ross's monkey?",
        answers: {
            1: 'Marcel',
            2: 'Malcolm',
            3: 'Marcus',
            4: 'Mark'
        },
        correct: '1'
    },
    {
        question: 'How many sisters does Joey have?',
        answers: {
            1: '6',
            2: '7',
            3: '8',
            4: '5'
        },
        correct: '2'
    },
    {
        question: "What was the name of Chandler's roomate after Joey moved out?",
        answers: {
            1: 'John',
            2: 'Eddie',
            3: 'Donald',
            4: 'David'
        },
        correct: '2'
    },
    {
        question: "What kind of animal is 'Hugsy'",
        answers: {
            1: 'Whale',
            2: 'Dog',
            3: 'Tiger',
            4: 'Penguin'
        },
        correct: '4'
    },
    {
        question: "What is Phoebe's mother's name?",
        answers: {
            1: 'Lily',
            2: 'Martha',
            3: 'Ursula',
            4: 'Donna'
        },
        correct: '1'
    },
    {
        question: "What is Rachel's father's occupation?",
        answers: {
            1: 'Podiatrist',
            2: 'Opthamologist',
            3: 'Doctor',
            4: 'Surgeon'
        },
        correct: '3'
    },
    {
        question: "What was the name of Rachel's childhood pet dog that was killed by a vehicle?",
        answers: {
            1: 'Princess',
            2: 'Bella',
            3: 'Lola',
            4: 'LaPooh'
        },
        correct: '4'
    },
]


//timer starts when start button is clicked
startButton.addEventListener('click', run);

//results page pops up when submit button is clicked
submitButton.addEventListener('click', showResults);



//clears the page when results page shows up    
function showResults (){
   
    
    $("#game").empty();
    clearInterval(intervalId);
    submit.style.display="none";
    timer.style.display="none";  
    text.style.display="none";
   
    
}

// Result variables

var correctAnswers = 0;
var wrongAnswers = 0;
var unanswered = 0;


//In this section, results were to be shown to user (not complete)