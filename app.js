const inquirer = require('inquirer');
const db = require('./db');
require('console.table')
  
// First prompt to start server
function promptUser () {
    return inquirer
    .prompt([
      {
        type: 'list',
        name: 'task',
        message: 'What would you like to do? (Required)',
        choices: [ 
          { 
            name: "View all employees",
            value: "viewEmployees"
          },
          // "View All Employees by Department",
          // "View Employees by Manager",
          // "View Departments",
          // "Add Employee",
          // "Remove Employees",
          // "Update Employee Role",
          // "Add Role",
          // "Remove Role",
          // "Update Role",
          // "Add Department",
          // "Remove Department",
          // "Update Department",
          // "Update Employee Manager",
          // "End"
        ]
      },
    ]).then(res => {
      let choice = res.task 
      console.log(choice)
      if (choice == "viewEmployees") {
        viewEmployees()
      }
    });
  }

  function viewEmployees() {
    db.viewAllEmployees().then(([rows]) =>{
      let employees = rows 
      console.table(employees)
    }).then(() =>{promptUser()})
  }

  promptUser();