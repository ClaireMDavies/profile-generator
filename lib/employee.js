//create class for a base class of Employee
class Employee {
    constructor(answers)
    {
        this.name = answer.name;
        this.id = answers.id;
        this.email = answers.email;
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
    generateHTML()
    {
        var role = this.constructor.getRole();
        return `${role}<h1>${this.name}</h1><h2>${this.id}</h2><h3>${this.email}</h3>`;
    }

}

module.exports = Employee;