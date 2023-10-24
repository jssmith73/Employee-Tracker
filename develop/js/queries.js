const connection = require('./connect');

class DB {

    constructor(connection) {
        this.connection = connection;
    }

//View all departments

viewDepartments() {
    return this.connection.promise().query(
       "SELECT departments.id, departments.name FROM departments;"
    );
};

//View all roles

viewRoles() {
    return this.connection.promise().query(
       "SELECT roles.id, roles.title, roles.salary, roles.dept_id FROM roles;"
    );
};

//View all employees

viewEmployees() {
    
    return this.connection.promise().query(
        "SELECT employees.id, employees.first_name, employees.last_name, employees.role_id, employees.manager_id, " +
        "roles.title, roles.salary, departments.name " +
        "FROM employees " +
        "LEFT JOIN roles ON employees.role_id = roles.id " +
        "LEFT JOIN departments ON roles.dept_id = departments.id"
    );
    
}}

//Exports to index.js
module.exports = new DB(connection);