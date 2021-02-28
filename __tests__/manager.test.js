const Manager = require("../lib/manager.js");

describe("Manager", () => {

    const answers = [];
    answers.name = "Claire Davies";
    answers.id = "123";
    answers.email = "claire.davies@junitech.com";
    answers.officeNumber = "45";

    const employee = new Manager(answers);

    it("should instantiate the instance of Manager", () => {
        expect(typeof(employee)).toBe("object");
    });

    it("role should be employee", () => {
        expect(employee.getRole()).toBe("Manager");
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

    it("should get office number from answers from inquirer", () => {
        expect(employee.getOfficeNumber()).toBe("45");
    });
});