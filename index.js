var readlineSync = require('readline-sync');
var score=0;
var userAnswer= readlineSync.question('May I have your name? ');
console.log("welcome to CLI QUIZ where you can test your interest on automobile"+userAnswer);


function play(question,answer){
  var userAnswer=readlineSync.question(question);
    if(userAnswer==answer){
      console.log("Right");
      score++;
      console.log(score);
    }
  else{
      
      console.log("WRONG");
      score--;
      console.log(score);
    
  }
}



var questions=[{
  question: "What do you like BIKE Or CAR",
  answer: "CAR"
  
},
{
  question: "your favorite car ",
  answer: "audi"
},

{ question: "Price of your favourite car ",
    answer: "1cr"},
               
{ question: "Your favourite Bike ",
    answer: "Royal-Enfield"},
               
                
{ question: "Price of your favourite Bike ",
    answer: "3lakh"}];


for(var i=0;i<questions.length;i++){
  var currentQuestions=questions[i];
  play(currentQuestions.question,currentQuestions.answer);
  console.log("your score "+score);
}