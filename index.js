const inquirer = require ("inquirer");
       
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const generateHTML = require("./src/generateHTML");

const employeesArray = [];



function addEmployee() {
    inquirer.prompt([{
      type: "input",
      message: "Enter employee's name",
      name: "name"
    },
    {
        type: "list",
        message: "Select employee's role",
        choices: [
          "Engineer",
          "Intern",
          "Manager"
        ],
        name: "role"
    },
    {
      type: "input",
      message: "Enter employee's id",
      name: "id"
    },
    {
      type:"input",
      message: "Enter employee's email address",
      name: "email"
    }])

.then(({name, role, id, email}) => {
    let roleInfo = "";
    if (role === "Engineer") {
        roleInfo = "Github username";
    } else if (role === "Intern") {
        roleInfo = "school name";
    } else {
        roleInfo = "office number";
    }

    inquirer.prompt([{
        type: "input",
        message: `Enter employees's ${roleInfo}`,
        name: "roleInfo"
    },
    {
        type: "list",
        message: "Would you like to add another employee?",
        choices: [
            "yes",
            "no"
        ],
        name: "moreEmployee"
    }])
    
    .then(({roleInfo, moreEmployee}) => {
        const newEmployee;
        if (role === "Engineer") {
            newEmployee = new Engineer(name, id, email, roleInfo);
        } else if (role === "Intern") {
            newEmployee = new Intern(name, id, email, roleInfo);
        } else {
            newEmployee = new Manager(name, id, email, roleInfo);
        }

        employees.push(newEmployee);
        addHTML(newEmployee)
        .then(() => {
            if (moreEmployee === "yes") {
                addEmployee();
            } else {
                finishHtml();
            }
        })

        .then(response => {   
            console.log(response)
            fs.writefile ("./dist/index.html", generateHTML(response), err => err ? console.log(err) : console.log('success'));
            });
    
        })
    })
}
