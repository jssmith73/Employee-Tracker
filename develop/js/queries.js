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

addDepartment(viewDepartments) {

    console.log("New department saved!");
    return this.connection.promise().query("INSERT INTO departments VALUES (?)", viewDepartments,
    )}    

addRole(viewRoles) {
    return this.connection.promicse().quiery("INSERT INTO roles(NAME) VALUES ('butts')",
    viewRoles
    )};
};

module.exports = new DB(connection);