var inquirer = require("inquirer");
var fs = require("fs");
const Choices = require("inquirer/lib/objects/choices");

inquirer
    .prompt([{
            type: "input",
            message: "What is your name? - default - Michael A. Mink",
            name: "name"
        },
        {
            type: "input",
            message: "What is your project title?",
            name: "title"
        },
        {
            type: "input",
            message: "What is the project description?",
            name: "description"
        },
        {
            type: "input",
            message: "What are the installation instructions? default = Download code, run index.html if web based, run npm install, then run node index.js if node based.",
            name: "install"
        },
        {
            type: "input",
            message: "What is the usage information?",
            name: "usage"
        },
        {
            type: "input",
            message: "What are the contribution guidelines? Default = To suggest improvements email or log an issue under the repo - github.",
            name: "contribution"
        },
        {
            type: "input",
            message: "What are the test instructions?",
            name: "test"
        },
        {
            type: "list",
            message: "Select license for project",
            name: "licenses",
            choices: [
                "MIT",
                "jQuery",
                "BootStrap - MIT",
                "Apache 2.0",
                "Eclipse Public 1.0",
                "Mozilla Public 2.0"
            ]
        },
        {
            type: "input",
            message: "What is your github username? - default = cermqm",
            name: "github"
        },
        {
            type: "input",
            message: "What is your email address? - default = mmink@michaelamink.com",
            name: "email"
        }
    ])
    .then(async(response) => {

        const os = require('os');
        const fs = require('fs-extra');

        const file = 'readme.md';
        const options = { flag: 'a' };

        async function writeToFile(text) {
            console.log("options in function = ", options);
            console.log("text in function = " + text);
            await fs.outputFile(file, `${text}${os.EOL}${os.EOL}`, options);
        }
        // Setting defaults
        console.log(response.name)
        console.log(response.github)
        console.log(response.email)

        if (response.name == "") { response.name = "Michael A. Mink" };
        if (response.github == "") { response.github = "[GitHub](https://github.com/cermqm)" };
        if (response.email == "") { response.email = "<mmink@michaelamink.com>" };
        if (response.install == "") { response.install = "Download code, run index.html if web based, run npm install, then run node index.js if node based." };
        if (response.contribution == "") { response.contribution = "To suggest improvements email " + response.email + " or log an issue under the specific project in the GitHub repo - \n" + response.github };
        if (response.licenses == "") { response.license = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)" };
        if (response.licenses == "MIT") { response.license = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)" };
        if (response.licenses == "jQuery") { response.license = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)" };
        if (response.licenses == "BootStrap - MIT") { response.license = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)" };
        if (response.licenses == "Apache 2.0") { response.license = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)" };
        if (response.licenses == "Eclipse Public 1.0") { response.license = "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)" };
        if (response.licenses == "Mozilla Public 2.0") { response.license = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)" };

        console.log(response.name)
        console.log(response.github)
        console.log(response.email)
        console.log(response.install)
        console.log(response.contribution)
        console.log(response.licenses)

        let readmetext = `## The title of this project is ${response.title}.
        
License - ${response.license}

## Table of Contents 
* [Installation](#Installation-instructions) 
* [Usage](#Usage) 
* [License](#License)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](Questions)


### - Installation Instructions
    ${response.install}

### - Usage
    ${response.usage}

### - License
    The license used for this project is the ${response.licenses} license.

### - Contributing
    ${response.contribution}

### - Tests
    ${response.test}

### - Questions
    For questions contact ${response.name} at the following email -

${response.email}

    You can also log an issue under the specific project on GitHub - 

${response.github}
`;
        await writeToFile(readmetext);

    });