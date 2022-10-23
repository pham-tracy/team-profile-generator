const fs = require("fs");
const inquirer = require("inquirer");

const employeeQs = [
  {
    type: "input",
    message: "Team Manager's Name",
    name: "name",
  },
  {
    type: "input",
    message: "Employee ID",
    name: "EID",
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

inquirer.prompt(employeeQs).then((response) =>
  fs.writeFile(
    "index.html",
    formatHTML(response),

    (err) => (err ? console.error(err) : console.log(response))
  )
);

function formatHTML(response) {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>My Team</title>
      <link rel="stylesheet" type="text/css" href="./style.css" />
    </head>
    <body>
      <header>
        <h1>Team Roster</h1>
      </header>
  
      <main>
        <section>
            <h2></h2>
          </header> 



          <div>

            <h3>${response.name}</h3>
            <p>Manager</p>
            <p>Employee ID: ${response.EID}</p>
            <p>Email: <a href= "mailto:: ${response.email}">${response.email}</a></p> 
            <p>Office Number:${response.officeNumber}</p> 
    
          </div>
          
        </section>
      </main>
    </body>
  </html>
  `;
}
