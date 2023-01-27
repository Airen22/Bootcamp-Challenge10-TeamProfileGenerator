const fs = require('fs');
const inquirer = require('inquirer');
const jest = require('jest');
const generateHTML = require('./src/template');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const teamArr = [];

const confirmInput = (input) => {
    if (input == "") {
        return `Did you mean to leave this blank? Please enter N/A if there is no content for this section.`
    } return true
};

const createTeam = () => {
    inquirer.prompt([
        {
            type: 'list',
            message: 'Select team member role?',
            name: 'role',
            choices: ['Manager', 'Engineer', 'Intern'],
        },])
        .then((input) => {
            let newRole = input.role
            inquirer.prompt([
        {
            type: 'input',
            message: `${newRole}'s name:`,
            name: 'name',
            validate: confirmInput
        },
        {
            type: 'input',
            message: `${newRole}'s ID:`,
            name: 'id',
            validate: confirmInput
        },
        {
            type: 'input',
            message: `${newRole}'s email:`,
            name: 'email',
            validate: confirmInput
        },
    ])
    .then(function (input) {
        let newName = input.name;
        let newId = input.id;
        let newEmail = input.email;
        if (newRole == 'Manager') {
            createManager(newName, newId, newEmail, newRole)
        } else if (newRole == 'Engineer') {
            createEngineer(newName, newId, newEmail, newRole)
        } else if (newRole == 'Intern') {
            createIntern(newName, newId, newEmail, newRole)
        }
        
function createManager (newName, newId, newEmail) {
    inquirer.prompt([
        {
            type: 'input',
            message: `Manager's office number:`,
            name: 'officeNumber',
            validate: confirmInput
        },        
        {
            type: 'list',
            message: 'Would you like to add a new team member?',
            name: 'newEmployee',
            choices: ['Yes', 'No'],
        },
    ])
    .then((input) => {
    const newMember = new Manager(newName, newId, newEmail, input.officeNumber)
    teamArr.push(newMember)
        if (input.newEmployee == 'No') {
            // console.log(teamArr)
            generateHTML(teamArr)
        } else {
            createTeam();
        }
    })
}
function createEngineer (newName, newId, newEmail) {
    inquirer.prompt([
        {
            type: 'input',
            message: `Engineer's GitHub:`,
            name: 'github',
            validate: confirmInput
        },
        {
            type: 'list',
            message: 'Would you like to add a new team member?',
            name: 'newEmployee',
            choices: ['Yes', 'No'],
        },
    ]    )
   .then((input) => {
    const newMember = new Engineer(newName, newId, newEmail, input.github)
    teamArr.push(newMember)
        if (input.newEmployee == 'No') {
            // console.log(teamArr)
            generateHTML(teamArr)
        } else {
            createTeam();
        }
    })
}

function createIntern (newName, newId, newEmail) {
    inquirer.prompt([
        {
            type: 'input',
            message: `Intern's school:`,
            name: 'school',
            validate: confirmInput
        },
        {
            type: 'list',
            message: 'Would you like to add a new team member?',
            name: 'newEmployee',
            choices: ['Yes', 'No'],
        },
    ]    )
   .then((input) => {
    const newMember = new Intern(newName, newId, newEmail, input.school)
    teamArr.push(newMember)
        if (input.newEmployee == 'No') {
            // console.log(teamArr)
            generateHTML(teamArr)
        } else {
            createTeam();
        }
    })
}
})
})
}
createTeam()
