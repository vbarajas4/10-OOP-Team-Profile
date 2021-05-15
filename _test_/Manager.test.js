const Manager = require("../lib/Manager");

describe("office number", () => {
    it("Can set office number", () => {
        const officeNumber = "101";
        const employee = new Manager("Shannon", "4321", "Sha@gmail.com", officeNumber);
        expect(employee.officeNumber).toBe(officeNumber);
    });
});
describe("getRole", () => {
    it("getRole() should return Manager", () => {
        const role = "Manager";
        const employee = new Manager("Shannon", "4321", "Sha@gmail.com", "101");
        expect(employee.getRole()).toBe(role);
    });
});
describe("office number", () => {
    test("Can get office number via getOffice()", () => {
        const officeNumber = "101";
        const employee = new Manager("Shannon", "4321", "Sha@gmail.com", officeNumber);
        expect(employee.getOfficeNumber()).toBe(officeNumber);
    });
});
