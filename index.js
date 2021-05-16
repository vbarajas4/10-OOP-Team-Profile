const inquirer = require ("inquirer");       
const fs = require("fs");

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const {engineercard, interncard, managercard, mainHTML} = require("./scr/generateHTML");

const employeesArray = [];

function startHtml(){
  const Htmlfile = mainHTML(employeesArray.join(""))
  fs.writeFile("./dist/index.html", Htmlfile, err => err ? console.log(err) : console.log('success'));
};

function addEmployee() {
    inquirer.prompt([{
      type: "list",
      message: "Please Select Employee Role",
      choices: [
        "Engineer",
        "Intern",
        "Manager"
      ],
      name: "role"
    }])

    .then(({role}) => {
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
      type: "input",
      message: "Enter employee's name",
      name: "name"
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

    .then((response) => {
        console.log(response)
        console.log(role)

        let employee;
        let card;
        if (role === "Engineer") {
            employee = new Engineer (response.name, response.id, response.email, response.roleInfo)
            card = engineercard(employee);
        } else if (role === "Manager") {
            employee = new Manager (response.name, response.id, response.email, response.roleInfo)
            card = managercard(employee);
        } else if (role === "Intern") {
            employee = new Intern (response.name, response.id, response.email, response.roleInfo)
            card = interncard(employee);
        }


        employeesArray.push(card)

            if (response.moreEmployee === "yes") {
                addEmployee();
            } else {
                startHtml();
            }
        });
    
    })
}
addEmployee();