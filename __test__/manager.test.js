const Manager = require("../lib/Manager");
const manager = new Manager("Brian", "4", "brian@mail.com", "21");

describe("Manager class", () => {
    it("new Manager has 4 properties", () => {
        const managerProperties = Object.keys(manager);
        expect(managerProperties.length).toEqual(4);
    });

    describe("getName()", () => {
        it("returns Manager name", () => {
            const managerName = manager.getName();
            expect(managerName).toEqual("Brian");
        });
    });

    describe("getId()", () => {
        it("returns Manager Id", () => {
            const managerId = manager.getId();
            expect(managerId).toEqual("4");
        });
    });

    describe("getEmail()", () => {
        it("returns Manager email", () => {
            const managerEmail = manager.getEmail();
            expect(managerEmail).toEqual("brian@mail.com");
        });
    });

    describe("getOfficeNum()", () => {
        it("returns Manager office number", () => {
            const managerOfficeNum = manager.getOfficeNum();
            expect(managerOfficeNum).toEqual("21");
        });
    });

    describe("getRole()", () => {
        it("returns the string 'Manager'", () => {
            const managerRole = manager.getRole();
            expect(managerRole).toEqual("Manager");
        });
    });
});