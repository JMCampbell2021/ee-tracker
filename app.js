const inquirer = require('inquirer');
const db = require('./db');
require('console.table')
  
// First prompt to start server
function promptUser () {
    return inquirer
    .prompt([{
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
            name: "View employees by manager",
            value: "viewEEByMgr"
          },
          {
            name: "Add an employee",
            value: "addEE"
          },
          {
            name: "Update an employee",
            value: "updateEE"
          },
          {
            name: "Update an employee manager",
            value: "updateEEmanager"
          },
          {
            name: "Remove an employee",
            value: "RemoveEE"
          },
          {
            name: "View Department",
            value: "viewDepartment"
          },
          {
            name: "Add Department",
            value: "addDepartment"
          },
          {
            name: "Update Department",
            value: "updateDepartment"
          },
          {
            name: "Remove Department",
            value: "removeDepartment"
          },
          {
            name: "Add Manager",
            value: "addManager"
          },
          {
            name: "Update Manager",
            value: "updateManager"
          },
          {
            name: "Exit application",
            value: "endApp"
          },
        ]
      },
    ]).then(res => {
      let choice = res.task 
      if (choice == "viewEmployees") {
        viewEmployees()
      }
      if (choice == "viewEEByDepartment") {
        viewEEByDepartment()
      }
      if (choice == "viewEEByMgr") {
        viewEEByMgr()
      }
      if (choice == "addEE") {
        addEE()
      }
      if (choice == "updateEE") {
        updateEE()
      }
      if (choice == "endApp") {
        endApp()
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
  
  function addEE() {
    return inquirer
    .prompt([
      {
        name: "first_name",
        message: "What is the employee's first name?"
      },
      {
        name: "last_name",
        message: "What is the employee's last name?"
      }
    ])
    
    .then(res => {
    let first = res.first_name;
    let last = res.last_name;
  
    db.findAllRoles()
      .then(([rows]) => {
      let roles = rows;
      const roleList = roles.map(({ id, title }) => ({
      name: title,
      value: id
      }));
  
      return inquirer
      .prompt({
      type: "list",
      name: "roleId",
      message: "What is the employee's role?",
      choices: roleList
      })
       .then(res => {
        let roleId = res.roleId;
  
        db.viewAllEmployees()
        .then(([rows]) => {
          let employees = rows;
          const managers = employees.map(({ id, first_name, last_name }) => ({
            name: `${first_name} ${last_name}`,
            value: id
            }));
  
            managers.unshift({ name: "None", value: null });
  
            return inquirer 
            .prompt({
            type: "list",
            name: "managerId",
            message: "Who is the employee's manager?",
            choices: managers
            })
            .then(res => {
            let employee = {
            manager_id: res.managerId,
            role_id: roleId,
            first_name: first,
            last_name: last
            }
  
            db.addEmployee(employee);
            })
          .then(() => promptUser())
          })
        })
      })
    })
  }

  function endApp() {
    process.exit();
  }

  promptUser();
