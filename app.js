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
          {
            name: "View all employees by department",
            value: "viewEEByDepartment"
          },
          {
            name: "View Employees by Manager",
            value: "viewEEByMgr"
          },

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
      if (choice == "viewEEByDepartment") {
        viewEEByDepartment()
      }
      if (choice == "viewEEByMgr") {
        viewEEByMgr()
      }
      

    });
  }

  function viewEmployees() {
    db.viewAllEmployees().then(([rows]) =>{
      let employees = rows 
      console.table(employees)
    }).then(() =>{promptUser()})
  }

  function viewEEByDepartment() {
    db.viewEEByDepartment().then(([rows]) =>{
      let employees = rows 
      console.table(employees)
    }).then(() =>{promptUser()})
  }

  function viewEEByMgr() {
    db.viewEEByMgr().then(([rows]) =>{
      let employees = rows 
      console.table(employees)
    }).then(() =>{promptUser()})
  }

  promptUser();