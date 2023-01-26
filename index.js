const inquirer = require('inquirer');
const jest = require('jest');
const fs = require('fs');
// const employee = require('Employee');
// const manager = require('Manager');
// const engineer = require('Engineer');
// const intern = require('Intern')


const confirmInput = (input) => {
    if (input == "") {
        return `Did you mean to leave this blank? Please enter N/A if there is no content for this section.`
    } return true
};

const createTeam = (input) => {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Manager Name:',
            name: 'name',
            validate: confirmInput
        },
        {
            type: 'input',
            message: 'Manager ID:',
            name: 'id',
            validate: confirmInput
        },
        {
            type: 'input',
            message: 'Manager email:',
            name: 'email',
            validate: confirmInput
        },
        {
            type: 'input',
            message: 'Manager office number:',
            name: 'officeNumber',
            validate: confirmInput
        },
        {
            type: 'list',
            message: 'Would you like to add a new team member?',
            name: 'newEmployee',
            choices: ['Engineer', 'Intern', 'No additional employees'],
        },
    ])
    .then((input) => {
        if (input.newEmployee == 'Engineer') {
            createEngineer(input)
        } else if (input.newEmployee == 'Intern') {
            createIntern(input)
        } else if (input.newEmployee == 'No additonal employees') {
            generateHTML(input)
        }
    })
}

function createEngineer (input) {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Engineer Name:',
            name: 'name',
            validate: confirmInput
        },
        {
            type: 'input',
            message: 'Engineer ID:',
            name: 'id',
            validate: confirmInput
        },
        {
            type: 'input',
            message: 'Engineer email:',
            name: 'email',
            validate: confirmInput
        },
        {
            type: 'input',
            message: 'Engineer GitHub:',
            name: 'github',
            validate: confirmInput
        },
        {
            type: 'list',
            message: 'Would you like to add a new team member?',
            name: 'newEmployee',
            choices: ['Engineer', 'Intern', 'No additional employees'],
        },
    ]    )
    .then((input) => {
        if (input.newEmployee == 'Engineer') {
            createEngineer(input)
        } else if (input.newEmployee == 'Intern') {
            createIntern(input)
        } else if (input.newEmployee == 'No additonal employees') {
            generateHTML(input)
        }
    })
}

function createIntern (input) {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Intern Name:',
            name: 'name',
            validate: confirmInput
        },
        {
            type: 'input',
            message: 'Intern ID:',
            name: 'id',
            validate: confirmInput
        },
        {
            type: 'input',
            message: 'Intern email:',
            name: 'email',
            validate: confirmInput
        },
        {
            type: 'input',
            message: 'Intern school:',
            name: 'school',
            validate: confirmInput
        },
        {
            type: 'list',
            message: 'Would you like to add a new team member?',
            name: 'newEmployee',
            choices: ['Engineer', 'Intern', 'No additional employees'],
        },
    ]    )
    .then((input) => {
        if (input.newEmployee == 'Engineer') {
            createEngineer(input)
        } else if (input.newEmployee == 'Intern') {
            createIntern(input)
        } else if (input.newEmployee == 'No additonal employees') {
            generateHTML(input)
        }
    })
}
createTeam()
// const generateManager = ({}) =>
// `HTML manager container`;

// const generateEngineer = ({}) =>
// `HTML engineer contaner`;

// const generateIntern = ({}) =>
// `HTML intern container`;

// const generateHTML = ({}) =>
// `HTML base frame with ${generateManager}, ${Engineer}, ${Intern}
