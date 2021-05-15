const Engineer = require("../lib/Engineer");

describe("Github account", () => {
  it("Can set Github account", () => {
    const github = "GitHubUser";
    const employee = new Engineer("Bella", "0704", "Belle@gmail.com", github);
    expect(employee.github).toBe(github);
    });
});

describe("getRole", () => {
  it("Can get role via getRole()", () => {
    const role = "Engineer";
    const employee = new Engineer("Bella", "0704", "Bella@gmail.com", "GithubUser");
    expect(employee.getRole()).toBe(role);
    });
});

describe("getGithub", () => {
  it("Can get github username via getGithub()", () => {
    const github = "GitHubUser";
    const employee = new Engineer("Bella", "0704", "Bella@gmail.com", github);
    expect(employee.getGithub()).toBe(github);
    });
});