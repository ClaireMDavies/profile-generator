const Employee = require("./employee.js");

//Create class for engineer
class Engineer extends Employee {
    constructor(answers) {

        super(answer);

        this.githubProfile = answers.github;
    }

    getRole() {
        return "engineer";
    }

    getGithub() {
        return this.github;
    }

    generateHtml() {
        let html = Employee.prototype.generateHtml.call(this);

        return html + `<h4>${this.github}</h4>`;
    }

}

module.exports = Engineer;