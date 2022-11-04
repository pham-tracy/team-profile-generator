// Generates the HTML page that displays the Team Roster
function generateHTML(cardInfo) {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>My Team</title>
      <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
      crossorigin="anonymous"/>
      <link rel="stylesheet" type="text/css" href="./style.css" />
    </head>
    
    <body>
      <header><h1>Team Roster</h1></header>
      
      ${cardInfo}

      </div>
 
    </body>
  </html>`;
}

// HTML for Manager employee
const createManager = (manager) => {
  return `
  <div class="row row-cols-1 row-cols-md-3 justify-content-center mx-auto">
  <div class="col mb-4 ">
    <div class="card" style="width: 25rem;">
      <div class="card-header">
        <h2>${manager.name}</h2>
        <br>
        <h3>Manager</h3>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${manager.id}</li>
        <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
        <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
      </ul>
    </div>
  </div>`;
};

// HTML for Engineer employees
const createEngineer = (engineer) => {
  return `
  <div class="col mb-4">
    <div class="card" style="width: 25rem;">
      <div class="card-header">
        <h2> ${engineer.name} </h2>
        <br>
        <h3> Engineer </h3>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${engineer.id}</li>
        <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
        <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a></li>
      </ul>
    </div>
  </div>`;
};

// HTML for Intern employees
const createIntern = (intern) => {
  return `
  <div class="col mb-4">
    <div class="card" style="width: 25rem;">
      <div class="card-header">
        <h2> ${intern.name} </h2>
        <br>
        <h3> Intern </h3>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${intern.id}</li>
        <li class="list-group-item">Email: <a href= "mailto:${intern.email}">${intern.email} </a></li>
        <li class="list-group-item">School: ${intern.school}</li>
      </ul>
    </div>
  </div>`;
};

// Creates individual cards for each employee inputted by the user
const createDataInfo = (data) => {
  employeeInfo = [];

  for (let i = 0; i < data.length; i++) {
    const employee = data[i];
    switch (employee.getRole()) {
      case "Manager":
        const managerInfo = createManager(employee);
        employeeInfo.push(managerInfo);
        break;
      case "Engineer":
        const engineerInfo = createEngineer(employee);
        employeeInfo.push(engineerInfo);
        break;
      case "Intern":
        const internInfo = createIntern(employee);
        employeeInfo.push(internInfo);
        break;
    }
  }

  // Adds user-inputted employee information to main HTML file
  return generateHTML(employeeInfo.join(""));
};

module.exports = createDataInfo;
