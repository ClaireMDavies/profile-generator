const Employee = require("./employee.js");

//Create class for intern
class Intern extends Employee {
    constructor(answers) {

        super(answers);

        this.school = answers.school;
    }

    getRole() {
        return "Intern";
    }

    getSchool() {
        return this.school;
    }

    generateHtml() {
        return `
        <div class="employee ${this.getRole().toLowerCase()}">
            <div class="employee-role">${this.getRole()}</div>
            <div class="name">Name: ${this.name}</div>
            <div class="employee-id">ID: ${this.id}</div>
            <div class="email">Email: <a href="mailto:${this.email}">${this.email}</a></div>
            <div class="special-info">School: ${this.school}</div>
        </div>`;
    }
}

module.exports = Intern;