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

let answers = []
threeMoreQuestions()
pushIntoArray(answers)
checkInvalid(answers)
printAnswers(answers)