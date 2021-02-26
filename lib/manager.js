const Employee = require('./employee.js');

//create class for Manager
class Manager extends Employee {
    constructor(answers) {

        super(answers);

        this.officeNumber = answers.officeNumber;
    }

    getRole() {
        return "manager";
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    generateHtml() {
        let html = Employee.prototype.generateHtml.call(this);

        return html + `<h4>${this.officeNumber}</h4>`;
    }

}

module.exports = Manager;