const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

function createHTML(cardInfo) {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>My Team</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css
">
      <link rel="stylesheet" type="text/css" href="./style.css" />
    </head>
    <body>

      <h1>Team Roster</h1>
      <div class="card" style="width: 18rem;">
      
${JSON.stringify(cardInfo)}

      </div>
  </div>
</div>

    </body>
  </html>
  `;
}

const createManager = (manager) => {
  return `<div class="card-body">
  <h2 class="card-title">${manager.name}</h2>

<h3 class="card-subtitle mb-2 text-muted">Manager Role: ${manager.role}</h3>
<h3 class="card-subtitle mb-2 text-muted">Employee ID: ${manager.id}</h3>

<h3 class="card-subtitle mb-2 text-muted" ><a href= "mailto:${manager.email}">Email: </h3></a>

<h3 class="card-subtitle mb-2 text-muted">Office Number: ${manager.officeNumber} </h3>`;
};

const createEngineer = (engineer) => {
  return `<div class="card-body">
  <h2 class="card-title">${engineer.name}Engineer's Name</h2>

<h3 class="card-subtitle mb-2 text-muted">Engineer's Role: ${engineer.role}</h3>
<h3 class="card-subtitle mb-2 text-muted">Employee ID: ${engineer.id}</h3>

<h3 class="card-subtitle mb-2 text-muted"><a href= "mailto:${engineer.email}">Email: </h3></a>

<h3 class="card-subtitle mb-2 text-muted">GitHub: ${engineer.officeNumber} </h3>`;
};

const createIntern = (intern) => {
  return `<div class="card-body">
  <h2 class="card-title">${intern.name}Intern's Name</h2>

<h3 class="card-subtitle mb-2 text-muted">Intern Role: ${intern.role}</h3>
<h3 class="card-subtitle mb-2 text-muted">Employee ID: ${intern.id}</h3>

<h3 class="card-subtitle mb-2 text-muted"><a href= "mailto:${intern.email}">Email: </h3></a>

<h3 class="card-subtitle mb-2 text-muted">School: ${intern.officeNumber} </h3>`;
};

module.exports = createHTML;
// module.exports = createManager;
// module.exports = createEngineer;
// module.exports = createIntern;
