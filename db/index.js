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
}

module.exports = new DB(connection)