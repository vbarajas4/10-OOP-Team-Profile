const Employee = require("../lib/Employee") 

describe("Employee", () => {
    it("Can create Employee object", () => {
        const employee = new Employee();
        expect(typeof(employee)).toBe("object")
    });

     it("Can set name", () => {
        const name = "John";
        const employee = new Employee(name);
        expect(employee.name).toBe(name);
    });
    it("Can set id", () => {
        const id = "0123";
        const employee = new Employee("John", id);
        expect(employee.id).toBe(id);

    });
    it("Can set email", () => {
        const email = "JDoe@gmail.com";
        const employee =new Employee("John", "0123", email);
        expect(employee.email).toBe(email);

    });

describe("getName", () => {
     it("Can get name via getName()", () => {
      const name = "Maria";
      const employee = new Employee(name);  
      expect(employee.getName()).toBe(name);
     });
 });
    
describe("getId", () => {
    it("Can get id via getId()", () => {
      const id = "0213";
      const employee = new Employee("Maria", id);  
        expect(employee.getId()).toBe(id);
     });
 });
    
describe("getEmail", () => {
     it("Can get email via getEmail()", () => {
         const email = "xyz@gmail.com";
         const employee = new Employee("Maria", "0213", email);
         expect(employee.getEmail()).toBe(email);
     });

    });
    
describe("getRole", () => {
     it("getRole() should return Employee", () => {
        const role = "Employee";
        const employee = new Employee("Maria", "0213", "xyz@gmail.com");
        expect(employee.getRole()).toBe(role);
    });
 });

});
