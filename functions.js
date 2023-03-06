//todo-js2

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