const Employee = require("../lib/employee.js");

describe("Employee", () => {
    it("should instantiate the instance of Employee", () => {
        const e = new Employee();
        expect(typeof(e)).toBe("object");
    });

    it("should get name from answers from inquirer", () => {
        const name = "Claire";
        const e = new Employee(name);
        expect(e.name).toBe(name);
    });
    it("should get id from answers from inquirer", () => {
        const testValue = 80;
        const e = new Employee("Foo",testValue);
        expect(e.id).toBe(testValue);
    });
    it("should get email from answers from inquirer", () => {
        const testValue = "test.email@test.co.uk";
        const e = new Employee("Foo", 1, testValue);
        expect(e.email).toBe(testValue)
    });

})