var readLineSync=require('readline-sync');
var score=0; //score initalized

var questions =[{
    question:"When is rainy season in India ?",
    answer: "June"
    },{
    question:"Are you studying IT or CS ?",
    answer: "Yes"
    },{
    question:"Are you working ?",
    answer: "yes"
    },{
    question:"Which is your favourtie color ?",
    answer: "red"
    },{
    question:"Did you had your lunch ?",
    answer: "No"
    }];

    function welcome() {
        var userName = readLineSync.question("What's your name? ");
       
         console.log("Welcome "+ userName + " to CLI quiz");
       }
              
       // quiz function
       function quiz(question, answer) {
         var userAnswer = readLineSync.question(question);
       
         if (userAnswer === answer) { 
           console.log("right!");
           score = score + 1;
           
         } else {
           console.log("wrong!");
          
         }
       
         console.log("current score: ", score);
         console.log("-------------")
       }
       
       function game() {
         for (var i=0; i<questions.length; i++) {
           var currentQuestion = questions[i];
           quiz(currentQuestion.question, currentQuestion.answer)
           
         }
       }

welcome();
game();