const Employee = require("./employee.js");

//Create class for intern
class Intern extends Employee {
    constructor(answers) {

        super(answers);

        this.school = answers.school;
    }

    getRole() {
        return "intern";
    }

    getSchool() {
        return this.school;
    }

    generateHtml() {
        let html = Employee.prototype.generateHtml.call(this);

        return html + `<h4>${this.school}</h4>`;
    }

}
module.exports = Intern;