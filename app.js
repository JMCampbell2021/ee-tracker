const inquirer = require('inquirer');
  
const promptUser = () => {
    return inquirer
    .prompt([
      {
        type: 'list',
        name: 'task',
        message: 'What would you like to do? (Required)',
        choices: [
          "View All Employees",
          "View All Employees by Department",
          "View Employees by Manager",
          "View Departments",
          "Add Employee",
          "Remove Employees",
          "Update Employee Role",
          "Add Role",
          "Remove Role",
          "Update Role",
          "Add Department",
          "Remove Department",
          "Update Department",
          "Update Employee Manager",
          "End"]
      },
    ])
    .then((answer) => {
      switch (answer.action) {
      case "View All Employees":
        viewEmployees();
        break;
  
      case "View All Employees By Department":
        viewEmployeesByDept();
        break;

      case "View Employees by Manager":
        viewEmployeesByMgr();
        break;
  
      case "View Departments":
        viewDept();
        break;
  
      case "Add Employee":
        addEmployee();
        break;

      case "Remove Employee":
        removeEmployee();
        break;
        
      case "Update Employee Role":
        updateEmployeeRole();
        break;
        
      case "Add Role":
        addRole();
        break;

      case "Remove Role":
        removeRole();
        break;

      case "Update Role":
        updateRole();
        break;

      case "Add department":
        addDept();
        break;

      case "Remove department":
        removeDepartment();
        break;

      case "Update department":
        updateDepartment();
        break;

      case "Update Employee Manager":
        updateEmployeeMng();
        break;
      
      case "EXIT":
        console.log("Thanks for using Employee Tracker!")
        process.exit();
      };
    });
  }
  
  promptUser();