const Intern = require("../lib/Intern");

describe("getSchool", () => { 
    it("Can set school via constructor", () => {
        const school  = "UCSD";
        const employee = new Intern("Vanessa", "1219", "vib@gmail.com", school);
        expect(employee.school).toBe(school);
    });
});
describe("getSchool", () => { 
    it("getRole() should return Intern", () => {
        const role  = "Intern";
        const employee = new Intern("Vanessa", "1219", "vib@gmail.com", "UCSD");
        expect(employee.getRole()).toBe(role);
    });
});

describe("getSchool", () => { 
    it("Can get school via getSchool()", () => {
        const school = "UCSD";
        const employee = new Intern("Vanessa", "1219", "vib@gmail.com", school );
        expect(employee.getSchool()).toBe(school);
    });
});