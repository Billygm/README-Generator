// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your project title?",
        name: "title"
    },
    {
        type: "input",
        message: "Input a desciption of your application",
        name: "description"
    },
    {
        type: "input",
        message: "Input the installation instructions",
        name: "installation"
    },
    {
        type: "input",
        message: "Input any important usage information",
        name: "usage"
    },
    {
        type: "input",
        message: "Input the contrubution guidelines",
        name: "contributing"
    },
    {
        type: "input",
        message: "Input test instructions",
        name: "tests"
    },
    {
        // type: "input",
        // message: "?",
        // name: "license"
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "user"
    },
    {
        type: "input",
        message: "What is your Email address?",
        name: "email"
    },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(answers => {

            console.log(answers);
            const myMarkdown = markdown(answers);

        })
}

// Function call to initialize app
init();
