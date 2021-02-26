const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/employee.js");
const Engineer = require("./lib/engineer.js");
const Intern = require("./lib/intern.js");

var employeeQuestions = [
    {
        name: "name",
        type: "input",
        message: "What is ${getRole()}'s name?"
    },
    {
        name: "id",
        type: "input",
        message: "What is their employee id?"
    },
    {
        name: "email",
        type: "input",
        message: "What is their email address?"
    }];
    


var managerQuestions = employeeQuestions.slice();

    managerQuestions.push({
        name:"officeNumber",
        type:"input",
        message: "What is the manager's office number?"
    });

var engineerQuestions = employeeQuestions.slice();

    engineerQuestions.push({
        name:"github",
        type:"input",
        message: "What is the engineer's github profile?"
    });

var internQuestions = employeeQuestions.slice();

    internQuestions.push({
        name:"school",
        type:"input",
        message: "What is the intern's school?"
    });

var addEmployee = [
    {
    name:"addEmployee",
    type:"list",
    message: "What employee type needs adding?",
    choices: ["Engineer", "Intern", "No more employees to add"],
    }
]

var employeeArray = []
// create function initate the input sequence
function askForInput() {
    
    if (employeeArray === []) {
        inquirer.prompt(managerQuestions).then((answers)=> {

            var manager = new Manager(answers);
            employeeArray.push(manager);

            addEmployees()



        }
        
        )
    }
}

//create function to ask for additional employees (need switch statement)
function addEmployees()
{

}

//create function to run engineer questions

//create function to run intern questions

//create function to generate html

       