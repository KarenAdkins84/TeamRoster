const Engineer = require("../lib/Engineer");
const engineer = new Engineer("Karen", "2", "karen@mail.com", "nerakma84");

describe("Engineer class", () => {
    it("new Engineer has 4 properties", () => {
        const engineerProperties = Object.keys(engineer);
        expect(engineerProperties.length).toEqual(4);
    });

    describe("getName()", () => {
        it("returns Engineer name", () => {
            const engineerName = engineer.getName();
            expect(engineerName).toEqual("Karen");
        });
    });

    describe("getId()", () => {
        it("returns Engineer ID", () => {
            const engineerId = engineer.getId();
            expect(engineerId).toEqual("2");
        });
    });

    describe("getEmail()", () => {
        it("returns Engineer email", () => {
            const engineerEmail = engineer.getEmail();
            expect(engineerEmail).toEqual("karen@mail.com");
        });
    });

    describe("getRole()", () => {
        it("returns the string 'Engineer'", () => {
            const engineerRole = engineer.getRole();
            expect(engineerRole).toEqual("Engineer");
        });
    });

    describe("getGithub()", () => {
        it("returns Engineer GitHub username", () => {
            const engineerGithub = engineer.getGithub();
            expect(engineerGithub).toEqual("nerakma84");
        });
    });
});