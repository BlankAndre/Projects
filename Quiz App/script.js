const questions = [
  {
    question :"What is the capital of France?",
    answers: [
      {text : "Paris", correct : true},
      {text : "London", correct : false},
      {text : "Berlin", correct : false},
      {text : "Rome", correct : false},
    ]
  },
  {
    question :  "Which country has the largest population?",
    answers : [
      {text:"China", correct : true},
      {text : "India", correct : false},
      {text :  "United States", correct : false},
      {text : "Pakistan", correct : false},
    ]
    },
    {
      question : "Who is the CEO of Tesla, Inc.?",
      answers : [
        {text : "Elon Musk", correct : true},
        {text : "Jeff Bezos", correct : false},
        {text : "Bill Gates", correct : false},
        {text : "Mark Zuckerberg", correct : false},
      ]
    }
]
const quizNumber = questions.length;
const startBtn = document.getElementById("start-Btn");
const nextBtn = document.querySelector(".next-div");
const answerDisplay = document.querySelector("#answer-display");
const questionDisplay = document.getElementById("question-display")

let currentQuestionIndex;
let score;
let currentQuestion;

 function startQuiz(){
  console.log("Star Quiz");
  startBtn.style.display = "none";
  nextBtn.style.display = "none";
  score = 0;
  currentQuestionIndex = 0;
  showQuestions();
}

function showQuestions() {
  console.log("inside the show questions" );
  currentQuestion = questions[currentQuestionIndex];
  questionDisplay.innerHTML = currentQuestion.question
  answerDisplay.innerHTML = "";
  currentQuestion.answers.forEach((answer, index) =>{
    const button = document.createElement('button')
    button.innerHTML = answer.text;
    button.classList.add('answer-button');
    button.addEventListener( 'click', () =>{
      console.log("you entered the event listener before the if");
      
      

      questionHandler(answer.correct);
    });
    answerDisplay.appendChild(button);
    
        
  });
}


function questionHandler(isCorrect){
  if(currentQuestionIndex === questions.length){
    console.log("question handler : o score e o index devem tar =" );
    return;
  }
  if(isCorrect){
    score++;
  }
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length){
    showQuestions();
    
  }else {
    showScore(score);
  }
};

function showScore(score){
  nextBtn.style.display = "block";

  console.log ("inside the showScore and the current score is :" + score);
  const div = document.createElement ('h2');
  answerDisplay.appendChild(div);
  div.innerHTML="Your Score: " + score + "/" + questions.length;
  
  nextBtn.addEventListener("click", startQuiz);
}
