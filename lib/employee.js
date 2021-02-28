//create class for a base class of Employee
class Employee {
    constructor(answers)
    {
        this.name = answers.name;
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
        return "Employee";
    }
}

module.exports = Employee;