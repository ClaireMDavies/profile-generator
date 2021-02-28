const Intern = require("../lib/intern.js");

describe("Intern", () => {

    const answers = [];
    answers.name = "Claire Davies";
    answers.id = "123";
    answers.email = "claire.davies@junitech.com";
    answers.school = "High School";

    const employee = new Intern(answers);

    it("should instantiate the instance of Intern", () => {
        expect(typeof(employee)).toBe("object");
    });

    it("role should be employee", () => {
        expect(employee.getRole()).toBe("Intern");
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

    it("should get school from answers from inquirer", () => {
        expect(employee.getSchool()).toBe("High School");
    });
});