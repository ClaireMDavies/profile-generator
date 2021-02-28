const Employee = require("../lib/employee.js");

describe("Employee", () => {

    const answers = [];
    answers.name = "Claire Davies";
    answers.id = "123";
    answers.email = "claire.davies@junitech.com";

    const employee = new Employee(answers);

    it("should instantiate the instance of Employee", () => {
        expect(typeof(employee)).toBe("object");
    });

    it("role should be employee", () => {
        expect(employee.getRole()).toBe("Employee");
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
});