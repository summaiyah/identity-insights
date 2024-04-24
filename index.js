#! /usr/bin/env node
import inquirer from "inquirer";
let answer = await inquirer.prompt([
    {
        name: "q1",
        message: "Type in your full name?",
        type: "input"
    },
    {
        name: "q2",
        message: "what is your gender?",
        type: "list",
        choices: ["male", "female"]
    },
    {
        name: "q3",
        message: "what is your birth year?",
        type: "number"
    },
    {
        name: "q4",
        message: "what is your location?",
        type: "list",
        choices: ["Asia", "Europe", "America", "Africa"]
    }
]);
console.log(`Hello ${answer.q1} ,you are a ${answer.q2} ,your birth year is ${answer.q3} and your location is ${answer.q4}`);
