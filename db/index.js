const connection = require("./connection")
class DB {
  constructor (connection) {
    this.connection = connection
  }

  viewAllEmployees() {
    return this.connection.promise().query(
      "SELECT employees.id, employees.first_name, employees.last_name, roles.title, departments.name AS departments, roles.salary, CONCAT (manager.first_name, ' ',manager.last_name) AS manager FROM employees LEFT JOIN roles on employees.role_id = roles.id LEFT JOIN departments on roles.department_id = departments.id LEFT JOIN employees manager on manager.id = employees.manager_id;"
    )
  }

  viewEEByDepartment() {
    return this.connection.promise().query(
      "SELECT employees.id, employees.first_name, employees.last_name, departments.name AS departments FROM employees LEFT JOIN roles on employees.role_id = roles.id LEFT JOIN departments on roles.department_id = departments.id;"
    )
  }

  viewEEByMgr() {
    return this.connection.promise().query(
      "SELECT employees.id, employees.first_name, employees.last_name,CONCAT (manager.first_name, ' ',manager.last_name) AS manager FROM employees LEFT JOIN employees manager on manager.id = employees.manager_id;"
    )
  }

  addEmployee(employee) {
    return this.connection.promise().query(
      "INSERT INTO employees SET ?", employee
    )
  }

  findAllDepartments() {
    return this.connection.promise().query(
    "SELECT departments.id, departments.name FROM department;"
    );
  }

  updateEmployeeRole(employeeId, roleId) {
    return this.connection.promise().query(
      "UPDATE employees SET roles_id = ? WHERE id = ?",
      [roleId, employeeId]
    );
  }

  createRole(role) {
    return this.connection.promise().query("INSERT INTO roles SET ?", role);
  }

  createDepartment(department) {
    return this.connection.promise().query("INSERT INTO departments SET ?", department);
  }

  findAllRoles() {
    return this.connection.promise().query(
      "SELECT roles.id, roles.title, departments.name AS department, roles.salary FROM roles LEFT JOIN departments on roles.department_id = departments.id;"
    );
  }

}

module.exports = new DB(connection)