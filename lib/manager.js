const inquirer = require("inquirer");
const employee = require("./lib.employee.js");

//create extra question for Manager, whilst inheriting questions fom employee class
class Manager extends Employee{
    constructor(name, id, email, officeNumber){

    super(name, id, email);
    
    this.officeNumber = officeNumber;
    }

    static getRole(){
        return "manager";
    }

    getOfficeNumber(){
        return this.officeNumber;
    }

    static getQuestions(){
        let questions = Employee.prototype.getQuestions.call(this);

        questions.push({
            name:"officeNumber",
            type:"input",
            message: "What is the manager's office number?"
        });
        
        return questions;
    } 

    generateHtml(){
        let html = Employee.prototype.generateHtml.call(this);

        return html + `<h4>${this.officeNumber}</h4>`;
    }
    
} 

module.exports = Manager;