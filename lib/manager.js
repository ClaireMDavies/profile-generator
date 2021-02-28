const Employee = require('./employee.js');

//create class for Manager
class Manager extends Employee {
    constructor(answers) {

        super(answers);

        this.officeNumber = answers.officeNumber;
    }

    getRole() {
        
        return "Manager";
    }

    getOfficeNumber() {
        
        return this.officeNumber;
    }

    generateHtml() {
        return `
        <div class="employee ${this.getRole().toLowerCase()}">
            <div class="employee-role">${this.getRole()}</div>
            <div class="name">Name: ${this.name}</div>
            <div class="employee-id">ID: ${this.id}</div>
            <div class="email">Email: <a href="mailto:${this.email}">${this.email}</a></div>
            <div class="special-info">Office number: ${this.getOfficeNumber()}</div>
        </div>`;
    }

}

module.exports = Manager;