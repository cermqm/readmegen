var inquirer = require("inquirer");
var fs = require("fs");
const Choices = require("inquirer/lib/objects/choices");

inquirer
    .prompt([{
            type: "input",
            message: "What is your name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is your project title",
            name: "title"
        },
        {
            type: "input",
            message: "What is the project description?",
            name: "description"
        }
        // },
        // {
        //     type: "input",
        //     message: "What are the installation instructions?",
        //     name: "install"
        // },
        // {
        //     type: "input",
        //     message: "What is the usage information?",
        //     name: "usage"
        // },
        // {
        //     type: "input",
        //     message: "What are the contribution guidelines?",
        //     name: "contribution"
        // },
        // {
        //     type: "input",
        //     message: "What are the test instructions?",
        //     name: "test"
        // },
        // {
        //     type: "list",
        //     message: "Select license for project",
        //     name: "languages",
        //     choices: [
        //         "MIT",
        //         "jQuery",
        //         "HTML"
        //     ]
        // },
        // {
        //     type: "input",
        //     message: "What is your github username?",
        //     name: "github"
        // },
        // {
        //     type: "input",
        //     message: "What is your email address",
        //     name: "email"
        // }
    ])
    .then(function(response) {

        const os = require('os');
        const fs = require('fs-extra');

        const file = 'readme.md';
        const options = { flag: 'a' };

        async function writeToFile(text) {
            await fs.outputFile(file, `${text}${os.EOL} \n`, options);
        }

        let namevar = response.name + " is the developer of this project.";
        writeToFile(namevar);
        let titlevar = "The title of this project is " + response.title;
        writeToFile(titlevar);
        // writeToFile('Third line');
        // writeToFile('Fourth line');
        // writeToFile('Fifth line');

        // if ((response.name == "") || (response.title == "") || (response.description == "")) {
        //     console.log("You have to enter the required data...");
        //     return;
        // } else {
        //     console.log("Success!");
        //     console.log("response = ", response);
        //     fs.writeFile("response.txt", response.name, function(err) {
        //         if (err) {
        //             return console.log(err);
        //         }
        //     });
        // }
    });