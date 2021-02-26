const inquirer = require("inquirer");
const fs = require("fs");

function managerQuestions(){
    inquirer 
    .prompt ([
        {
            name: "manager_name",
            type: "input",
            message:"What is the name of the manager?",
        },
        {
            name: "employee_id",
            type: "number",
            message: "What is their employee id number?",
        },
        {
            name:"email",
            type: "input",
            message: "What is their email address?"
        },
        {
            name: "office-number",
            type: "number",
            message: "What is the number of their office?",
        },
        otherEmployeeQuestions()
    ])
};

function otherEmployeeQuestions(){
    inquirer
    .prompt([
        {
            name: "job_title",
            type: "list",
            message: "What type of employee would you like to add?"
            choices: 
        }
    ])
}