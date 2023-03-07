'use strict'

// todo-js

let name = prompt("What is your name?");
console.log("Welcome ",name);

let gender = prompt("What is your gender? (male or female)");
gender.toLowerCase() == "male" || gender == "female" ? console.log("Gender= ",gender.toLowerCase()) : console.log("Invalid gender");

let age = prompt("What is your age?");
age > 0 ? console.log("Age= ",age) : alert("Age cannot be less than or equal to zero.");

let skip = confirm("Do you want to skip the welcoming message?");
console.log("skipped welcoming message= ",skip);
if (!skip) { gender.toLowerCase() == "male" ? alert("Welcome, Mr. " + name + "!") : gender.toLowerCase() == "female" ? alert("Welcome, Ms. " + name + "!") : alert("Welcome, " + name + "!"); }

//todo-js2
const answers = []
let questionOne = ""
let questionTwo = ""
let questionThree = ""

function threeMoreQuestions(){
    questionOne = prompt("Do you like Mansaf? (Yes/No)")
    questionTwo = prompt("What car do you drive? (Yes/No)")
    questionThree = prompt("Do you pray? (Yes/No)")
}

function pushIntoArray(answers) {
    answers.push(questionOne)
    answers.push(questionTwo)
    answers.push(questionThree)
    return answers
}

function checkInvalid(answers){
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === '') {
          answers[i] = 'invalid';
        }
    }  
}

function printAnswers(answers) {
    console.log('Answers are =');
        for (let i = 0; i < answers.length; i++) {
          console.log(answers[i]);
        }
}
threeMoreQuestions()
pushIntoArray(answers)
checkInvalid(answers)
printAnswers(answers)