const connection = require('./connect');
const sql = require('./connect');

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

viewRoles() {
    return this.connection.promise().query(
       "SELECT roles.id, roles.title, roles.salary, roles.dept_id FROM roles;"
    );
};

viewEmployees() {
    return this.connection.promise().query(
       "SELECT employees.id, employees.first_name, employees.last_name, employees.role_id FROM employees"
    )};

addDepartment() {
    return this.connection.promise().query("INSERT INTO departments SET ?", departments
    )}
};

module.exports = new DB(connection);