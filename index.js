const inquirer = require('inquirer');
const jest = require('jest');
const fs = require('fs');
const generateHTML = require('./src/template')
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern')


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
        const manager = new Manager(input.name, input.id, input.email, input.officeNumber)
        if (input.newEmployee == 'Engineer') {
            createEngineer(input)
        } else if (input.newEmployee == 'Intern') {
            createIntern(input)
        } else if (input.newEmployee == 'No additional employees') {
            console.log(input);
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
            console.log(response);
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
            console.log(response);
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
