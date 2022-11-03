const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const createHTML = require("./src/createHTML");
const teamRoster = [];

// Questions for manager
const managerQs = [
  {
    type: "input",
    message: "Manager's Name",
    name: "name",
  },
  {
    type: "input",
    message: "Manager's Employee ID",
    name: "id",
  },
  {
    type: "input",
    message: "Email",
    name: "email",
  },
  {
    type: "input",
    message: "Office Number",
    name: "officeNumber",
  },
];

const engineerQs = [
  {
    type: "input",
    message: "Engineer's Name",
    name: "engineerName",
  },
  {
    type: "input",
    message: "Engineer's Employee ID",
    name: "engineerEID",
  },
  {
    type: "input",
    message: "Engineer's Email",
    name: "engineerEmail",
  },
  {
    type: "input",
    message: "Engineer's GitHub Username",
    name: "github",
  },
];

const internQs = [
  {
    type: "input",
    message: "Intern's Name",
    name: "internName",
  },
  {
    type: "input",
    message: "Intern's Employee ID",
    name: "internEID",
  },
  {
    type: "input",
    message: "Intern's Email",
    name: "internEmail",
  },
  {
    type: "input",
    message: "Intern's School",
    name: "internSchool",
  },
];

const menu = [
  {
    type: "list",
    message: "Which action would you like to do next?",
    name: "menu",
    choices: ["Add Engineer", "Add Intern", "Build Roster"],
  },
];

// Initializes the app by asking questions to add the Manager
addManager();

// Prompts user questions about the manager
function addManager() {
  inquirer.prompt(managerQs).then((response) => {
    // constructs new instance of Manager object
    const manager = new Manager(
      response.name,
      response.id,
      response.email,
      response.officeNumber
    );
    // Adds newly created manager to the team roster
    teamRoster.push(manager);
    console.log(teamRoster);
    // Returns user to the menu options to add another employee or to finish building the roster
    menuOptions();
  });
}

// Prompts user questions about the Engineer
function addEngineer() {
  inquirer.prompt(engineerQs).then((response) => {
    // constructs new instance of Engineer object
    const engineer = new Engineer(
      response.engineerName,
      response.engineerEID,
      response.engineerEmail,
      response.github
    );
    // Adds newly created Engineer to the team roster
    teamRoster.push(engineer);
    console.log(teamRoster);
    // Returns user to the menu options to add another employee or to finish building the roster
    menuOptions();
  });
}

// Prompts user questions about the Intern
function addIntern() {
  inquirer.prompt(internQs).then((response) => {
    const intern = new Intern(
      response.internName,
      response.internEID,
      response.internEmail,
      response.internSchool // why is this coming back as undefined?
    );
    // Adds newly created Engineer to the team roster
    teamRoster.push(intern);
    console.log(teamRoster);
    // Returns user to the menu options to add another employee or to finish building the roster
    menuOptions();
  });
}

// Menu option to either Add an Engineer, Add an Intern, or to finish by building the team roster
function menuOptions() {
  inquirer.prompt(menu).then((response) => {
    if (response.menu === "Add Engineer") {
      addEngineer();
    } else {
      if (response.menu === "Add Intern") {
        addIntern();
      } else {
        if (response.menu === "Build Roster") {
          buildRoster();
        }
      }
    }
  });
}

// Builds roster based on user inputted data
function buildRoster() {
  fs.writeFile("./dist/index.html", createHTML(teamRoster), (err) =>
    err ? console.error(err) : console.log(teamRoster)
  );
}
