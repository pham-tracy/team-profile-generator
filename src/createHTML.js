const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

function createHTML() {
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


      ${createManager}


      
        <div class="card-body">
          <h2 class="card-title">Manager's Name</h2>


    <h3 class="card-subtitle mb-2 text-muted">Manager Role: </h3>
    <h3 class="card-subtitle mb-2 text-muted">Employee ID: </h3>

    <h3 class="card-subtitle mb-2 text-muted" ><a href= "mailto:">Email: </h3></a>

    <h3 class="card-subtitle mb-2 text-muted">Office Number: </h3>

    
        <div class="card-body">
          <h2 class="card-title">Engineer's Name</h2>


    <h3 class="card-subtitle mb-2 text-muted">Engineer Role: </h3>
    <h3 class="card-subtitle mb-2 text-muted">Employee ID: </h3>

    <h3 class="card-subtitle mb-2 text-muted" ><a href= "mailto:">Email: </h3></a>

    <h3 class="card-subtitle mb-2 text-muted">GitHub: </h3>
        </div>



        <div class="card-body">
          <h2 class="card-title">Intern's Name</h2>


    <h3 class="card-subtitle mb-2 text-muted">Intern Role: </h3>
    <h3 class="card-subtitle mb-2 text-muted">Employee ID: </h3>

    <h3 class="card-subtitle mb-2 text-muted" ><a href= "mailto:">Email: </h3></a>

    <h3 class="card-subtitle mb-2 text-muted">School: </h3>
        </div>

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

// const createEngineer = (engineer) => {
//   return `<div class="card-body">
//   <h2 class="card-title">${engineer.name}Manager's Name</h2>

// <h3 class="card-subtitle mb-2 text-muted">Manager Role: ${engineer.role}</h3>
// <h3 class="card-subtitle mb-2 text-muted">Employee ID: ${engineer.id}</h3>

// <h3 class="card-subtitle mb-2 text-muted" ><a href= "mailto:${engineer.email}">Email: </h3></a>

// <h3 class="card-subtitle mb-2 text-muted">Office Number: ${engineer.officeNumber} </h3>`;
// };

// const createIntern = (intern) => {
//   return `<div class="card-body">
//   <h2 class="card-title">${intern.name}Manager's Name</h2>

// <h3 class="card-subtitle mb-2 text-muted">Manager Role: ${intern.role}</h3>
// <h3 class="card-subtitle mb-2 text-muted">Employee ID: ${intern.id}</h3>

// <h3 class="card-subtitle mb-2 text-muted" ><a href= "mailto:${intern.email}">Email: </h3></a>

// <h3 class="card-subtitle mb-2 text-muted">Office Number: ${intern.officeNumber} </h3>`;
// };

module.exports = createHTML;
// module.exports = createManager;
// module.exports = createEngineer;
// module.exports = createIntern;
