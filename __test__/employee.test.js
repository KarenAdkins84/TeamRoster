const Employee = require("../lib/Employee")
const employee = new Employee("Susan", "1", "suze@mail.com")

describe("class Employee", () => {
    it("new Employee returns 3 properties", () => {
        const employeeProperties = Object.keys(employee);
        expect(employeeProperties.length).toEqual(3);
    });

    describe("getName()", () => {
        it("returns Employee name", () => {
            const employeeName = employee.getName();
            expect(employeeName).toEqual("Susan");
        });
    });

    describe("getId()", () => {
        it("returns Employee Id", () => {
            const employeeId = employee.getId();
            expect(employeeId).toEqual("1");
        });
    });

    describe("getEmail()", () => {
        it("returns Employee email", () => {
            const employeeEmail = employee.getEmail();
            expect(employeeEmail).toEqual("suze@mail.com");
        });
    });

    describe("getRole()", () => {
        it("returns the string 'Employee'", () => {
            const role = employee.getRole();
            expect(role).toEqual("Employee");
        });
    });
});