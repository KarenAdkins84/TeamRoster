const Intern = require("../lib/Intern");
const intern = new Intern("Hayden", "3", "hayden@mail.com", "Vanderbilt");

describe("Intern class", () => {
    it("new Intern has 4 properties", () => {
        const internProperties = Object.keys(intern);
        expect(internProperties.length).toEqual(4);
    });

    describe("getName()", () => {
        it("returns Intern name", () => {
            const internName = intern.getName();
            expect(internName).toEqual("Hayden");
        });
    });

    describe("getId()", () => {
        it("returns Intern ID", () => {
            const internId = intern.getId();
            expect(internId).toEqual("3");
        });
    });

    describe("getEmail()", () => {
        it("returns Intern email", () => {
            const internEmail = intern.getEmail();
            expect(internEmail).toEqual("hayden@mail.com");
        });
    });

    describe("getSchool()", () => {
        it("returns Intern school", () => {
            const internSchool = intern.getSchool();
            expect(internSchool).toEqual("Vanderbilt");
        });
    });

    describe("getRole()", () => {
        it("returns the string 'Intern'", () => {
            const internRole = intern.getRole();
            expect(internRole).toEqual("Intern");
        });
    });
});