//required
const inquirer = require('inquirer');
const fs = require('fs')
const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern');
const generator = require('./src/templates.js')


//set up array of all the employees
let empArray = [];

//set up array of questions for each role in the company
const mgrQuest = [
    {
        type: 'input',
        message: `What is the Team Manager's name?`,
        name: 'name',
    },
    {
        type: 'number',
        message: `What is the Team Manager's employee ID number?`,
        name: 'id',
                   
    },
    {
        type: 'input',
        message: `What is the Team Manager's e-mail address?`,
        name: 'email',
    },
    {
        type: 'number',
        message: `What is the Team Manager's office number?`,
        name: 'officeNumber',
    },
    {
        type: 'list',
        message: `Would you like to add any more Team Members?`,
        choices: ['Engineer', 'Intern', 'Finish'],
        name: 'addMore',
    },
]

const engQuest = [
    {
        type: 'input',
        message: `What is the Engineer's name?`,
        name: 'name',
    },
    {
        type: 'number',
        message: `What is the Engineer's employee ID number?`,
        name: 'id',
    },
    {
        type: 'input',
        message: `What is the Engineer's e-mail address?`,
        name: 'email',
    },
    {
        type: 'input',
        message: `What is the Engineer's GitHub username?`,
        name: 'gitHub',
    },
    {
        type: 'list',
        message: `Would you like to add any more Team Members?`,
        choices: ['Engineer', 'Intern', 'Finish'],
        name: 'addMore',
    },
]

const intQuest = [
    {
        type: 'input',
        message: `What is the Intern's name?`,
        name: 'name',
    },
    {
        type: 'number',
        message: `What is the Intern's employee ID number?`,
        name: 'id',
    },
    {
        type: 'input',
        message: `What is the Intern's e-mail address?`,
        name: 'email',
    },
    {
        type: 'input',
        message: `What is the Intern's school?`,
        name: 'school',
    },
    {
        type: 'list',
        message: `Would you like to add any more Team Members?`,
        choices: ['Engineer', 'Intern', 'Finish'],
        name: 'addMore',
    },
]

//initial function to build employees
function init(questArray) {
    inquirer.prompt(questArray).then((response) => {
        empArray.push(new Manager(response.name, response.id, response.email, response.officeNumber));
        switch(response.addMore) {
            case 'Engineer':
                engFunc(engQuest);
                return;
            case 'Intern':
                engFunc(intQuest);
                return;
            case 'Finish':
                console.log(empArray);
                console.log(empArray[0].getRole())
                console.log(empArray[0].name)
                generateHTML(empArray);
                 return;
            default:
                console.log('Invalid response. Team creation terminated. Previous entries saved. Self-destruct program initiated.');
        }
    })
};

function engFunc(engQuest) {
    inquirer.prompt(engQuest).then((response) => {
        empArray.push(new Engineer(response.name, response.id, response.email, response.gitHub));
        switch(response.addMore) {
            case 'Engineer':
                engFunc(engQuest);
                return;
            case 'Intern':
                engFunc(intQuest);
                return;
            case 'Finish':
                console.log(empArray);
                console.log(empArray[0].getRole())
                generateHTML(empArray);
                 return;
            default:
                console.log('Invalid response. Team creation terminated. Previous entries saved.');
        }
    })
}

function intFunc(intQuest) {
    inquirer.prompt(intQuest).then((response) => {
        empArray.push(new Intern(response.name, response.id, response.email, response.school));
        switch(response.addMore) {
            case 'Engineer':
                engFunc(engQuest);
                return;
            case 'Intern':
                engFunc(intQuest);
                return;
            case 'Finish':
                console.log(empArray);
                console.log(empArray[0].getRole())
                generateHTML(empArray);
                 return;
            default:
                console.log('Invalid response. Team creation terminated. Previous entries saved.');
        }
    })
}

//function to initialize app
init(mgrQuest);