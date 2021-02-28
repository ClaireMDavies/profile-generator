const Engineer = require("../lib/engineer.js");

describe("Engineer", () => {

    const answers = [];
    answers.name = "Claire Davies";
    answers.id = "123";
    answers.email = "claire.davies@junitech.com";
    answers.githubProfile = "ClaireMDavies";

    const employee = new Engineer(answers);

    it("should instantiate the instance of Engineer", () => {
        expect(typeof(employee)).toBe("object");
    });

    it("role should be employee", () => {
        expect(employee.getRole()).toBe("Engineer");
    });

    it("should get name from answers from inquirer", () => {
        expect(employee.getName()).toBe("Claire Davies");
    });

    it("should get id from answers from inquirer", () => {
        expect(employee.getId()).toBe("123");
    });

    it("should get email from answers from inquirer", () => {
        expect(employee.getEmail()).toBe("claire.davies@junitech.com");
    });

    it("should get github profile from answers from inquirer", () => {
        expect(employee.getGithub()).toBe("ClaireMDavies");
    });
});