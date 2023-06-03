#! /usr/bin/env node
import inquirer from "inquirer";
import figlet from "figlet"

// welcome
console.log(figlet.textSync("Number Guessing Game"));

const randomNo = Math.floor(Math.random() * 10)
// console.log(randomNo);

// type alias
type ansType = {
    userGuess : number
}

const answer : ansType = await inquirer.prompt([
    {
        type: "number",
        name: "userGuess",
        message: "Write your Guess b/w 1 to 10"   
    }
])

const {userGuess} = answer;

console.log ("userGuess = ", userGuess ,"Random no. generated is = ", randomNo)

if (userGuess === randomNo){
    console.log ("Wao, Your answer is correct & You Win!")
}
else{
    console.log("Better luck next time")
}
