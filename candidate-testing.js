/*
const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// done 1.1a: Define candidateName // 
let candidateName = "";
// this is how you initialize to an empty string


// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = " ";
let questions;
let correctAnswers;
let candidateAnswers;


function askForName() {
  candidateName = input.question("Enter your name: ");

  // done 1.1b: Ask for candidate's name //

}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  candidateAnswer = input.question("Who was the first American woman in space? ");
  
}
askQuestion();
console.log(candidateAnswer);

function gradeQuiz(candidateAnswers) {
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 


  let grade;
  

  return grade;
}

function runProgram() {
  askForName();
  // done 1.1c: Ask for candidate's name //
  console.log("Hi " + candidateName);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}



const correctAnswer = "Sally Ride";
let question = input.question("Who was the first American woman in space? ");
const candidateAnswer = question




console.log("Candidate Name: " + candidateName);

console.log("1) Who was the first American woman in space?");
console.log ("Your Answer: " + candidateAnswer);
console.log ("Correct Answer: " + correctAnswer);
console.log();

console.log("2) True or false: 5000 meters = 5 kilometers.");
console.log ("Your Answer: " + candidateAnswer);
console.log ("Correct Answer: " + correctAnswer);
console.log();




// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};
*/ 

/// starting new code 

const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = '';
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //

let questions = [
  "Who was the first American woman in space? ",
  "True or false: 5 kilometer == 5000 meters? ", 
  "(5 + 3)/2 * 10 = ? ", 
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
  "What is the minimum crew size for the ISS? "
  ];

let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"]
let candidateAnswers = [];


let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = " ";

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("Enter your name: ");
  console.log("Hi " + candidateName + "!");
  console.log("Candidate Name: " + candidateName);
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for (let i=0; i<questions.length; i++) {
    let candidateInput = input.question(`${i+1}) ${questions[i]}`);

    //maintenance code - keeps the correct order
    candidateAnswers.push(candidateInput);
    console.log(`Your Answer: ${candidateAnswers[i]}`);
    console.log(`Correct Answer: ${correctAnswers[i]}\n`);
  }
}
// within those parenthesis you're defining 3 sepearte things 1) some way of the variable is keeping track of how many times you're going through the loop - let i=0 - only has meaning in this for loop not outside of it - i want to go through it for however many questions there are - usually starts at 0 because that's the first index in your array 2) you're comparing it to how many questions are. this is when its valid to be in this loop, as soon as it goes over index 4 (aka 5) it's not valid anymore - i is only valid when it's less than the length of the array. as soon as that values to something is false 3) add one - thats what makes it go through the index. The i would never change if it didn't have this. 

//ask questions for 
//focus on asking each question one at a time, then storing the answer one at a time, define the loop, ask the question, get the response 



function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  let points = [ ];
  // let pointsScored = [ ];
  for (let i=0; i<candidateAnswers.length; i++) {
    if (candidateAnswers[i].toUpperCase() === correctAnswers[i].toUpperCase()){
      points ++;
    }
    }
      // let pointsScored = points[i];
      // let total = 0;
      // for (let i = 0; i < pointsScored.length; i++) {
      // total += pointsScored[i]; 

  let grade = (points / questions.length * 100);
  console.log(`>>> Overall Grade: ${grade}% (${points} of ${questions.length} responses correct) <<<`);
  if (grade >= 80) {
    console.log(`>>> Status: PASSED <<<`);
  } else {
    console.log (`>>> Status: FAILED <<<`); 
  }

}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};