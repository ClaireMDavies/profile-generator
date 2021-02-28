const Employee = require("./employee.js");

//Create class for engineer
class Engineer extends Employee {
    constructor(answers) {

        super(answers);

        this.githubProfile = answers.githubProfile;
    }

    getRole() {
        return "Engineer";
    }

    getGithub() {
        return this.githubProfile;
    }

    generateHtml() {
        return `
        <div class="employee ${this.getRole().toLowerCase()}">
            <div class="employee-role">${this.getRole()}</div>
            <div class="name">Name: ${this.name}</div>
            <div class="employee-id">ID: ${this.id}</div>
            <div class="email">Email: <a href="mailto:${this.email}">${this.email}</a></div>
            <div class="special-info">gitHub: <a href="https://github.com/${this.githubProfile}">${this.githubProfile}</a></div>
        </div>`;
    }
}

module.exports = Engineer;