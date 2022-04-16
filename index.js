// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input

//Taken from Jungs Demo Video
const questions = [
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?",
    },
    {
        type: "input",
        name: "email",
        message:"What is your email address?",
    },
    {
        type: "input",
        name:"projectname",
        message: "What is your project's name?",
    },
    {
        type: "input",
        name: "description",
        message: "Please write a short description of your project.",
    },
    {
        type: "list",
        name: "license",
        message: "What kind of license should your project have?",
     // Needs Options
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BDS 3", "None"],
    },
    {
        type: "input",
        name: "dependencies",
        message: "What command should be run install dependencies?",
    },
    {
        type: "input",
        name: "test",
        message: "What command should be run to run tests?",
    },
    {
        type: "input",
        name: "fyi",
        message: "What does the user need to know about using the repo?",
    }, 
    {
        type: "input",
        name: "fyicontribute",
        message: "What does the user need to know about contributing to the repo?",
    },



];


// TODO: Create a function to write README file
//Ref. activity 9.20 (Stu_Inquirer)

// fs.appendfile creates a file if one is not there, otherwise I would have used fs.writetofile. 

inquirer
.prompt(questions)

.then((data) => {
    const filename = `readme.md`;

    fs.appendFile(filename,  JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log("You've created a readme!")
    );
  });



// // // TODO: Create a function to initialize app
// function init() {}

// // // Function call to initialize app
// // init();
