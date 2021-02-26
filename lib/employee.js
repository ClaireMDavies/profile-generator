const inquirer = require ("inquirer");

//create class, questions and methods for a base class of Employee
class Employee {
    constructor(name, id, email)
    {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
        return "employee";
    }
    getQuestions(){
        return [
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
        }
            
        ]
    }
    generateHTML()
    {
        var role = this.constructor.getRole();
        return `${role}<h1>${this.name}</h1><h2>${this.id}</h2><h3>${this.email}</h3>`;
    }

}

module.exports = Employee;
